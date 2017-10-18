import abc

import numpy as np
from cached_property import cached_property
from collections import defaultdict, namedtuple
from sympy import Symbol

from devito.exceptions import InvalidArgument
from devito.logger import debug

""" This module provides a set of classes that help in processing runtime arguments for
    kernels generated by devito. There are two class hierarchies here:
    - ArgumentProvider: These are for objects that might be used in the expression
      provided to the operator as symbols but might resolve to runtime arguments after
      code generation. Each ArgumentProvider provides one (or more) Argument
      object(s).
    - Argument: Classes inheriting from this are for objects that represent the
      argument itself. Each ArgumentProvider might provide one or more such objects
      which are used as placeholders for the argument as well as for verification and
      derivation of default values.
"""


class Argument(object):

    """ Abstract base class for any object that represents a run time argument for
        generated kernels.
    """

    __metaclass__ = abc.ABCMeta

    is_ScalarArgument = False
    is_TensorArgument = False
    is_PtrArgument = False

    def __init__(self, name, provider, default_value=None):
        self.name = name
        self.provider = provider
        self._value = self.default_value = default_value

    @property
    def value(self):
        try:
            if self._value.is_SymbolicFunction:
                return self._value._data_buffer
            elif self._value.is_Constant:
                return self._value.data
            else:
                raise InvalidArgument("Unexpected data object %s" % type(self._value))
        except AttributeError:
            return self._value

    @property
    def as_symbol(self):
        return Symbol(self.name)

    @property
    def dtype(self):
        return self.provider.dtype

    def reset(self):
        self._value = self.default_value

    @abc.abstractproperty
    def verify(self, kwargs):
        return

    def __repr__(self):
        return self.name


class ScalarArgument(Argument):

    """ Class representing scalar arguments that a kernel might expect.
        Most commonly used to pass dimension sizes
        enforce determines whether any reduction will be performed or not.
        i.e. if it is a user-provided value, use it directly.
    """

    is_ScalarArgument = True

    def __init__(self, name, provider, reducer=lambda old, new: new, default_value=None):
        super(ScalarArgument, self).__init__(name, provider, default_value)
        self.reducer = reducer

    def verify(self, value, engine, enforce=False):
        # Assuming self._value was initialised as appropriate for the reducer
        if value is not None:
            if self._value is not None and not enforce:
                self._value = self.reducer(self._value, value)
            else:
                self._value = value
        return self._value is not None


class TensorArgument(Argument):

    """ Class representing tensor arguments that a kernel might expect.
        Most commonly used to pass numpy-like multi-dimensional arrays.
    """

    is_TensorArgument = True

    def __init__(self, name, provider):
        super(TensorArgument, self).__init__(name, provider, provider)

    def verify(self, value, engine):
        if value is None:
            value = self._value

        verify = len(self.provider.shape) == len(value.shape)

        verify = verify and all(d.verify(v, engine) for d, v in
                                zip(self.provider.indices, value.shape))
        if verify:
            self._value = value

        return self._value is not None and verify


class PtrArgument(Argument):

    """ Class representing arbitrary arguments that a kernel might expect.
        These are passed as void pointers and then promptly casted to their
        actual type.
    """

    is_PtrArgument = True

    def __init__(self, name, provider):
        super(PtrArgument, self).__init__(name, provider, provider.value)

    def verify(self, value):
        self._value = value or self._value
        return True


class ArgumentProvider(object):

    """ Abstract base class for any object that, post code-generation, might resolve
        resolve to runtime arguments. We assume that one source object (e.g. Dimension,
        SymbolicData) might provide multiple runtime arguments.
    """

    def __init__(self, *args, **kwargs):
        pass

    @property
    def rtargs(self):
        """ Return a list of RuntimeArgument objects that this object needs.
        """
        raise NotImplemented()


