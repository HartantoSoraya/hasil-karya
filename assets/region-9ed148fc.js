import{b2 as i}from"./index-d8570b98.js";const r=i({id:"region",state:()=>({provinces:[],regencies:[],districts:[],subdistricts:[],loading:!1,error:null,success:null}),actions:{async fetchProvinces(){try{this.loading=!0,fetch("https://dev.farizdotid.com/api/daerahindonesia/provinsi").then(e=>e.json()).then(e=>{this.provinces=e.provinsi}).catch(e=>{console.error(e)})}catch(e){console.error(e)}finally{this.loading=!1}},async fetchRegencies(e){try{this.loading=!0,fetch(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${e}`).then(t=>t.json()).then(t=>{this.regencies=t.kota_kabupaten,this.regencies=regencies}).catch(t=>{console.error(t)})}catch(t){console.error(t)}finally{this.loading=!1}},async fetchDistricts(e){try{this.loading=!0,fetch(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${e}`).then(t=>t.json()).then(t=>{this.districts=t.kecamatan,this.districts=districts}).catch(t=>{console.error(t)})}catch(t){console.error(t)}finally{this.loading=!1}},async fetchSubdistricts(e){try{this.loading=!0,fetch(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${e}`).then(t=>t.json()).then(t=>{this.subdistricts=t.kelurahan,this.subdistricts=subdistricts}).catch(t=>{console.error(t)})}catch(t){console.error(t)}finally{this.loading=!1}}}});export{r as u};
