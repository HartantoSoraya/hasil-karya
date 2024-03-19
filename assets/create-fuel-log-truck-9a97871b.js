import{P as f,H as G,r as s,Q as H,X as I,l as b,J,x as l,n as Q,q as o,c as a,I as V,v as X,S as g,A as j,O as z,T as W,K as Y}from"./index-d8570b98.js";import{u as U}from"./fuelLog-8188d5dc.js";import{u as C}from"./driver-4b8ac86d.js";import{u as B}from"./truck-17634e1b.js";import{u as O}from"./station-56b545b2.js";import{b as A,d as Z,e as $,V as u,a as D}from"./VRow-ae8b4a94.js";import{V as ee}from"./VDialog-029e5a82.js";import{V as le}from"./VForm-c95c40f9.js";import{V as k}from"./VAutocomplete-90f07087.js";import{V as F}from"./VTextField-d53f6a8a.js";import{V as ae}from"./VTextarea-c1327748.js";import"./VGrid-aa4a8c47.js";import"./VOverlay-f87aa014.js";import"./forwardRefs-49923578.js";import"./VSelect-e5c25370.js";import"./VMenu-f39875ea.js";import"./VSelectionControl-d26b90d8.js";const xe={__name:"create-fuel-log-truck",setup(te){const{drivers:P}=f(C()),{trucks:h}=f(B()),{stations:M}=f(O()),{user:T,checkAuth:R}=G(),{fetchDrivers:w}=C(),{fetchTrucks:K}=B(),{fetchStations:L}=O();w(),K(),L({type:"gas_station"}),R();const{success:m,loading:N,error:t}=f(U()),{createFuelLogTruckGasOperator:q}=U(),S=s("AUTO"),d=s(""),i=s(""),n=s(""),x=s(T.gas_operator.id),y=s("diesel"),v=s(""),p=s(""),c=s(""),_=()=>{S.value="AUTO",d.value="",i.value="",n.value="",x.value=T.gas_operator.id,y.value="diesel",v.value="",p.value="",c.value=""},E=()=>{q({code:S.value,truck_id:d.value,driver_id:i.value,station_id:n.value,gas_operator_id:x.value,fuel_type:y.value,volume:v.value,odometer:p.value,remarks:c.value}),_()};return H(()=>{document.title="Catat BBM Truk"}),I(()=>{_(),t.value=null}),(oe,r)=>(b(),J(Y,null,[l(m)?(b(),Q(ee,{key:0,modelValue:l(m),"onUpdate:modelValue":r[1]||(r[1]=e=>j(m)?m.value=e:null),"max-width":"400"},{default:o(()=>[a(A,null,{default:o(()=>[a(Z,null,{default:o(()=>[V(X(l(m)),1)]),_:1}),a($,null,{default:o(()=>[a(g,{color:"primary",text:"",onClick:r[0]||(r[0]=()=>m.value=null)},{default:o(()=>[V(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):z("",!0),a(D,null,{default:o(()=>[a(u,{cols:"12"},{default:o(()=>[a(A,null,{default:o(()=>[a(le,{onSubmit:W(E,["prevent"])},{default:o(()=>[a(D,null,{default:o(()=>[a(u,{cols:"12",md:"6"},{default:o(()=>[a(k,{modelValue:i.value,"onUpdate:modelValue":r[2]||(r[2]=e=>i.value=e),items:l(P),label:"Driver",placeholder:"Pilih Driver","error-messages":l(t)&&l(t).driver_id?[l(t).driver_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),a(u,{cols:"12",md:"6"},{default:o(()=>[a(k,{modelValue:d.value,"onUpdate:modelValue":r[3]||(r[3]=e=>d.value=e),items:l(h),label:"Truck",placeholder:"Pilih Truck","error-messages":l(t)&&l(t).truck_id?[l(t).truck_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),a(u,{cols:"12",md:"12"},{default:o(()=>[a(k,{modelValue:n.value,"onUpdate:modelValue":r[4]||(r[4]=e=>n.value=e),items:l(M),label:"POS",placeholder:"Pilih POS","error-messages":l(t)&&l(t).station_id?[l(t).station_id]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),a(u,{cols:"12",md:"6"},{default:o(()=>[a(F,{modelValue:v.value,"onUpdate:modelValue":r[5]||(r[5]=e=>v.value=e),label:"Volume",placeholder:"Volume BBM","error-messages":l(t)&&l(t).volume?[l(t).volume]:[]},null,8,["modelValue","error-messages"])]),_:1}),a(u,{cols:"12",md:"6"},{default:o(()=>[a(F,{modelValue:p.value,"onUpdate:modelValue":r[6]||(r[6]=e=>p.value=e),label:"Odometer",placeholder:"Odometer","error-messages":l(t)&&l(t).odometer?[l(t).odometer]:[]},null,8,["modelValue","error-messages"])]),_:1}),a(u,{cols:"12",md:"12"},{default:o(()=>[a(ae,{modelValue:c.value,"onUpdate:modelValue":r[7]||(r[7]=e=>c.value=e),label:"Keterangan",placeholder:"Keterangan Material","error-messages":l(t)&&l(t).remarks?[l(t).remarks]:[]},null,8,["modelValue","error-messages"])]),_:1}),a(u,{cols:"12",class:"d-flex gap-4"},{default:o(()=>[a(g,{type:"submit",loading:l(N),color:"primary"},{default:o(()=>[V(" Simpan ")]),_:1},8,["loading"]),a(g,{color:"secondary",variant:"tonal",onClick:_},{default:o(()=>[V(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{xe as default};
