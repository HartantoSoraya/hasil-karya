import{u as y}from"./fuelLog-f3558dde.js";import{f as M,t as p}from"./formatters-c9e1f9c6.js";import{R as A,r as D,S as F,_ as K,k as N,l as r,J as c,x as o,n as _,q as a,c as l,I as t,v as s,Y as u,A as V,O as i,s as f,K as U}from"./index-b8bb9b87.js";import{b as x,d as z,e as R,V as h,a as S}from"./VRow-d63588e1.js";import{V as E}from"./VDialog-7855c666.js";import{V as P}from"./VTextField-d716ff87.js";import"./VGrid-89f96509.js";import"./VOverlay-b398b44b.js";import"./forwardRefs-e658ad70.js";import"./index-e196a5dc.js";const H=f("h2",{class:"mb-0"}," Pengisian BBM ",-1),J={class:"d-flex align-items-center"},j={key:0},q=f("br",null,null,-1),I={key:1},O=f("br",null,null,-1),Y={key:0},G={key:1},re={__name:"fuel-logs",setup(Q){const b=[{text:"Kode",value:"code"},{text:"Tanggal",value:"date"},{text:"Jenis Kendaraan",value:"type"},{text:"Kendaraan",value:"vehicle"},{text:"Volume (L)",value:"volume"},{text:"Solar Man",value:"gas_operator.name"},{text:"Aksi",value:"operation",width:300}],{fuelLogs:B,loading:v,error:C,success:d}=A(y()),{fetchFuelLogs:g,deleteFuelLog:T}=y();g();async function L(k){confirm("Apakah Anda yakin ingin menghapus fuel log truck ini?")&&(await T(k.id),g())}const m=D("");return F(()=>{document.title="Cek Log BBM"}),K(()=>{C.value=null}),(k,n)=>{const w=N("EasyDataTable");return r(),c(U,null,[o(d)?(r(),_(E,{key:0,modelValue:o(d),"onUpdate:modelValue":n[1]||(n[1]=e=>V(d)?d.value=e:null),"max-width":"400"},{default:a(()=>[l(x,null,{default:a(()=>[l(z,null,{default:a(()=>[t(s(o(d)),1)]),_:1}),l(R,null,{default:a(()=>[l(u,{color:"primary",text:"",onClick:n[0]||(n[0]=()=>d.value=null)},{default:a(()=>[t(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):i("",!0),l(S,null,{default:a(()=>[l(h,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:a(()=>[H,f("div",J,[l(u,{to:"/admin/fuel-log-truck/create",color:"primary",class:"mr-5"},{default:a(()=>[t(" Tambah Pengisian BBM Truk ")]),_:1}),l(u,{to:"/admin/fuel-log-heavy-vehicle/create",color:"primary"},{default:a(()=>[t(" Tambah Pengisian BBM Alat Berat ")]),_:1})])]),_:1}),l(h,{cols:"12"},{default:a(()=>[l(P,{modelValue:o(m),"onUpdate:modelValue":n[2]||(n[2]=e=>V(m)?m.value=e:null),label:"Cari Log",placeholder:"Cari Log",clearable:"",loading:o(v),variant:"solo"},null,8,["modelValue","loading"])]),_:1}),l(h,{cols:"12"},{default:a(()=>[l(x,null,{default:a(()=>[l(w,{headers:b,items:o(B),loading:o(v),"search-value":o(m),"buttons-pagination":"","show-index":"",class:"data-table"},{"item-date":a(e=>[t(s(o(M)(e.date)),1)]),"item-type":a(e=>[e.truck?(r(),c("span",j,[t(" Truk "),q,t(" (KM "+s(o(p)(e.odometer))+") ",1)])):i("",!0),e.heavy_vehicle?(r(),c("span",I,[t(" Alat Berat "),O,t(" (HM "+s(o(p)(e.hourmeter))+") ",1)])):i("",!0)]),"item-vehicle":a(e=>[e.truck?(r(),c("span",Y,s(e.truck.brand)+" "+s(e.truck.model),1)):i("",!0),e.heavy_vehicle?(r(),c("span",G,s(e.heavy_vehicle.brand)+" "+s(e.heavy_vehicle.model),1)):i("",!0)]),"item-volume":a(e=>[t(s(o(p)(e.volume)),1)]),"item-operation":a(e=>[e.truck?(r(),_(u,{key:0,to:{name:"admin-fuel-log-truck-edit",params:{id:e.id}},color:"primary",size:"small",class:"m-5"},{default:a(()=>[t(" Ubah ")]),_:2},1032,["to"])):i("",!0),e.heavy_vehicle?(r(),_(u,{key:1,to:{name:"admin-fuel-log-heavy-vehicle-edit",params:{id:e.id}},color:"primary",size:"small",class:"m-5"},{default:a(()=>[t(" Ubah ")]),_:2},1032,["to"])):i("",!0),l(u,{to:{name:"admin-fuel-log-view",params:{id:e.id}},color:"info",size:"small"},{default:a(()=>[t(" Detail ")]),_:2},1032,["to"]),l(u,{color:"error",size:"small",class:"m-5",onClick:()=>L(e)},{default:a(()=>[t(" Hapus ")]),_:2},1032,["onClick"])]),_:1},8,["items","loading","search-value"])]),_:1})]),_:1})]),_:1})],64)}}};export{re as default};
