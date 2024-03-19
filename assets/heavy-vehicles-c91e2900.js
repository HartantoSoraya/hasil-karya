import{d as B}from"./qrHelper-ce6183b3.js";import{u as p}from"./heavyVehicle-a6827fb6.js";import{P as T,r as D,Q as H,X as R,k as U,l as v,J as z,x as o,n as N,q as e,c as a,I as i,v as Q,S as r,A as V,O as S,K as E,s as F}from"./index-d8570b98.js";import{b as h,d as M,e as P,V as u,a as K}from"./VRow-ae8b4a94.js";import{V as j}from"./VDialog-029e5a82.js";import{V as q}from"./VTextField-d53f6a8a.js";import{V as I}from"./VSwitch-eb604b8d.js";import"./VGrid-aa4a8c47.js";import"./VOverlay-f87aa014.js";import"./forwardRefs-49923578.js";import"./VSelectionControl-d26b90d8.js";const J=F("h2",{class:"mb-0"}," Alat Berat ",-1),oe={__name:"heavy-vehicles",setup(O){const _=[{text:"Kode",value:"code",width:200},{text:"Merek",value:"brand"},{text:"Model",value:"model"},{text:"Tahun Produksi",value:"production_year"},{text:"Vendor",value:"vendor.name"},{text:"Aktif",value:"is_active"},{text:"Aksi",value:"operation",width:400}],{heavyVehicles:y,loading:m,error:C,success:s}=T(p()),{fetchHeavyVehicles:c,deleteHeavyVehicle:x,activateHeavyVehicle:k}=p();c();async function b(n){confirm("Apakah Anda yakin ingin menghapus kendaraan berat ini?")&&(await x(n.id),c())}async function g(n){const t=new FormData;t.append("is_active",n.is_active?1:0),await k(n.id,t),c()}const d=D("");function w(n,t){B(n,"Alat Berat "+t)}return H(()=>{document.title="Alat Berat"}),R(()=>{C.value=null}),(n,t)=>{const A=U("EasyDataTable");return v(),z(E,null,[o(s)?(v(),N(j,{key:0,modelValue:o(s),"onUpdate:modelValue":t[1]||(t[1]=l=>V(s)?s.value=l:null),"max-width":"400"},{default:e(()=>[a(h,null,{default:e(()=>[a(M,null,{default:e(()=>[i(Q(o(s)),1)]),_:1}),a(P,null,{default:e(()=>[a(r,{color:"primary",text:"",onClick:t[0]||(t[0]=()=>s.value=null)},{default:e(()=>[i(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):S("",!0),a(K,null,{default:e(()=>[a(u,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:e(()=>[J,a(r,{to:{name:"admin-heavy-vehicle-create"},color:"primary"},{default:e(()=>[i(" Tambah Alat Berat ")]),_:1})]),_:1}),a(u,{cols:"12"},{default:e(()=>[a(q,{modelValue:o(d),"onUpdate:modelValue":t[2]||(t[2]=l=>V(d)?d.value=l:null),label:"Cari Alat Berat",placeholder:"Cari Alat Berat",clearable:"",loading:o(m),variant:"solo"},null,8,["modelValue","loading"])]),_:1}),a(u,{cols:"12"},{default:e(()=>[a(h,null,{default:e(()=>[a(A,{headers:_,items:o(y),loading:o(m),"search-value":o(d),"buttons-pagination":"","show-index":"",class:"data-table"},{"item-is_active":e(l=>[a(I,{modelValue:l.is_active,"onUpdate:modelValue":f=>l.is_active=f,color:"primary",onChange:()=>g(l)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),"item-operation":e(l=>[a(r,{color:"info",size:"small",class:"m-5",onClick:f=>w(l.id,l.brand+" "+l.model)},{default:e(()=>[i(" Print QR Code ")]),_:2},1032,["onClick"]),a(r,{to:{name:"admin-heavy-vehicle-edit",params:{id:l.id}},color:"primary",size:"small",class:"m-5"},{default:e(()=>[i(" Ubah ")]),_:2},1032,["to"]),a(r,{to:{name:"admin-heavy-vehicle-view",params:{id:l.id}},color:"info",size:"small"},{default:e(()=>[i(" Detail ")]),_:2},1032,["to"]),a(r,{color:"error",size:"small",class:"m-5",onClick:()=>b(l)},{default:e(()=>[i(" Hapus ")]),_:2},1032,["onClick"])]),_:1},8,["items","loading","search-value"])]),_:1})]),_:1})]),_:1})],64)}}};export{oe as default};
