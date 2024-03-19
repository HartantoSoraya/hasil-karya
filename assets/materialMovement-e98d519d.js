import{b2 as i,b3 as t,b4 as r,b5 as s}from"./index-d8570b98.js";const o=i({id:"materialMovement",state:()=>({movements:[],loading:!1,error:null,success:null}),actions:{async fetchMaterialMovements(){try{this.loading=!0;const a=await t.get("/material-movements");a.data.data.forEach(e=>{e.truck.name=`${e.truck.brand} ${e.truck.model}`}),this.movements=a.data.data}catch(a){this.handleError(a)}finally{this.loading=!1}},async fetchMaterialMovement(a){try{return this.loading=!0,(await t.get(`/material-movement/${a}`)).data.data}catch(e){this.handleError(e)}finally{this.loading=!1}},async createMaterialMovement(a){try{this.loading=!0;const e=await t.post("/material-movement",a);this.success=e.data.message,r.push({name:"admin-material-movement"})}catch(e){this.error=s(e)}finally{this.loading=!1}},async createMaterialMovementCheckers(a){try{this.loading=!0;const e=await t.post("/checker/material-movement/store",a);this.success=e.data.message}catch(e){this.error=s(e)}finally{this.loading=!1,this.error=null}},async updateMaterialMovement(a){try{this.loading=!0;const e=await t.post(`/material-movement/${a.id}`,a);this.success=e.data.message,r.push({name:"admin-material-movement"})}catch(e){this.error=s(e)}finally{this.loading=!1}},async deleteMaterialMovement(a){try{this.loading=!0;const e=await t.delete(`/material-movement/${a}`);this.success=e.data.message}catch(e){this.error=s(e)}finally{this.loading=!1}}}});export{o as u};
