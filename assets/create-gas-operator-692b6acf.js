import{R as x,r as p,S as G,_ as y,l as T,n as U,q as l,c as e,Y as f,I as _,Z as R,x as a,A as i,s as h}from"./index-b8bb9b87.js";import{u as v}from"./gasOperator-57fc2c15.js";import{V as t,b as N,a as g}from"./VRow-d63588e1.js";import{V as S}from"./VForm-b1764071.js";import{V as c}from"./VTextField-d716ff87.js";import"./VGrid-89f96509.js";import"./forwardRefs-e658ad70.js";import"./index-e196a5dc.js";const B=h("h2",{class:"mb-0"}," Tambah Gas Operator ",-1),I={__name:"create-gas-operator",setup(C){const{loading:b,error:o}=x(v()),{createGasOperator:O}=v(),d=p("AUTO"),u=p(""),m=p(""),n=p(""),V=()=>{d.value="AUTO",u.value="",m.value="",n.value=""},w=()=>{O({code:d.value,name:u.value,email:m.value,password:n.value,is_active:1})};return G(()=>{document.title="Tambah Gas Operator"}),y(()=>{V(),o.value=null}),(k,s)=>(T(),U(g,null,{default:l(()=>[e(t,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:l(()=>[B,e(f,{to:"/admin/gas-operator",color:"primary"},{default:l(()=>[_(" Kembali ")]),_:1})]),_:1}),e(t,{cols:"12"},{default:l(()=>[e(N,null,{default:l(()=>[e(S,{onSubmit:R(w,["prevent"])},{default:l(()=>[e(g,null,{default:l(()=>[e(t,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:a(d),"onUpdate:modelValue":s[0]||(s[0]=r=>i(d)?d.value=r:null),label:"Kode",placeholder:"Kode Gas Operator","error-messages":a(o)&&a(o).code?[a(o).code]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:a(u),"onUpdate:modelValue":s[1]||(s[1]=r=>i(u)?u.value=r:null),label:"Nama",placeholder:"Nama Gas Operator","error-messages":a(o)&&a(o).name?[a(o).name]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:a(m),"onUpdate:modelValue":s[2]||(s[2]=r=>i(m)?m.value=r:null),label:"Email",placeholder:"Email Gas Operator","error-messages":a(o)&&a(o).email?[a(o).email]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(c,{modelValue:a(n),"onUpdate:modelValue":s[3]||(s[3]=r=>i(n)?n.value=r:null),label:"Password",placeholder:"Password Gas Operator","error-messages":a(o)&&a(o).password?[a(o).password]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(f,{type:"submit",loading:a(b),color:"primary"},{default:l(()=>[_(" Simpan ")]),_:1},8,["loading"]),e(f,{color:"secondary",variant:"tonal",onClick:V},{default:l(()=>[_(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{I as default};
