import{R as y,r as i,S as U,_ as R,l as A,n as N,q as l,c as e,Y as p,I as V,Z as S,x as a,A as c,s as w}from"./index-b8bb9b87.js";import{u as g}from"./vendor-37b70eb1.js";import{V as t,b as B,a as b}from"./VRow-d63588e1.js";import{V as C}from"./VForm-b1764071.js";import{V as f}from"./VTextField-d716ff87.js";import{V as k}from"./VTextarea-0d842cdd.js";import"./VGrid-89f96509.js";import"./forwardRefs-e658ad70.js";import"./index-e196a5dc.js";const K=w("h2",{class:"mb-0"}," Tambah Vendor ",-1),G={__name:"create-vendor",setup(F){const{loading:x,error:o}=y(g()),{createVendor:T}=g(),d=i("AUTO"),n=i(""),u=i(""),m=i(""),_=i(1),v=()=>{d.value="AUTO",n.value="",u.value="",m.value="",_.value=1},h=()=>{T({code:d.value,name:n.value,address:u.value,phone:m.value,is_active:_.value})};return U(()=>{document.title="Tambah Vendor"}),R(()=>{v(),o.value=null}),(M,s)=>(A(),N(b,null,{default:l(()=>[e(t,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:l(()=>[K,e(p,{to:"/admin/vendor",color:"primary"},{default:l(()=>[V(" Kembali ")]),_:1})]),_:1}),e(t,{cols:"12"},{default:l(()=>[e(B,null,{default:l(()=>[e(C,{onSubmit:S(h,["prevent"])},{default:l(()=>[e(b,null,{default:l(()=>[e(t,{cols:"12",md:"6"},{default:l(()=>[e(f,{modelValue:a(d),"onUpdate:modelValue":s[0]||(s[0]=r=>c(d)?d.value=r:null),label:"Kode",placeholder:"Kode Vendor","error-messages":a(o)&&a(o).code?[a(o).code]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(f,{modelValue:a(n),"onUpdate:modelValue":s[1]||(s[1]=r=>c(n)?n.value=r:null),label:"Nama",placeholder:"Nama Vendor","error-messages":a(o)&&a(o).name?[a(o).name]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",md:"12"},{default:l(()=>[e(k,{modelValue:a(u),"onUpdate:modelValue":s[2]||(s[2]=r=>c(u)?u.value=r:null),label:"Alamat",placeholder:"Alamat Vendor","error-messages":a(o)&&a(o).address?[a(o).address]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",md:"12"},{default:l(()=>[e(f,{modelValue:a(m),"onUpdate:modelValue":s[3]||(s[3]=r=>c(m)?m.value=r:null),label:"Telepon",placeholder:"Telepon Vendor","error-messages":a(o)&&a(o).phone?[a(o).phone]:[]},null,8,["modelValue","error-messages"])]),_:1}),e(t,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(p,{type:"submit",loading:a(x),color:"primary"},{default:l(()=>[V(" Simpan ")]),_:1},8,["loading"]),e(p,{color:"secondary",variant:"tonal",onClick:v},{default:l(()=>[V(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{G as default};
