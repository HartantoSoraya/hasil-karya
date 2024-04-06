import{R as n,r as u,S as h,_ as q,l as O,J as E,x as l,n as J,q as r,c as a,I as p,v as Y,Y as T,A as Z,O as H,Z as Q,K as W,s as X}from"./index-b8bb9b87.js";import{u as x}from"./fuelLog-f3558dde.js";import{u as y}from"./driver-ab7ed4fc.js";import{u as U}from"./truck-a3e50338.js";import{u as w}from"./station-a95b2555.js";import{u as M}from"./gasOperator-57fc2c15.js";import{b as C,d as ee,e as le,V as s,a as K}from"./VRow-d63588e1.js";import{V as ae}from"./VDialog-7855c666.js";import{V as te}from"./VForm-b1764071.js";import{V as b}from"./VTextField-d716ff87.js";import{V as S}from"./VAutocomplete-33816023.js";import{V as oe}from"./VTextarea-0d842cdd.js";import"./VGrid-89f96509.js";import"./VOverlay-b398b44b.js";import"./forwardRefs-e658ad70.js";import"./index-e196a5dc.js";import"./VSelect-e149f7f0.js";import"./VMenu-e6957ca7.js";import"./VDivider-a85c5ebc.js";import"./VSelectionControl-7fa3b263.js";import"./VChip-6ed5d59d.js";const re=X("h2",{class:"mb-0"}," Catat BBM Truk ",-1),we={__name:"create-fuel-log-truck",setup(se){const{gasOperators:P}=n(M()),{drivers:F}=n(y()),{trucks:R}=n(U()),{stations:A}=n(w()),{fetchGasOperators:I}=M(),{fetchDrivers:L}=y(),{fetchTrucks:N}=U(),{fetchStations:j}=w();I(),L(),N(),j({type:"gas_station"});const{success:m,loading:z,error:t}=n(x()),{createFuelLogTruck:G}=x(),v=u("AUTO"),f=u(new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().substr(0,16)),c=u(""),g=u(""),V=u(""),_=u(""),B=u("diesel"),d=u(""),i=u(""),k=u(""),D=()=>{v.value="AUTO",f.value=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().substr(0,16),c.value="",g.value="",V.value="",_.value="",B.value="diesel",d.value="",i.value="",k.value=""},$=()=>{G({code:v.value,date:f.value.split("T").join(" ")+":00",truck_id:c.value,driver_id:g.value,station_id:V.value,gas_operator_id:_.value,fuel_type:B.value,volume:d.value.replace(/\D/g,""),odometer:i.value.replace(/\D/g,""),remarks:k.value}),D()};return h(()=>{document.title="Tambah Data Pengisian Bahan Bakar Truk"}),q(()=>{D(),t.value=null}),(ue,o)=>(O(),E(W,null,[l(m)?(O(),J(ae,{key:0,modelValue:l(m),"onUpdate:modelValue":o[1]||(o[1]=e=>Z(m)?m.value=e:null),"max-width":"400"},{default:r(()=>[a(C,null,{default:r(()=>[a(ee,null,{default:r(()=>[p(Y(l(m)),1)]),_:1}),a(le,null,{default:r(()=>[a(T,{color:"primary",text:"",onClick:o[0]||(o[0]=()=>m.value=null)},{default:r(()=>[p(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):H("",!0),a(K,null,{default:r(()=>[a(s,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:r(()=>[re,a(T,{to:"/admin/fuel-log",color:"primary",text:""},{default:r(()=>[p(" Kembali ")]),_:1})]),_:1}),a(s,{cols:"12"},{default:r(()=>[a(C,null,{default:r(()=>[a(te,{onSubmit:Q($,["prevent"])},{default:r(()=>[a(K,null,{default:r(()=>[a(s,{cols:"12",md:"6"},{default:r(()=>[a(b,{modelValue:v.value,"onUpdate:modelValue":o[2]||(o[2]=e=>v.value=e),label:"Kode",placeholder:"Kode","error-messages":l(t)&&l(t).code?[l(t).code]:[]},null,8,["modelValue","error-messages"])]),_:1}),a(s,{cols:"12",md:"6"},{default:r(()=>[a(b,{modelValue:f.value,"onUpdate:modelValue":o[3]||(o[3]=e=>f.value=e),label:"Tanggal",placeholder:"Tanggal",type:"datetime-local","error-messages":l(t)&&l(t).date?[l(t).date]:[]},null,8,["modelValue","error-messages"])]),_:1}),a(s,{cols:"12",md:"6"},{default:r(()=>[a(S,{modelValue:_.value,"onUpdate:modelValue":o[4]||(o[4]=e=>_.value=e),items:l(P),label:"Solar Man",placeholder:"Pilih Operator","error-messages":l(t)&&l(t).gas_operator_id?[l(t).gas_operator_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),a(s,{cols:"12",md:"6"},{default:r(()=>[a(S,{modelValue:g.value,"onUpdate:modelValue":o[5]||(o[5]=e=>g.value=e),items:l(F),label:"Driver",placeholder:"Pilih Driver","error-messages":l(t)&&l(t).driver_id?[l(t).driver_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),a(s,{cols:"12",md:"6"},{default:r(()=>[a(S,{modelValue:c.value,"onUpdate:modelValue":o[6]||(o[6]=e=>c.value=e),items:l(R),label:"Truck",placeholder:"Pilih Truck","error-messages":l(t)&&l(t).truck_id?[l(t).truck_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),a(s,{cols:"12",md:"6"},{default:r(()=>[a(S,{modelValue:V.value,"onUpdate:modelValue":o[7]||(o[7]=e=>V.value=e),items:l(A),label:"POS",placeholder:"Pilih POS","error-messages":l(t)&&l(t).station_id?[l(t).station_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),a(s,{cols:"12",md:"6"},{default:r(()=>[a(b,{modelValue:d.value,"onUpdate:modelValue":o[8]||(o[8]=e=>d.value=e),label:"Volume BBM (L)",placeholder:"Masukan Volume BBM (L)","error-messages":l(t)&&l(t).volume?[l(t).volume]:[],onInput:o[9]||(o[9]=e=>d.value=d.value.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,"."))},null,8,["modelValue","error-messages"])]),_:1}),a(s,{cols:"12",md:"6"},{default:r(()=>[a(b,{modelValue:i.value,"onUpdate:modelValue":o[10]||(o[10]=e=>i.value=e),label:"Odometer (KM)",placeholder:"Masukan Odometer (KM)","error-messages":l(t)&&l(t).odometer?[l(t).odometer]:[],onInput:o[11]||(o[11]=e=>i.value=i.value.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,"."))},null,8,["modelValue","error-messages"])]),_:1}),a(s,{cols:"12",md:"12"},{default:r(()=>[a(oe,{modelValue:k.value,"onUpdate:modelValue":o[12]||(o[12]=e=>k.value=e),label:"Keterangan",placeholder:"Keterangan Material","error-messages":l(t)&&l(t).remarks?[l(t).remarks]:[]},null,8,["modelValue","error-messages"])]),_:1}),a(s,{cols:"12",class:"d-flex gap-4"},{default:r(()=>[a(T,{type:"submit",loading:l(z),color:"primary"},{default:r(()=>[p(" Simpan ")]),_:1},8,["loading"]),a(T,{color:"secondary",variant:"tonal",onClick:D},{default:r(()=>[p(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{we as default};