import{j as N,P as R,r as u,Q as S,l as B,n as E,q as l,c as a,S as _,I as v,T,x as e,s as U}from"./index-d8570b98.js";import{u as h}from"./checker-8e08a759.js";import{V as n,b as K,a as b}from"./VRow-ae8b4a94.js";import{V as P}from"./VForm-c95c40f9.js";import{V as p}from"./VTextField-d53f6a8a.js";import"./VGrid-aa4a8c47.js";import"./forwardRefs-49923578.js";const j=U("h2",{class:"mb-0"}," Edit Checker ",-1),G={__name:"edit-checker",setup(F){const k=N(),{loading:s,error:o}=R(h()),{fetchChecker:C,updateChecker:w}=h(),V=k.params.id,i=u(""),m=u(""),c=u(""),f=u(""),g=u(0),y=async()=>{try{const r=await C(V);i.value=r.code,m.value=r.name,c.value=r.email,g.value=r.is_active===!0?1:0}catch(r){console.error(r)}};S(()=>{y(),document.title="Edit Checker"});const x=()=>{w({id:V,code:i.value,name:m.value,email:c.value,password:f.value,is_active:g.value})};return(r,d)=>(B(),E(b,null,{default:l(()=>[a(n,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:l(()=>[j,a(_,{to:"/admin/checker",color:"primary"},{default:l(()=>[v(" Kembali ")]),_:1})]),_:1}),a(n,{cols:"12"},{default:l(()=>[a(K,null,{default:l(()=>[a(P,{onSubmit:T(x,["prevent"])},{default:l(()=>[a(b,null,{default:l(()=>[a(n,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=t=>i.value=t),label:"Kode",placeholder:"Kode Checker","error-messages":e(o)&&e(o).code?[e(o).code]:[],disabled:e(s),loading:e(s)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(n,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:m.value,"onUpdate:modelValue":d[1]||(d[1]=t=>m.value=t),label:"Nama",placeholder:"Nama Client","error-messages":e(o)&&e(o).name?[e(o).name]:[],disabled:e(s),loading:e(s)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(n,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:c.value,"onUpdate:modelValue":d[2]||(d[2]=t=>c.value=t),label:"Email",placeholder:"Email Checker","error-messages":e(o)&&e(o).email?[e(o).email]:[],disabled:"",loading:e(s)},null,8,["modelValue","error-messages","loading"])]),_:1}),a(n,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:f.value,"onUpdate:modelValue":d[3]||(d[3]=t=>f.value=t),label:"Password",placeholder:"Password Checker","error-messages":e(o)&&e(o).password?[e(o).password]:[],disabled:e(s),loading:e(s)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(n,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[a(_,{type:"submit",loading:e(s),color:"primary"},{default:l(()=>[v(" Simpan ")]),_:1},8,["loading"]),a(_,{type:"reset",color:"secondary",variant:"tonal",onClick:r.handleReset},{default:l(()=>[v(" Reset ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{G as default};
