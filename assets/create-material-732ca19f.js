import{R as g,r as c,S as x,_ as M,l as h,n as y,q as a,c as e,Y as m,I as u,Z as T,x as o,s as N}from"./index-b8bb9b87.js";import{u as f}from"./material-b73e32d2.js";import{V as t,b as R,a as _}from"./VRow-d63588e1.js";import{V as S}from"./VForm-b1764071.js";import{V as p}from"./VTextField-d716ff87.js";import"./VGrid-89f96509.js";import"./forwardRefs-e658ad70.js";import"./index-e196a5dc.js";const U=N("h2",{class:"mb-0"}," Tambah Material ",-1),I={__name:"create-material",setup(w){const{loading:V,error:l}=g(f()),{createMaterial:v}=f(),r=c("AUTO"),s=c(""),i=()=>{r.value="AUTO",s.value=""},b=()=>{v({code:r.value,name:s.value})};return x(()=>{document.title="Tambah Material"}),M(()=>{i(),l.value=null}),(B,n)=>(h(),y(_,null,{default:a(()=>[e(t,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:a(()=>[U,e(m,{to:"/admin/material",color:"primary"},{default:a(()=>[u(" Kembali ")]),_:1})]),_:1}),e(t,{cols:"12"},{default:a(()=>[e(R,null,{default:a(()=>[e(S,{onSubmit:T(b,["prevent"])},{default:a(()=>[e(_,null,{default:a(()=>[e(t,{cols:"12",md:"6"},{default:a(()=>[e(p,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=d=>r.value=d),label:"Kode",placeholder:"Kode Material","error-messages":o(l)&&o(l).code?[o(l).code]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",md:"6"},{default:a(()=>[e(p,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=d=>s.value=d),label:"Nama",placeholder:"Nama Material","error-messages":o(l)&&o(l).name?[o(l).name]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",class:"d-flex gap-4"},{default:a(()=>[e(m,{type:"submit",loading:o(V),color:"primary"},{default:a(()=>[u(" Simpan ")]),_:1},8,["loading"]),e(m,{color:"secondary",variant:"tonal",onClick:i},{default:a(()=>[u(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{I as default};
