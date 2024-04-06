import{u as _}from"./client-ecc98fd3.js";import{j as N,R as h,r as u,S as w,l as B,n as R,q as r,c as a,Y as D,I as j,x as e,s as k}from"./index-b8bb9b87.js";import{V as t,b as A,a as K}from"./VRow-d63588e1.js";import{V as E}from"./VForm-b1764071.js";import{V as i}from"./VTextField-d716ff87.js";import{V as F}from"./VTextarea-0d842cdd.js";import"./VGrid-89f96509.js";import"./forwardRefs-e658ad70.js";import"./index-e196a5dc.js";const I=k("h2",{class:"mb-0"}," Client ",-1),O={__name:"client",setup(P){const C=N(),{loading:o,error:l}=h(_()),{fetchClient:x}=_(),U=C.params.id,m=u(""),c=u(""),p=u(null),g=u(null),V=u(null),b=u(null),v=u(""),f=u(""),y=u(""),T=async()=>{try{const n=await x(U);m.value=n.code,c.value=n.name,p.value=n.province,g.value=n.regency,V.value=n.district,b.value=n.subdistrict,v.value=n.address,f.value=n.phone,y.value=n.email}catch(n){console.error(n)}};return w(()=>{T(),document.title="Client"}),(n,d)=>(B(),R(K,null,{default:r(()=>[a(t,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:r(()=>[I,a(D,{to:{name:"admin-client"},color:"primary"},{default:r(()=>[j(" Kembali ")]),_:1})]),_:1}),a(t,{cols:"12"},{default:r(()=>[a(A,null,{default:r(()=>[a(E,null,{default:r(()=>[a(K,null,{default:r(()=>[a(t,{cols:"12",md:"6"},{default:r(()=>[a(i,{modelValue:m.value,"onUpdate:modelValue":d[0]||(d[0]=s=>m.value=s),label:"Kode",placeholder:"Kode Client","error-messages":e(l)&&e(l).code?[e(l).code]:[],disabled:e(o),loading:e(o),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(t,{cols:"12",md:"6"},{default:r(()=>[a(i,{modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=s=>c.value=s),label:"Nama",placeholder:"Nama Client","error-messages":e(l)&&e(l).name?[e(l).name]:[],disabled:e(o),loading:e(o),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(t,{cols:"12",md:"6"},{default:r(()=>[a(i,{modelValue:p.value,"onUpdate:modelValue":d[2]||(d[2]=s=>p.value=s),label:"Provinsi",placeholder:"Provinsi","error-messages":e(l)&&e(l).province?[e(l).province]:[],disabled:e(o),loading:e(o),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(t,{cols:"12",md:"6"},{default:r(()=>[a(i,{modelValue:g.value,"onUpdate:modelValue":d[3]||(d[3]=s=>g.value=s),label:"Kabupaten/Kota",placeholder:"Kabupaten/Kota","error-messages":e(l)&&e(l).regency?[e(l).regency]:[],disabled:e(o),loading:e(o),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(t,{cols:"12",md:"6"},{default:r(()=>[a(i,{modelValue:V.value,"onUpdate:modelValue":d[4]||(d[4]=s=>V.value=s),label:"Kecamatan",placeholder:"Kecamatan","error-messages":e(l)&&e(l).district?[e(l).district]:[],disabled:e(o),loading:e(o),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(t,{cols:"12",md:"6"},{default:r(()=>[a(i,{modelValue:b.value,"onUpdate:modelValue":d[5]||(d[5]=s=>b.value=s),label:"Kelurahan/Desa",placeholder:"Kelurahan/Desa","error-messages":e(l)&&e(l).subdistrict?[e(l).subdistrict]:[],disabled:e(o),loading:e(o),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(t,{cols:"12",md:"12"},{default:r(()=>[a(F,{modelValue:v.value,"onUpdate:modelValue":d[6]||(d[6]=s=>v.value=s),label:"Alamat",placeholder:"Alamat","error-messages":e(l)&&e(l).address?[e(l).address]:[],disabled:e(o),loading:e(o),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(t,{cols:"12",md:"6"},{default:r(()=>[a(i,{modelValue:f.value,"onUpdate:modelValue":d[7]||(d[7]=s=>f.value=s),label:"Telepon",placeholder:"Telepon","error-messages":e(l)&&e(l).phone?[e(l).phone]:[],disabled:e(o),loading:e(o),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(t,{cols:"12",md:"6"},{default:r(()=>[a(i,{modelValue:y.value,"onUpdate:modelValue":d[8]||(d[8]=s=>y.value=s),label:"Email",placeholder:"Email","error-messages":e(l)&&e(l).email?[e(l).email]:[],disabled:e(o),loading:e(o),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{O as default};