class DimensionArgProvider(ArgumentProvider):

    """ This class is used to decorate the Dimension class with behaviour required
        to handle runtime arguments. All properties/methods defined here are available
        in any Dimension object.
    """

    reducer = max
    _default_value = None

    def __init__(self, *args, **kwargs):
        super(DimensionArgProvider, self).__init__(*args, **kwargs)

    def reset(self):
        for i in self.rtargs:
            i.reset()

    @property
    def value(self):
        """ Returns a tuple (same order as rtargs) with the current value of each rtarg
            If any of the rtargs has value None, the return value here is None.
        """
        child_values = tuple([i.value for i in self.rtargs])
        return child_values if all(i is not None for i in child_values) else None

    @property
    def dtype(self):
        """The data type of the iteration variable"""
        return np.int32

    @cached_property
    def rtargs(self):
        size = ScalarArgument(self.size_name, self, max)
        start = ScalarArgument(self.start_name, self, max, 0)
        end = ScalarArgument(self.end_name, self, max)
        return namedtuple("RuntimeArguments", ["size", "start", "end"])(size, start, end)

    def _promote(self, value, engine):
        """ Strictly, a dimension's value is a (currently) 3-tuple consisting of the
            values of each of its rtargs - currently size, start and end. However, for
            convenience, we may accept partial representations of the value, e.g. scalars
            and 2-tuples and interpret them in a certain way while assuming defaults for
            missing information. If value is:
            3-tuple: it contains explicit values for all 3 rtargs and hence will be used
            directly
            2-tuple: We assume we are being provided the (start, end) values. This will be
            promoted to a 3-tuple assuming size to be the same as end.
            scalar: We assume we are being provided the value of size. Promote to 3-tuple
            by assuming this scalar is the size and the end of the dimension. start will
            default to 0.
        """

        if not isinstance(value, tuple):
            # scalar
            size, start, end = self.rtargs
            offsets = (0, 0)
            if engine is not None:
                offsets = engine.dimension_offsets[self]
            value = (value, start.default_value + offsets[0], value - offsets[1])
        else:
            if len(value) == 2:
                # 2-tuple
                # Assume we've been passed a (start, end) tuple
                start, end = value
                value = (end, start, end)
            elif len(value) != 3:
                raise InvalidArgument("Expected either a scalar value or a tuple(2/3)")
        return value

    # TODO: Can we do without a verify on a dimension?
    def verify(self, value, engine, enforce=False):
        verify = True
        if value is None:
            if self.value is not None:
                return True

            try:
                parent_value = self.parent.value
                if parent_value is None:
                    return False
            except AttributeError:
                return False
        # Make sure we're dealing with a 3-tuple. See docstring of _promote for more
        value = self._promote(value, engine)
        if hasattr(self, 'parent'):
            parent_value = self.parent.value
            if parent_value is not None and not enforce:
                parent_value = self._promote(parent_value, engine)
                value = tuple([self.reducer(i1, i2) for i1, i2 in zip(value,
                                                                      parent_value)])
            verify = verify and self.parent.verify(value, engine)

        if value == self.value:
            return True

        # Derived dimensions could be linked through constraints
        # At this point, a constraint needs to be added that enforces
        # dim_e - dim_s < SOME_MAX
        # Also need a default constraint that dim_e > dim_s (or vice-versa)
        verify = verify and all([a.verify(v, engine, enforce=enforce) for a, v in
                                 zip(self.rtargs, value)])
        return verify


class ConstantArgProvider(ArgumentProvider):

    """ Class used to decorate Constant Data objects with behaviour required for runtime
        arguments.
    """

    @cached_property
    def rtargs(self):
        return (ScalarArgument(self.name, self, default_value=self.data),)


class TensorFunctionArgProvider(ArgumentProvider):

    """ Class used to decorate Symbolic Data objects with behaviour required for runtime
        arguments.
    """

    @cached_property
    def rtargs(self):
        return (TensorArgument(self.name, self),)


class ScalarArgProvider(ArgumentProvider):

    """ Class used to decorate Scalar Function objects with behaviour required for runtime
        arguments.
    """

    @cached_property
    def rtargs(self):
        return (ScalarArgument(self.name, self, self.dtype),)


class ArrayArgProvider(ArgumentProvider):

    """ Class used to decorate Tensor Function objects with behaviour required for runtime
        arguments.
    """

    @cached_property
    def rtargs(self):
        return (TensorArgument(self.name, self),)


class ObjectArgProvider(ArgumentProvider):

    """ Class used to decorate Objects with behaviour required for runtime arguments.
    """

    @cached_property
    def rtargs(self):
        return (PtrArgument(self.name, self),)


class ArgumentEngine(object):
    def extract_dimension_offsets(self, stencils):
        all_dimension_offsets = defaultdict(list)
        dimension_offsets = defaultdict(lambda: (0, 0))

        for s in stencils:
            for d in s:
                all_dimension_offsets[d] += s[d]

        for d in all_dimension_offsets:
            dimension_offsets[d] = (-min(all_dimension_offsets[d]),
                                    max(all_dimension_offsets[d]))
            try:
                # TODO: Maybe there should be some sort of reduction here
                dimension_offsets[d.parent] = dimension_offsets[d]
            except:
                pass
        self.dimension_offsets = dimension_offsets


def log_args(arguments):
    arg_str = []
    for k, v in arguments.items():
        if hasattr(v, 'shape'):
            arg_str.append('(%s, shape=%s, L2 Norm=%d)' %
                           (k, str(v.shape), np.linalg.norm(v.view())))
        else:
            arg_str.append('(%s, value=%s)' % (k, str(v)))
    debug("Passing Arguments: " + ", ".join(arg_str))
