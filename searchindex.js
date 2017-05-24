Search.setIndex({docnames:["devito","download","heat","index","tutorials","wave"],envversion:52,filenames:["devito.rst","download.rst","heat.rst","index.rst","tutorials.rst","wave.rst"],objects:{"":{devito:[0,0,0,"-"]},"devito.cgen_utils":{Allocator:[0,1,1,""],CodePrinter:[0,1,1,""],ccode:[0,4,1,""],ccode_eq:[0,4,1,""]},"devito.cgen_utils.Allocator":{onheap:[0,2,1,""],onstack:[0,2,1,""],push_heap:[0,3,1,""],push_stack:[0,3,1,""]},"devito.compiler":{GNUCompiler:[0,1,1,""],get_compiler_from_env:[0,4,1,""],get_tmp_dir:[0,4,1,""],jit_compile:[0,4,1,""],load:[0,4,1,""]},"devito.dimension":{Dimension:[0,1,1,""]},"devito.dimension.Dimension":{ccode:[0,2,1,""],decl:[0,2,1,""],default_assumptions:[0,2,1,""],dtype:[0,2,1,""],is_Buffered:[0,2,1,""],is_Lowered:[0,2,1,""],symbolic_size:[0,2,1,""]},"devito.finite_difference":{cross_derivative:[0,4,1,""],first_derivative:[0,4,1,""],second_derivative:[0,4,1,""]},"devito.interfaces":{DenseData:[0,1,1,""],TimeData:[0,1,1,""]},"devito.interfaces.DenseData":{data:[0,2,1,""],default_assumptions:[0,2,1,""],dx2:[0,2,1,""],dx2y2:[0,2,1,""],dx2z2:[0,2,1,""],dx4:[0,2,1,""],dx:[0,2,1,""],dxl:[0,2,1,""],dxr:[0,2,1,""],dxy:[0,2,1,""],dxz:[0,2,1,""],dy2:[0,2,1,""],dy2z2:[0,2,1,""],dy4:[0,2,1,""],dy:[0,2,1,""],dyl:[0,2,1,""],dyr:[0,2,1,""],dyz:[0,2,1,""],dz2:[0,2,1,""],dz4:[0,2,1,""],dz:[0,2,1,""],dzl:[0,2,1,""],dzr:[0,2,1,""],initialize:[0,3,1,""],is_DenseData:[0,2,1,""],laplace2:[0,3,1,""],laplace:[0,2,1,""]},"devito.interfaces.TimeData":{backward:[0,2,1,""],default_assumptions:[0,2,1,""],dim:[0,2,1,""],dt2:[0,2,1,""],dt:[0,2,1,""],forward:[0,2,1,""],initialize:[0,3,1,""],is_TimeData:[0,2,1,""]},"devito.logger":{dle:[0,4,1,""],dle_warning:[0,4,1,""],dse:[0,4,1,""],dse_warning:[0,4,1,""],error:[0,4,1,""],info_at:[0,4,1,""],log:[0,4,1,""],set_log_level:[0,4,1,""],set_log_noperf:[0,4,1,""],warning:[0,4,1,""]},"devito.memmap_manager":{MemmapManager:[0,1,1,""]},"devito.memmap_manager.MemmapManager":{set_default_disk_path:[0,5,1,""],set_delete_file:[0,5,1,""],set_memmap:[0,5,1,""],setup:[0,5,1,""]},"devito.memory":{CMemory:[0,1,1,""],first_touch:[0,4,1,""],free:[0,4,1,""],malloc_aligned:[0,4,1,""]},"devito.memory.CMemory":{fill:[0,3,1,""]},"devito.nodes":{Block:[0,1,1,""],Expression:[0,1,1,""],Function:[0,1,1,""],Iteration:[0,1,1,""],List:[0,1,1,""],Node:[0,1,1,""],TimedList:[0,1,1,""]},"devito.nodes.Block":{ccode:[0,2,1,""],children:[0,2,1,""],is_Block:[0,2,1,""]},"devito.nodes.Expression":{ccode:[0,2,1,""],is_Expression:[0,2,1,""],is_scalar:[0,2,1,""],is_tensor:[0,2,1,""],output:[0,2,1,""],output_function:[0,2,1,""],shape:[0,2,1,""],stencil:[0,2,1,""],substitute:[0,3,1,""]},"devito.nodes.Function":{ccode:[0,2,1,""],children:[0,2,1,""],is_Function:[0,2,1,""]},"devito.nodes.Iteration":{bounds:[0,3,1,""],bounds_symbolic:[0,2,1,""],ccode:[0,2,1,""],children:[0,2,1,""],end:[0,3,1,""],extent:[0,3,1,""],is_Closed:[0,2,1,""],is_Elementizable:[0,2,1,""],is_Iteration:[0,2,1,""],is_Open:[0,2,1,""],is_Parallel:[0,2,1,""],is_Sequential:[0,2,1,""],is_Vectorizable:[0,2,1,""],start:[0,3,1,""]},"devito.nodes.List":{is_List:[0,2,1,""]},"devito.nodes.Node":{args:[0,2,1,""],args_frozen:[0,2,1,""],ccode:[0,2,1,""],children:[0,2,1,""],is_Block:[0,2,1,""],is_Element:[0,2,1,""],is_Expression:[0,2,1,""],is_FunCall:[0,2,1,""],is_Function:[0,2,1,""],is_Iteration:[0,2,1,""],is_List:[0,2,1,""],is_Node:[0,2,1,""]},"devito.nodes.TimedList":{name:[0,2,1,""]},"devito.operator":{Operator:[0,1,1,""]},"devito.parameters":{Parameters:[0,1,1,""]},"devito.pointdata":{PointData:[0,1,1,""]},"devito.pointdata.PointData":{coefficients:[0,2,1,""],coordinate_bases:[0,2,1,""],coordinate_indices:[0,2,1,""],coordinate_symbols:[0,2,1,""],default_assumptions:[0,2,1,""],inject:[0,3,1,""],interpolate:[0,3,1,""],is_PointData:[0,2,1,""],point_increments:[0,2,1,""],point_symbols:[0,2,1,""]},"devito.profiler":{Profiler:[0,1,1,""]},"devito.profiler.Profiler":{TIME:[0,2,1,""],add_profiling:[0,3,1,""],as_cgen_struct:[0,3,1,""],as_ctypes_pointer:[0,3,1,""],get_class:[0,3,1,""],s_name:[0,2,1,""],t_name:[0,2,1,""],timings:[0,2,1,""]},"devito.stencil":{Stencil:[0,1,1,""],StencilEntry:[0,1,1,""]},"devito.stencil.Stencil":{"null":[0,3,1,""],add:[0,3,1,""],anti:[0,3,1,""],dimensions:[0,2,1,""],empty:[0,2,1,""],entries:[0,2,1,""],extract:[0,6,1,""],frozen:[0,2,1,""],get:[0,3,1,""],rshift:[0,3,1,""],section:[0,3,1,""],split:[0,3,1,""],subtract:[0,3,1,""],union:[0,6,1,""]},"devito.stencil.StencilEntry":{dim:[0,2,1,""],ofs:[0,2,1,""]},"devito.tools":{DefaultOrderedDict:[0,1,1,""],aligned:[0,4,1,""],as_tuple:[0,4,1,""],convert_dtype_to_ctype:[0,4,1,""],filter_ordered:[0,4,1,""],filter_sorted:[0,4,1,""],flatten:[0,4,1,""],grouper:[0,4,1,""],invert:[0,4,1,""],partial_order:[0,4,1,""],pprint:[0,4,1,""],roundm:[0,4,1,""]},"devito.tools.DefaultOrderedDict":{copy:[0,3,1,""]},"devito.visitors":{FindNodes:[0,1,1,""],FindScopes:[0,1,1,""],FindSections:[0,1,1,""],FindSymbols:[0,1,1,""],IsPerfectIteration:[0,1,1,""],NestedTransformer:[0,1,1,""],ResolveIterationVariable:[0,1,1,""],SubstituteExpression:[0,1,1,""],Transformer:[0,1,1,""],printAST:[0,4,1,""]},"devito.visitors.FindNodes":{default_retval:[0,6,1,""],rules:[0,2,1,""],visit_Node:[0,3,1,""],visit_object:[0,3,1,""],visit_tuple:[0,3,1,""]},"devito.visitors.FindScopes":{default_retval:[0,6,1,""],visit_Element:[0,3,1,""],visit_Expression:[0,3,1,""],visit_FunCall:[0,3,1,""]},"devito.visitors.FindSections":{default_retval:[0,6,1,""],visit_Element:[0,3,1,""],visit_Expression:[0,3,1,""],visit_FunCall:[0,3,1,""],visit_Iteration:[0,3,1,""],visit_Node:[0,3,1,""],visit_tuple:[0,3,1,""]},"devito.visitors.FindSymbols":{default_retval:[0,6,1,""],rules:[0,2,1,""],visit_Expression:[0,3,1,""],visit_Iteration:[0,3,1,""],visit_tuple:[0,3,1,""]},"devito.visitors.IsPerfectIteration":{visit_Iteration:[0,3,1,""],visit_Node:[0,3,1,""],visit_object:[0,3,1,""],visit_tuple:[0,3,1,""]},"devito.visitors.NestedTransformer":{visit_Node:[0,3,1,""]},"devito.visitors.ResolveIterationVariable":{visit_Expression:[0,3,1,""],visit_Iteration:[0,3,1,""]},"devito.visitors.SubstituteExpression":{visit_Expression:[0,3,1,""]},"devito.visitors.Transformer":{visit:[0,3,1,""],visit_Node:[0,3,1,""],visit_list:[0,3,1,""],visit_object:[0,3,1,""],visit_tuple:[0,3,1,""]},devito:{cgen_utils:[0,0,0,"-"],clear_cache:[0,4,1,""],compiler:[0,0,0,"-"],dimension:[0,0,0,"-"],finite_difference:[0,0,0,"-"],interfaces:[0,0,0,"-"],logger:[0,0,0,"-"],memmap_manager:[0,0,0,"-"],memory:[0,0,0,"-"],nodes:[0,0,0,"-"],operator:[0,0,0,"-"],parameters:[0,0,0,"-"],pointdata:[0,0,0,"-"],profiler:[0,0,0,"-"],stencil:[0,0,0,"-"],tools:[0,0,0,"-"],visitors:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:staticmethod","6":"py:classmethod"},terms:{"boolean":0,"byte":0,"class":0,"default":0,"final":0,"function":[0,2,5],"import":[2,5],"int":[0,5],"new":[0,3],"null":0,"return":[0,5],"static":0,"super":5,"true":[0,5],"while":0,For:[0,2,5],LHS:0,OIS:0,Ois:0,RHS:0,The:[0,2,5],Then:5,Use:0,Uses:0,__init__:5,_travers:0,absorb:[0,5],accept:0,access:0,accord:[0,2,5],acoust:4,acoustic_exampl:5,act:0,add:[0,5],add_devito_param:5,add_profil:0,added:[0,5],addit:0,addition:0,affect:0,after:5,alia:0,align:0,all:[0,2,5],alloc:[0,2,5],along:0,also:[0,3],altern:0,amplitud:5,ani:0,anti:0,api:[0,3],appear:0,appli:[0,2,5],approxim:2,arg:0,args_frozen:0,argument:[0,5],arrai:[0,2,5],as_cgen_struct:0,as_ctypes_point:0,as_tupl:0,assign:0,assum:0,autom:3,automat:0,autotun:0,avail:0,axi:0,b_11:0,b_12:0,b_21:0,b_22:0,backward:[0,5],bag:0,base:[0,2,3],basenam:0,been:0,befor:0,between:[2,5],bilinear_interpol:0,block:0,bodi:0,bound:0,boundari:[0,5],bounds_symbol:0,breviti:0,buffer:[0,5],build:0,byte_s:0,call:[0,2,5],callback:0,can:[0,2,3,5],cannot:0,ccode:0,ccode_eq:0,ccodeprint:0,cell:[2,5],cfd:2,cgen:0,chang:0,check:[3,5],children:0,choic:0,chosen:0,clang:0,classmethod:0,clear_cach:0,clone:1,closest:0,cmemori:0,code:[0,2,3,5],codeprint:0,coeffici:[0,5],coffe:0,collect:0,com:[0,1],command:1,comparison:0,compil:3,complet:[2,5],comprehens:2,comput:0,condit:[0,2,5],conduct:2,coneoproject:0,configur:[0,2],consecut:5,consid:[2,5],constant:0,constrain:0,construct:[0,2],constructor:0,contain:[0,5],contol:0,convent:[2,5],convers:0,convert_dtype_to_ctyp:0,coordin:[0,5],coordinate_bas:0,coordinate_indic:0,coordinate_symbol:0,copi:0,core:0,correspond:0,crate:0,creat:[0,3,5],create_model:5,critic:0,cross:0,cross_deriv:0,ctype:0,current:2,damp:5,damp_boundari:5,dampen:5,data:[0,2,5],data_point:0,data_self:0,datatyp:0,debug:0,decl:0,declar:0,decor:0,def:5,default_assumpt:0,default_disk_path:0,default_factori:0,default_retv:0,defaultdict:0,defaultordereddict:0,defin:[0,2,3,5],defininf:0,definit:[0,3],delet:0,delete_fil:0,densedata:[0,5],depth:0,deriv:[0,2,5],determin:0,devic:0,devito_arch:0,devito_openmp:0,dict:0,dictat:[0,5],dictionari:0,diff:0,differ:[0,2,5],differenti:0,diffus:2,dim:0,dimens:5,direct:5,directori:0,discret:[0,2,5],discretis:0,disk:0,disk_path:0,distanc:5,dle:0,dle_warn:0,document:3,domain:5,doubl:0,download:3,drive:3,drop:0,dse:0,dse_warn:0,dt2:[0,5],dtype:[0,5],dure:0,dx2:[0,2],dx2y2:0,dx2z2:0,dx4:0,dxl:0,dxr:0,dxy:0,dxz:0,dy2:[0,2],dy2z2:0,dy4:0,dyl:0,dyr:0,dyz:0,dz2:0,dz4:0,dzl:0,dzr:0,each:[0,5],easi:[2,5],edg:5,either:0,element:0,empti:0,enabl:0,encapsualt:0,encount:0,encpasul:0,end:0,ensur:0,entri:0,environ:0,eqn:[2,5],equal:0,equat:[0,3,4,5],error:0,establish:0,everywher:5,exampl:[0,2,3,5],example_diffus:2,exapl:0,excel:2,execut:[0,2,3,5],exp:5,explicit:0,expr:0,express:[0,5],extent:0,extract:0,fail:0,fals:[0,5],fashion:0,field:[0,5],file:[0,5],fill:0,filter:0,filter_ord:0,filter_sort:0,find:3,findnod:0,findscop:0,findsect:0,findsymbol:0,finish:0,finit:[0,2,5],first:[0,2,5],first_deriv:0,first_touch:0,flag:0,flatten:0,float32:0,float64:0,folder:5,follow:[0,1],footer:0,forc:0,form:[0,5],forward:[0,2,5],forwardoper:5,found:[0,2,3,5],fourth:0,free:0,from:[0,1,2,3,5],frozen:0,full:3,fulli:0,functiondeclar:0,fwi:3,gcc:0,gener:[0,2,3,5],get:[0,4],get_class:0,get_compiler_from_env:0,get_critical_dt:5,get_shape_comp:5,get_sourc:5,get_spac:5,get_tmp_dir:0,ghost:5,git:1,github:[0,1],given:[0,2,5],global:0,gname:0,gnu:0,gnucompil:0,granular:0,grid:[0,2,5],group:0,grouper:0,have:0,header:0,heat:4,help:4,here:[2,3,4],hierarchi:0,high:3,highli:3,hold:0,honour:0,how:3,http:[0,1],icpc:0,identifi:0,igrid:5,in_omp_region:0,includ:0,increment:0,index:[0,3,5],indexifi:0,indic:0,info:0,info_at:0,inform:0,inherit:5,initi:[0,2,5],initialis:[2,5],initilis:0,inject:0,inlin:0,input:[0,5],input_param:5,insert:[0,5],inspect:0,instal:[1,3],instanc:[0,5],instruct:3,int32:0,int64:0,integ:0,intel:0,intelmiccompil:0,intend:[0,3],inter:0,interest:0,interfac:5,intermedi:0,internal_point:0,interpol:0,invers:3,invert:0,is_block:0,is_buff:0,is_clos:0,is_densedata:0,is_el:0,is_elementiz:0,is_express:0,is_funcal:0,is_funct:0,is_iter:0,is_list:0,is_low:0,is_nod:0,is_open:0,is_parallel:0,is_pointdata:0,is_scalar:0,is_sequenti:0,is_tensor:0,is_timedata:0,is_vectoriz:0,ishot:5,isperfectiter:0,item:0,iter:[0,5],its:[2,5],jit:[0,3],jit_compil:0,just:[0,3],kei:0,kernel:[0,3],known:0,kwarg:[0,5],label:0,lambda:0,laplac:[0,5],laplace2:0,laplacian:0,later:0,lead:[0,5],learn:3,left:0,len:5,length:0,level:[0,3],librari:0,like:0,limit:0,linspac:5,list:[0,4],lname:0,load:0,locat:5,log:0,loop:0,low:0,lower:0,mac:0,mai:0,main:0,make:[2,5],malloc_align:0,manag:[0,2,5],map:0,mapper:0,match:0,memmap:0,memmapmanag:0,memmori:0,mention:5,messag:0,meter:5,method:0,metric:0,mic:0,microsecond:0,mode:0,model:4,modul:3,more:[0,2],msg:0,multi:0,multipl:[0,3],must:0,name:[0,2,5],navier:2,nbpml:5,ndarrai:0,ndim:[0,5],need:[0,2],neg:0,neighbor:0,nest:0,nestedtransfor:0,nestedtransform:0,newaxi:5,next:[2,5],none:0,normal:0,note:0,npoint:[0,5],nrec:5,num:5,number:[0,5],numer:2,numpi:[0,2,5],obj:0,object:[0,2,5],occur:0,offload:0,offset:0,ofs:0,omit:0,omp_flag:0,one:0,ones:5,onheap:0,onli:0,onstack:0,onto:0,op2:0,openmp:0,oper:[0,2,3,5],opesci:1,oppos:0,optimis:3,option:0,order:[0,2,5],ordereddict:0,org:0,origin:5,osx:0,otherwis:0,our:[0,2,3,5],output:[0,5],output_funct:0,output_param:5,over:[0,5],p_t:0,padm:5,page:[0,3],parallel:0,parallelis:0,paralleliz:0,param:0,paramet:5,partial:0,partial_ord:0,partli:0,path:0,pattern:0,perfect:0,perform:[0,3],pip:1,placehold:0,plain:0,platform:3,pleas:2,plu:0,plug:[2,5],point:[0,5],point_incr:0,point_symbol:0,pointdata:5,pointer:0,posit:[0,5],possibl:0,potenti:0,pprint:0,precomput:5,prefix:0,prepend:0,preserv:0,pressur:5,pretti:0,print:0,printast:0,problem:[0,3],product:0,propag:[0,5],properti:[0,2,5],prototyp:3,provid:[0,2,3,5],publish:2,push_heap:0,push_stack:0,pymic:0,pyop2:0,python:0,qualifi:0,quantiti:0,queue:0,rate:5,read:5,rec:5,receiv:5,receiver_coord:5,red:5,refer:0,rel:0,relat:0,relev:0,remind:0,replac:0,repres:[0,2,5],requir:[1,5],resolveiterationvari:0,respect:[2,5],result:[0,2,5],ret:0,retval:0,revers:0,ricker:5,right:0,round:0,roundm:0,routin:0,rshift:0,rule:0,run:1,s_name:0,same:[0,5],sampl:0,save:[0,5],scalar:0,scope:0,search:3,second:0,second_deriv:0,section:0,see:2,seismic:5,self:[0,5],sequenc:0,set:[0,2,5],set_default_disk_path:0,set_delete_fil:0,set_log_level:0,set_log_noperf:0,set_memmap:0,set_receiver_po:5,set_shap:5,set_sourc:5,setup:0,sever:0,shape:[0,2,5],shift:0,shortcut:0,should:0,shown:[2,5],side:0,similar:5,simpli:[2,5],singl:0,size:[0,2,5],solv:5,some:2,soon:2,sort:0,sourc:[0,5],source_coord:5,sourcelik:5,space:[0,2,5],space_ord:[0,2,5],spars:[0,5],spatial:[0,5],spc_border:5,spc_order:5,specif:0,split:0,src:5,srccoord:5,stack:0,standard:0,start:[0,4],state:[0,2,5],statement:0,stencil:[2,5],stencilentri:0,step:[0,2,5],stoke:2,store:[0,2,5],stream:0,string:0,struct:0,structur:0,sub:[0,2,5],subclass:0,substitut:0,substituteexpress:0,subtract:0,support:0,symbol:[0,2,3,5],symbolic_s:0,symbolicdata:0,sympi:[0,2,3,5],t_name:0,t_size:0,take:0,temp:0,tempor:[0,2,5],tensor:0,term:5,termin:1,thei:5,them:0,therefor:0,thermal:2,thi:[0,2,5],through:0,thu:0,time:[0,2,3,5],time_dim:[0,5],time_loop_stencils_a:5,time_ord:[0,2,5],time_seri:5,timedata:[0,2,5],timedlist:0,timer:0,timestep:[0,2,5],tmp:0,to_ignor:0,tool:3,toolchain:0,top:0,tous:5,trace:5,transform:0,travers:0,tree:0,true_vp:5,tupl:[0,5],tutori:[2,3,5],two:[0,5],txt:1,type:0,u_t:0,under:2,union:0,unit:0,unknown:0,upper:0,use:[0,3],used:[0,2,5],user:1,uses:[2,5],using:0,utilis:0,val:0,valu:[0,2,5],vari:[0,2,5],variabl:0,veloc:5,verbos:0,version:0,via:0,view:0,visit:0,visit_el:0,visit_express:0,visit_funcal:0,visit_iter:0,visit_list:0,visit_nod:0,visit_object:0,visit_tupl:0,wai:5,want:0,warn:0,wave:4,waveform:3,wavelet:5,weight:0,well:5,when:0,where:[0,5],whether:0,which:[0,5],wiki:0,wikipedia:0,would:0,wrap:0,wrapper:0,write:0,written:0,wrt:0,you:[3,4],your:1,zero:[0,5]},titles:["devito package","Download Devito","Solving the 2D Heat Equation using Devito","Devito - Fast Finite Difference Computation","Devito tutorials","Acoustic Wave Modelling using Devito"],titleterms:{acoust:5,cgen_util:0,compil:0,comput:3,devito:[0,1,2,3,4,5],differ:3,dimens:0,download:1,equat:2,fast:3,finit:3,finite_differ:0,get:3,heat:2,indic:3,interfac:0,logger:0,memmap_manag:0,memori:0,model:5,modul:0,node:0,packag:0,paramet:0,pointdata:0,profil:0,solv:2,start:3,stencil:0,submodul:0,tabl:3,tool:0,tutori:4,using:[2,5],visitor:0,wave:5}})