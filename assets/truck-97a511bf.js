import{u as v}from"./truck-a3e50338.js";import"./vendor-37b70eb1.js";import{j as U,R as K,r as n,S as M,l as w,n as B,q as o,c as l,Y as R,I as h,x as e,s as C}from"./index-b8bb9b87.js";import{V as t,b as N,a as _}from"./VRow-d63588e1.js";import{V as j}from"./VForm-b1764071.js";import{V as i}from"./VTextField-d716ff87.js";import"./VGrid-89f96509.js";import"./forwardRefs-e658ad70.js";import"./index-e196a5dc.js";const F=C("h2",{class:"mb-0"}," Truck ",-1),H={__name:"truck",setup(I){const b=U(),{loading:d,error:a}=K(v()),{fetchTruck:k}=v(),y=b.params.id,m=n(""),c=n(""),p=n(""),V=n(0),f=n(""),g=n(),T=n(1),x=async()=>{try{const u=await k(y);m.value=u.code,c.value=u.brand,p.value=u.model,V.value=u.capacity,f.value=u.production_year,g.value=u.vendor.name,T.value=u.is_active}catch(u){console.error(u)}};return M(()=>{x(),document.title="Truck"}),(u,r)=>(w(),B(_,null,{default:o(()=>[l(t,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:o(()=>[F,l(R,{to:{name:"admin-truck"},color:"primary"},{default:o(()=>[h(" Kembali ")]),_:1})]),_:1}),l(t,{cols:"12"},{default:o(()=>[l(N,null,{default:o(()=>[l(j,null,{default:o(()=>[l(_,null,{default:o(()=>[l(t,{cols:"12",md:"6"},{default:o(()=>[l(i,{modelValue:m.value,"onUpdate:modelValue":r[0]||(r[0]=s=>m.value=s),label:"Kode",placeholder:"Kode Truck","error-messages":e(a)&&e(a).code?[e(a).code]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),l(t,{cols:"12",md:"6"},{default:o(()=>[l(i,{modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=s=>c.value=s),label:"Merk",placeholder:"Merk Truck","error-messages":e(a)&&e(a).brand?[e(a).brand]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),l(t,{cols:"12",md:"6"},{default:o(()=>[l(i,{modelValue:p.value,"onUpdate:modelValue":r[2]||(r[2]=s=>p.value=s),label:"Model",placeholder:"Model Truck","error-messages":e(a)&&e(a).model?[e(a).model]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),l(t,{cols:"12",md:"6"},{default:o(()=>[l(i,{modelValue:f.value,"onUpdate:modelValue":r[3]||(r[3]=s=>f.value=s),label:"Tahun Produksi",placeholder:"Tahun Produksi Truck","error-messages":e(a)&&e(a).production_year?[e(a).production_year]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),l(t,{cols:"12",md:"6"},{default:o(()=>[l(i,{modelValue:g.value,"onUpdate:modelValue":r[4]||(r[4]=s=>g.value=s),label:"Vendor",placeholder:"Vendor Truck","error-messages":e(a)&&e(a).vendor_id?[e(a).vendor_id]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),l(t,{cols:"12",md:"6"},{default:o(()=>[l(i,{modelValue:V.value,"onUpdate:modelValue":r[5]||(r[5]=s=>V.value=s),label:"Kapasitas",placeholder:"Kapasitas Truck","error-messages":e(a)&&e(a).capacity?[e(a).capacity]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{H as default};