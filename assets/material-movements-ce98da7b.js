import{u as v}from"./materialMovement-e64c2953.js";import{f as b,t as m,a as g}from"./formatters-c9e1f9c6.js";import{R as M,r as y,S as C,_ as T,k as D,l as p,J as P,x as t,n as R,q as e,c as l,I as o,v as i,Y as d,A as _,O as B,K as N,s as E}from"./index-b8bb9b87.js";import{b as f,d as S,e as U,V as u,a as A}from"./VRow-d63588e1.js";import{V as K}from"./VDialog-7855c666.js";import{V as z}from"./VTextField-d716ff87.js";import"./VGrid-89f96509.js";import"./VOverlay-b398b44b.js";import"./forwardRefs-e658ad70.js";import"./index-e196a5dc.js";const F=E("h2",{class:"mb-0"}," Perpindahan Material ",-1),$={__name:"material-movements",setup(I){const h=[{text:"Tanggal",value:"date"},{text:"Driver",value:"driver.name",width:200},{text:"Truck",value:"truck.name",width:200},{text:"POS",value:"station.name",width:200},{text:"Material",value:"station.material.name",width:200},{text:"Pemeriksa",value:"checker.name",width:200},{text:"Kapasitas Truk",value:"truck_capacity",width:200},{text:"Rasio Index",value:"observation_ratio",width:200},{text:"Rasio Padat",value:"solid_ratio",width:200},{text:"Estimasi Volume",value:"solid_volume_estimate",width:200},{text:"Keterangan",value:"remarks",width:200},{text:"Aksi",value:"operation",width:300}],{movements:x,loading:c,error:V,success:s}=M(v()),{fetchMaterialMovements:k,deleteMaterialMovement:O}=v();k();const n=y("");return C(()=>{document.title="Material Movement"}),T(()=>{V.value=null}),(j,r)=>{const w=D("EasyDataTable");return p(),P(N,null,[t(s)?(p(),R(K,{key:0,modelValue:t(s),"onUpdate:modelValue":r[1]||(r[1]=a=>_(s)?s.value=a:null),"max-width":"400"},{default:e(()=>[l(f,null,{default:e(()=>[l(S,null,{default:e(()=>[o(i(t(s)),1)]),_:1}),l(U,null,{default:e(()=>[l(d,{color:"primary",text:"",onClick:r[0]||(r[0]=()=>s.value=null)},{default:e(()=>[o(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):B("",!0),l(A,null,{default:e(()=>[l(u,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:e(()=>[F]),_:1}),l(u,{cols:"12"},{default:e(()=>[l(z,{modelValue:t(n),"onUpdate:modelValue":r[2]||(r[2]=a=>_(n)?n.value=a:null),label:"Cari Perpindahan Material",placeholder:"Cari Perpindahan Material",clearable:"",loading:t(c),variant:"solo"},null,8,["modelValue","loading"])]),_:1}),l(u,{cols:"12"},{default:e(()=>[l(f,null,{default:e(()=>[l(w,{headers:h,items:t(x),loading:t(c),"search-value":t(n),"buttons-pagination":"","show-index":"",class:"data-table"},{"item-date":e(a=>[o(i(t(b)(a.date)),1)]),"item-truck_capacity":e(a=>[o(i(t(m)(a.truck_capacity))+" m³ ",1)]),"item-observation_ratio":e(a=>[o(i(t(m)(a.observation_ratio))+" m³ ("+i(t(g)(a.observation_ratio/a.truck_capacity))+") ",1)]),"item-solid_ratio":e(a=>[o(i(t(m)(a.solid_ratio)),1)]),"item-solid_volume_estimate":e(a=>[o(i(t(m)(a.solid_volume_estimate))+" m³ ",1)]),"item-operation":e(a=>[l(d,{to:{name:"technical-admin-material-movement-edit",params:{id:a.id}},color:"primary",size:"small",class:"m-5"},{default:e(()=>[o(" Ubah ")]),_:2},1032,["to"]),l(d,{to:{name:"technical-admin-material-movement-view",params:{id:a.id}},color:"info",size:"small"},{default:e(()=>[o(" Detail ")]),_:2},1032,["to"])]),_:1},8,["items","loading","search-value"])]),_:1})]),_:1})]),_:1})],64)}}};export{$ as default};
