import{j as N,R as S,r as u,S as B,l as E,n as U,q as l,c as a,Y as _,I as v,Z as K,x as e,s as T}from"./index-b8bb9b87.js";import{u as b}from"./checker-01526226.js";import{V as n,b as j,a as k}from"./VRow-d63588e1.js";import{V as F}from"./VForm-b1764071.js";import{V as p}from"./VTextField-d716ff87.js";import"./VGrid-89f96509.js";import"./forwardRefs-e658ad70.js";import"./index-e196a5dc.js";const I=T("h2",{class:"mb-0"}," Edit Checker ",-1),H={__name:"edit-checker",setup(M){const C=N(),{loading:s,error:o}=S(b()),{fetchChecker:w,updateChecker:x}=b(),V=C.params.id,i=u(""),m=u(""),c=u(""),f=u(""),g=u(0),h=async()=>{try{const d=await w(V);i.value=d.code,m.value=d.name,c.value=d.email,g.value=d.is_active===!0?1:0}catch(d){console.error(d)}};B(()=>{h(),document.title="Edit Checker"});const y=()=>{x({id:V,code:i.value,name:m.value,email:c.value,password:f.value,is_active:g.value})},R=()=>{h()};return(d,r)=>(E(),U(k,null,{default:l(()=>[a(n,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:l(()=>[I,a(_,{to:"/admin/checker",color:"primary"},{default:l(()=>[v(" Kembali ")]),_:1})]),_:1}),a(n,{cols:"12"},{default:l(()=>[a(j,null,{default:l(()=>[a(F,{onSubmit:K(y,["prevent"])},{default:l(()=>[a(k,null,{default:l(()=>[a(n,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=t=>i.value=t),label:"Kode",placeholder:"Kode Checker","error-messages":e(o)&&e(o).code?[e(o).code]:[],disabled:e(s),loading:e(s)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(n,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:m.value,"onUpdate:modelValue":r[1]||(r[1]=t=>m.value=t),label:"Nama",placeholder:"Nama Client","error-messages":e(o)&&e(o).name?[e(o).name]:[],disabled:e(s),loading:e(s)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(n,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:c.value,"onUpdate:modelValue":r[2]||(r[2]=t=>c.value=t),label:"Email",placeholder:"Email Checker","error-messages":e(o)&&e(o).email?[e(o).email]:[],disabled:"",loading:e(s)},null,8,["modelValue","error-messages","loading"])]),_:1}),a(n,{cols:"12",md:"6"},{default:l(()=>[a(p,{modelValue:f.value,"onUpdate:modelValue":r[3]||(r[3]=t=>f.value=t),label:"Password",placeholder:"Password Checker","error-messages":e(o)&&e(o).password?[e(o).password]:[],disabled:e(s),loading:e(s)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(n,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[a(_,{type:"submit",loading:e(s),color:"primary"},{default:l(()=>[v(" Simpan ")]),_:1},8,["loading"]),a(_,{color:"secondary",variant:"tonal",onClick:R},{default:l(()=>[v(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{H as default};