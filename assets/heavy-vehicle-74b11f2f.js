import{u as _}from"./heavyVehicle-a6827fb6.js";import"./vendor-1d98b441.js";import{j as x,P as A,r as u,Q as k,l as M,n as T,q as o,c as a,S as U,I as w,x as e,s as C}from"./index-d8570b98.js";import{V as n,b as H,a as f}from"./VRow-ae8b4a94.js";import{V as K}from"./VForm-c95c40f9.js";import{V as i}from"./VTextField-d53f6a8a.js";import"./VGrid-aa4a8c47.js";import"./forwardRefs-49923578.js";const N=C("h2",{class:"mb-0"}," Alat Berat ",-1),z={__name:"heavy-vehicle",setup(P){const b=x(),{loading:d,error:l}=A(_()),{fetchHeavyVehicle:g}=_(),y=b.params.id,m=u(""),c=u(""),V=u(""),v=u(""),p=u(),h=u(1),B=async()=>{try{const s=await g(y);m.value=s.code,c.value=s.brand,V.value=s.model,v.value=s.production_year,p.value=s.vendor.name,h.value=s.is_active}catch(s){console.error(s)}};return k(()=>{B(),document.title="Alat Berat"}),(s,r)=>(M(),T(f,null,{default:o(()=>[a(n,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:o(()=>[N,a(U,{to:{name:"admin-heavy-vehicle"},color:"primary"},{default:o(()=>[w(" Kembali ")]),_:1})]),_:1}),a(n,{cols:"12"},{default:o(()=>[a(H,null,{default:o(()=>[a(K,null,{default:o(()=>[a(f,null,{default:o(()=>[a(n,{cols:"12",md:"6"},{default:o(()=>[a(i,{modelValue:m.value,"onUpdate:modelValue":r[0]||(r[0]=t=>m.value=t),label:"Kode",placeholder:"Kode Alat Berat","error-messages":e(l)&&e(l).code?[e(l).code]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(n,{cols:"12",md:"6"},{default:o(()=>[a(i,{modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=t=>c.value=t),label:"Merk",placeholder:"Merk Alat Berat","error-messages":e(l)&&e(l).brand?[e(l).brand]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(n,{cols:"12",md:"6"},{default:o(()=>[a(i,{modelValue:V.value,"onUpdate:modelValue":r[2]||(r[2]=t=>V.value=t),label:"Model",placeholder:"Model Alat Berat","error-messages":e(l)&&e(l).model?[e(l).model]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(n,{cols:"12",md:"6"},{default:o(()=>[a(i,{modelValue:v.value,"onUpdate:modelValue":r[3]||(r[3]=t=>v.value=t),label:"Tahun Produksi",placeholder:"Tahun Produksi Alat Berat","error-messages":e(l)&&e(l).production_year?[e(l).production_year]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(n,{cols:"12",md:"12"},{default:o(()=>[a(i,{modelValue:p.value,"onUpdate:modelValue":r[4]||(r[4]=t=>p.value=t),label:"Vendor",placeholder:"Vendor Alat Berat","error-messages":e(l)&&e(l).vendor_id?[e(l).vendor_id]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{z as default};
