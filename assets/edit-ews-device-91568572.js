import{j as x,R as h,r as m,S as R,l as N,n as T,q as l,c as a,Y as p,I as v,Z as W,x as e,s as B}from"./index-b8bb9b87.js";import{u as g}from"./ewsDevice-2ad7db4f.js";import{V as r,b as C,a as b}from"./VRow-d63588e1.js";import{V as k}from"./VForm-b1764071.js";import{V as f}from"./VTextField-d716ff87.js";import"./VGrid-89f96509.js";import"./forwardRefs-e658ad70.js";import"./index-e196a5dc.js";const K=B("h2",{class:"mb-0"}," Edit EWS Device ",-1),A={__name:"edit-ews-device",setup(U){const y=x(),{loading:s,error:o}=h(g()),{fetchEwsDevice:w,updateEwsDevice:D}=g(),_=y.params.id,n=m(""),u=m(""),c=m(""),V=async()=>{try{const t=await w(_);n.value=t.code,u.value=t.name,c.value=t.type}catch(t){console.error(t)}};R(()=>{V(),document.title="Edit EWS Device"});const E=()=>{D({id:_,code:n.value,name:u.value,type:c.value})},S=()=>{V()};return(t,d)=>(N(),T(b,null,{default:l(()=>[a(r,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:l(()=>[K,a(p,{to:{name:"admin-ews-device"},color:"primary"},{default:l(()=>[v(" Kembali ")]),_:1})]),_:1}),a(r,{cols:"12"},{default:l(()=>[a(C,null,{default:l(()=>[a(k,{onSubmit:W(E,["prevent"])},{default:l(()=>[a(b,null,{default:l(()=>[a(r,{cols:"12",md:"6"},{default:l(()=>[a(f,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=i=>n.value=i),label:"Kode",placeholder:"Kode EWS Device","error-messages":e(o)&&e(o).code?[e(o).code]:[],disabled:e(s),loading:e(s)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(r,{cols:"12",md:"6"},{default:l(()=>[a(f,{modelValue:u.value,"onUpdate:modelValue":d[1]||(d[1]=i=>u.value=i),label:"Nama",placeholder:"Nama EWS Device","error-messages":e(o)&&e(o).name?[e(o).name]:[],disabled:e(s),loading:e(s)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(r,{cols:"12",md:"12"},{default:l(()=>[a(f,{modelValue:c.value,"onUpdate:modelValue":d[2]||(d[2]=i=>c.value=i),label:"Tipe",placeholder:"Tipe EWS Device","error-messages":e(o)&&e(o).type?[e(o).type]:[],disabled:e(s),loading:e(s)},null,8,["modelValue","error-messages","disabled","loading"])]),_:1}),a(r,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[a(p,{type:"submit",loading:e(s),color:"primary"},{default:l(()=>[v(" Simpan ")]),_:1},8,["loading"]),a(p,{type:"reset",color:"secondary",variant:"tonal",onClick:S},{default:l(()=>[v(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{A as default};
