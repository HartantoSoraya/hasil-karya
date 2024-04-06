import{u as B}from"./project-a6517edb.js";import{j as L,R as M,r as s,S as O,l as a,J as u,c as o,q as r,Y as q,I as N,s as l,v as n,K as c,N as d}from"./index-b8bb9b87.js";import{b as E}from"./formatters-c9e1f9c6.js";import{V as i,b as F,a as Y}from"./VRow-d63588e1.js";import{V as m}from"./VDivider-a85c5ebc.js";import{V as z}from"./VChip-6ed5d59d.js";import"./VGrid-89f96509.js";import"./index-e196a5dc.js";const H=l("h2",{class:"mb-0"}," Projek ",-1),Q=l("h3",null,"Infromasi Projek",-1),U={class:"table table-bordered"},W=l("td",null,"Kode",-1),X=l("td",null,"Nama",-1),Z=l("td",null,"Deskripsi",-1),$=l("td",null,"Tanggal Mulai",-1),ll=l("td",null,"Tanggal Selesai",-1),tl=l("td",null,"Penanggung Jawab",-1),el=l("td",null,"Jumlah",-1),nl=l("td",null,"Pelanggan",-1),sl=l("td",null,"Status",-1),al=l("h3",null,"Informasi Lokasi",-1),ul={class:"table table-bordered"},ol=l("td",null,"Provinsi",-1),rl=l("td",null,"Kabupaten/Kota",-1),cl=l("td",null,"Kecamatan",-1),dl=l("td",null,"Kelurahan",-1),il=l("h3",null,"Informasi Personil",-1),_l={class:"table table-bordered"},ml=l("tr",null,[l("th",null,"Driver"),l("th",null,"Truk"),l("th",null,"Alat Berat"),l("th",null,"Stasiun"),l("th",null,"Checker"),l("th",null,"Admin Teknis"),l("th",null,"Operator Gas")],-1),Pl={__name:"project",setup(vl){const R=L();M(B());const{fetchProject:J}=B(),A=R.params.id,v=s(""),h=s(""),p=s(""),f=s(""),b=s(""),y=s(""),g=s(""),k=s(""),j=s(""),V=s(""),P=s(""),D=s(""),_=s(""),K=s([]),x=s([]),C=s([]),I=s([]),S=s([]),T=s([]),w=s([]),G=async()=>{try{const t=await J(A);v.value=t.code,h.value=t.name,p.value=t.description,f.value=t.start_date,b.value=t.end_date,y.value=t.person_in_charge,g.value=E(t.amount),k.value=t.client.name,j.value=t.province,V.value=t.regency,P.value=t.district,D.value=t.subdistrict,_.value=t.status,K.value=t.drivers,x.value=t.trucks,C.value=t.heavy_vehicles,I.value=t.stations,S.value=t.checkers,T.value=t.technical_admins,w.value=t.gas_operators}catch(t){console.error(t)}};return O(()=>{G(),document.title="Proyek"}),(t,hl)=>(a(),u(c,null,[o(i,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:r(()=>[H,o(q,{to:{name:"admin-project"},color:"primary"},{default:r(()=>[N(" Kembali ")]),_:1})]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(F,null,{default:r(()=>[o(Y,null,{default:r(()=>[o(i,{cols:"12",md:"12"},{default:r(()=>[Q,o(m,{class:"my-4"}),l("table",U,[l("tr",null,[W,l("td",null,n(v.value),1)]),l("tr",null,[X,l("td",null,n(h.value),1)]),l("tr",null,[Z,l("td",null,n(p.value),1)]),l("tr",null,[$,l("td",null,n(f.value),1)]),l("tr",null,[ll,l("td",null,n(b.value),1)]),l("tr",null,[tl,l("td",null,n(y.value),1)]),l("tr",null,[el,l("td",null,n(g.value),1)]),l("tr",null,[nl,l("td",null,n(k.value),1)]),l("tr",null,[sl,l("td",null,[o(z,{color:_.value==="On Going"?"success":"error",label:"status"},{default:r(()=>[N(n(_.value),1)]),_:1},8,["color"])])])])]),_:1}),o(i,{cols:"12",md:`12
            `},{default:r(()=>[al,o(m,{class:"my-4"}),l("table",ul,[l("tr",null,[ol,l("td",null,n(j.value),1)]),l("tr",null,[rl,l("td",null,n(V.value),1)]),l("tr",null,[cl,l("td",null,n(P.value),1)]),l("tr",null,[dl,l("td",null,n(D.value),1)])])]),_:1}),o(i,{cols:"12",md:"12"},{default:r(()=>[il,o(m,{class:"my-4"}),l("table",_l,[ml,l("tr",null,[l("td",null,[l("ul",null,[(a(!0),u(c,null,d(K.value,e=>(a(),u("li",{key:e.id},n(e.name),1))),128))])]),l("td",null,[l("ul",null,[(a(!0),u(c,null,d(x.value,e=>(a(),u("li",{key:e.id},n(e.brand)+" "+n(e.model),1))),128))])]),l("td",null,[l("ul",null,[(a(!0),u(c,null,d(C.value,e=>(a(),u("li",{key:e.id},n(e.brand)+" "+n(e.model),1))),128))])]),l("td",null,[l("ul",null,[(a(!0),u(c,null,d(I.value,e=>(a(),u("li",{key:e.id},n(e.name),1))),128))])]),l("td",null,[l("ul",null,[(a(!0),u(c,null,d(S.value,e=>(a(),u("li",{key:e.id},n(e.name),1))),128))])]),l("td",null,[l("ul",null,[(a(!0),u(c,null,d(T.value,e=>(a(),u("li",{key:e.id},n(e.name),1))),128))])]),l("td",null,[l("ul",null,[(a(!0),u(c,null,d(w.value,e=>(a(),u("li",{key:e.id},n(e.name),1))),128))])])])])]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{Pl as default};
