import{u as p}from"./technicalAdmin-5ea7466e.js";import{j as k,P as v,r as u,Q as A,l as T,n as y,q as l,c as a,S as x,I as N,x as e,s as w}from"./index-d8570b98.js";import{V as r,b as B,a as V}from"./VRow-ae8b4a94.js";import{V as C}from"./VForm-c95c40f9.js";import{V as f}from"./VTextField-d53f6a8a.js";import"./VGrid-aa4a8c47.js";import"./forwardRefs-49923578.js";const K=w("h2",{class:"mb-0"}," Admin Teknik ",-1),D={__name:"technical-admin",setup(R){const _=k(),{loading:d,error:o}=v(p()),{fetchTechnicalAdmin:g}=p(),b=_.params.id,i=u(""),m=u(""),c=u(""),h=async()=>{try{const n=await g(b);i.value=n.code,m.value=n.name,c.value=n.email}catch(n){console.error(n)}};return A(()=>{document.title="Admin Teknik",h()}),(n,s)=>(T(),y(V,null,{default:l(()=>[a(r,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:l(()=>[K,a(x,{to:"/admin/technical-admin",color:"primary"},{default:l(()=>[N(" Kembali ")]),_:1})]),_:1}),a(r,{cols:"12"},{default:l(()=>[a(B,null,{default:l(()=>[a(C,null,{default:l(()=>[a(V,null,{default:l(()=>[a(r,{cols:"12",md:"6"},{default:l(()=>[a(f,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=t=>i.value=t),label:"Kode",placeholder:"Kode Admin Teknik","error-messages":e(o)&&e(o).code?[e(o).code]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(r,{cols:"12",md:"6"},{default:l(()=>[a(f,{modelValue:m.value,"onUpdate:modelValue":s[1]||(s[1]=t=>m.value=t),label:"Nama",placeholder:"Nama Admin Teknik","error-messages":e(o)&&e(o).name?[e(o).name]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(r,{cols:"12",md:"12"},{default:l(()=>[a(f,{modelValue:c.value,"onUpdate:modelValue":s[2]||(s[2]=t=>c.value=t),label:"Email",placeholder:"Email Admin Teknik","error-messages":e(o)&&e(o).email?[e(o).email]:[],disabled:e(d),loading:e(d),readonly:""},null,8,["modelValue","error-messages","disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{D as default};
