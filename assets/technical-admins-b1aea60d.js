import{u as p}from"./technicalAdmin-462dcec8.js";import{R as y,r as b,S as D,_ as U,k as B,l as f,J as N,x as n,n as E,q as a,c as e,I as o,v as R,Y as d,A as h,O as S,K as z,s as F}from"./index-b8bb9b87.js";import{b as _,d as K,e as j,V as c,a as q}from"./VRow-d63588e1.js";import{V as H}from"./VDialog-7855c666.js";import{V as I}from"./VTextField-d716ff87.js";import{V as J}from"./VSwitch-ac70ffe9.js";import"./VGrid-89f96509.js";import"./VOverlay-b398b44b.js";import"./forwardRefs-e658ad70.js";import"./index-e196a5dc.js";import"./VSelectionControl-7fa3b263.js";const M=F("h2",{class:"mb-0"}," Admin Teknik ",-1),la={__name:"technical-admins",setup(O){const V=[{text:"Kode",value:"code",width:200},{text:"Nama",value:"name"},{text:"Email",value:"email"},{text:"Aktif",value:"is_active"},{text:"Aksi",value:"operation",width:300}],{technicalAdmins:v,loading:u,error:k,success:i}=y(p()),{fetchTechnicalAdmins:r,deleteTechnicalAdmin:A,activateTechnicalAdmin:T}=p();r();async function x(s){confirm("Apakah Anda yakin ingin menghapus technicalAdmin ini?")&&(await A(s.id),r())}async function g(s){const t=new FormData;t.append("is_active",s.is_active?1:0),await T(s.id,t),r()}const m=b("");return D(()=>{document.title="Admin Teknik"}),U(()=>{k.value=null}),(s,t)=>{const C=B("EasyDataTable");return f(),N(z,null,[n(i)?(f(),E(H,{key:0,modelValue:n(i),"onUpdate:modelValue":t[1]||(t[1]=l=>h(i)?i.value=l:null),"max-width":"400"},{default:a(()=>[e(_,null,{default:a(()=>[e(K,null,{default:a(()=>[o(R(n(i)),1)]),_:1}),e(j,null,{default:a(()=>[e(d,{color:"primary",text:"",onClick:t[0]||(t[0]=()=>i.value=null)},{default:a(()=>[o(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):S("",!0),e(q,null,{default:a(()=>[e(c,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:a(()=>[M,e(d,{to:"/admin/technical-admin/create",color:"primary"},{default:a(()=>[o(" Tambah Admin Teknik ")]),_:1})]),_:1}),e(c,{cols:"12"},{default:a(()=>[e(I,{modelValue:n(m),"onUpdate:modelValue":t[2]||(t[2]=l=>h(m)?m.value=l:null),label:"Cari Admin Teknik",placeholder:"Cari Admin Teknik",clearable:"",loading:n(u),variant:"solo"},null,8,["modelValue","loading"])]),_:1}),e(c,{cols:"12"},{default:a(()=>[e(_,null,{default:a(()=>[e(C,{headers:V,items:n(v),loading:n(u),"search-value":n(m),"buttons-pagination":"","show-index":"",class:"data-table"},{"item-is_active":a(l=>[e(J,{modelValue:l.is_active,"onUpdate:modelValue":w=>l.is_active=w,color:"primary",onChange:()=>g(l)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),"item-operation":a(l=>[e(d,{to:{name:"admin-technical-admin-edit",params:{id:l.id}},color:"primary",size:"small",class:"m-5"},{default:a(()=>[o(" Ubah ")]),_:2},1032,["to"]),e(d,{to:{name:"admin-technical-admin-view",params:{id:l.id}},color:"info",size:"small"},{default:a(()=>[o(" Detail ")]),_:2},1032,["to"]),e(d,{color:"error",size:"small",class:"m-5",onClick:()=>x(l)},{default:a(()=>[o(" Hapus ")]),_:2},1032,["onClick"])]),_:1},8,["items","loading","search-value"])]),_:1})]),_:1})]),_:1})],64)}}};export{la as default};
