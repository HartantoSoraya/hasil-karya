import{u as p}from"./project-9843e9f7.js";import{P as C,r as j,Q as P,X as b,k as T,l as f,J as D,x as l,n as A,q as e,c as a,I as s,v as _,S as n,A as V,O as B,K as N,s as S}from"./index-d8570b98.js";import{b as g,d as E,e as z,V as d,a as R}from"./VRow-ae8b4a94.js";import{V as U}from"./VDialog-029e5a82.js";import{V as F}from"./VTextField-d53f6a8a.js";import"./VGrid-aa4a8c47.js";import"./VOverlay-f87aa014.js";import"./forwardRefs-49923578.js";const K=S("h2",{class:"mb-0"}," Proyek ",-1),L={__name:"projects",setup(M){const x=[{text:"Kode",value:"code",width:100},{text:"Nama",value:"name"},{text:"Pelanggan",value:"client.name"},{text:"Tanggal Mulai",value:"start_date",width:200},{text:"Tanggal Selesai",value:"end_date",width:200},{text:"Status",value:"status",width:100},{text:"Aksi",value:"operation",width:300}],{projects:v,loading:u,error:h,success:r}=C(p()),{fetchProjects:m,deleteProject:k}=p();m();async function y(c){confirm("Apakah Anda yakin ingin menghapus project ini?")&&(await k(c.id),m())}const i=j("");return P(()=>{document.title="Proyek"}),b(()=>{h.value=null}),(c,o)=>{const w=T("EasyDataTable");return f(),D(N,null,[l(r)?(f(),A(U,{key:0,modelValue:l(r),"onUpdate:modelValue":o[1]||(o[1]=t=>V(r)?r.value=t:null),"max-width":"400"},{default:e(()=>[a(g,null,{default:e(()=>[a(E,null,{default:e(()=>[s(_(l(r)),1)]),_:1}),a(z,null,{default:e(()=>[a(n,{color:"primary",text:"",onClick:o[0]||(o[0]=()=>r.value=null)},{default:e(()=>[s(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):B("",!0),a(R,null,{default:e(()=>[a(d,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:e(()=>[K,a(n,{to:{name:"admin-project-create"},color:"primary"},{default:e(()=>[s(" Tambah Proyek ")]),_:1})]),_:1}),a(d,{cols:"12"},{default:e(()=>[a(F,{modelValue:l(i),"onUpdate:modelValue":o[2]||(o[2]=t=>V(i)?i.value=t:null),label:"Cari Proyek",placeholder:"Cari Proyek",clearable:"",loading:l(u),variant:"solo"},null,8,["modelValue","loading"])]),_:1}),a(d,{cols:"12"},{default:e(()=>[a(g,null,{default:e(()=>[a(w,{headers:x,items:l(v),loading:l(u),"search-value":l(i),"buttons-pagination":"","show-index":"",class:"data-table"},{"item-start_date":e(t=>[s(_(t.start_date),1)]),"item-operation":e(t=>[a(n,{to:{name:"admin-project-edit",params:{id:t.id}},color:"primary",size:"small",class:"m-5"},{default:e(()=>[s(" Edit ")]),_:2},1032,["to"]),a(n,{to:{name:"admin-project-view",params:{id:t.id}},color:"info",size:"small"},{default:e(()=>[s(" Detail ")]),_:2},1032,["to"]),a(n,{color:"error",size:"small",class:"m-5",onClick:()=>y(t)},{default:e(()=>[s(" Hapus ")]),_:2},1032,["onClick"])]),_:1},8,["items","loading","search-value"])]),_:1})]),_:1})]),_:1})],64)}}};export{L as default};
