import{u as p}from"./checker-8e08a759.js";import{P as D,r as T,Q as A,X as U,k as B,l as f,J as N,x as o,n as E,q as e,c as a,I as r,v as S,S as i,A as h,O as z,K as F,s as R}from"./index-d8570b98.js";import{b as k,d as K,e as j,V as u,a as q}from"./VRow-ae8b4a94.js";import{V as H}from"./VDialog-029e5a82.js";import{V as I}from"./VTextField-d53f6a8a.js";import{V as J}from"./VSwitch-eb604b8d.js";import"./VGrid-aa4a8c47.js";import"./VOverlay-f87aa014.js";import"./forwardRefs-49923578.js";import"./VSelectionControl-d26b90d8.js";const M=R("h2",{class:"mb-0"}," Checker ",-1),ae={__name:"chekers",setup(O){const V=[{text:"Kode",value:"code",width:200},{text:"Nama",value:"name"},{text:"Email",value:"email"},{text:"Aktif",value:"is_active"},{text:"Aksi",value:"operation",width:300}],{checkers:_,loading:m,error:C,success:s}=D(p()),{fetchCheckers:d,deleteChecker:v,activateChecker:x}=p();d();async function g(n){confirm("Apakah Anda yakin ingin menghapus checker ini?")&&(await v(n.id),d())}async function w(n){const l=new FormData;l.append("is_active",n.is_active?1:0),await x(n.id,l),d()}const c=T("");return A(()=>{document.title="Checker"}),U(()=>{C.value=null}),(n,l)=>{const y=B("EasyDataTable");return f(),N(F,null,[o(s)?(f(),E(H,{key:0,modelValue:o(s),"onUpdate:modelValue":l[1]||(l[1]=t=>h(s)?s.value=t:null),"max-width":"400"},{default:e(()=>[a(k,null,{default:e(()=>[a(K,null,{default:e(()=>[r(S(o(s)),1)]),_:1}),a(j,null,{default:e(()=>[a(i,{color:"primary",text:"",onClick:l[0]||(l[0]=()=>s.value=null)},{default:e(()=>[r(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):z("",!0),a(q,null,{default:e(()=>[a(u,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:e(()=>[M,a(i,{to:"/admin/checker/create",color:"primary"},{default:e(()=>[r(" Tambah Checker ")]),_:1})]),_:1}),a(u,{cols:"12"},{default:e(()=>[a(I,{modelValue:o(c),"onUpdate:modelValue":l[2]||(l[2]=t=>h(c)?c.value=t:null),label:"Cari Checker",placeholder:"Cari Checker",clearable:"",loading:o(m),variant:"solo"},null,8,["modelValue","loading"])]),_:1}),a(u,{cols:"12"},{default:e(()=>[a(k,null,{default:e(()=>[a(y,{headers:V,items:o(_),loading:o(m),"search-value":o(c),"buttons-pagination":"","show-index":"",class:"data-table"},{"item-is_active":e(t=>[a(J,{modelValue:t.is_active,"onUpdate:modelValue":b=>t.is_active=b,color:"primary",onChange:()=>w(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),"item-operation":e(t=>[a(i,{to:{name:"admin-checker-edit",params:{id:t.id}},color:"primary",size:"small",class:"m-5"},{default:e(()=>[r(" Ubah ")]),_:2},1032,["to"]),a(i,{to:{name:"admin-checker-view",params:{id:t.id}},color:"info",size:"small"},{default:e(()=>[r(" Detail ")]),_:2},1032,["to"]),a(i,{color:"error",size:"small",class:"m-5",onClick:()=>g(t)},{default:e(()=>[r(" Hapus ")]),_:2},1032,["onClick"])]),_:1},8,["items","loading","search-value"])]),_:1})]),_:1})]),_:1})],64)}}};export{ae as default};
