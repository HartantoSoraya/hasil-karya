import{P as i,Q as r,b4 as o,b5 as t}from"./index-b8bb9b87.js";const c=i({id:"gasOperator",state:()=>({gasOperators:[],loading:!1,error:null,success:null}),actions:{async fetchGasOperators(){try{this.loading=!0;const s=await r.get("/gas-operators");this.gasOperators=s.data.data}catch(s){this.handleError(s)}finally{this.loading=!1}},async fetchGasOperator(s){try{return this.loading=!0,(await r.get(`/gas-operator/${s}`)).data.data}catch(a){this.handleError(a)}finally{this.loading=!1}},async createGasOperator(s){try{this.loading=!0;const a=await r.post("/gas-operator",s);this.success=a.data.message,o.push({name:"admin-gas-operator"})}catch(a){this.error=t(a)}finally{this.loading=!1}},async updateGasOperator(s){try{this.loading=!0;const a=await r.post(`/gas-operator/${s.id}`,s);this.success=a.data.message,o.push({name:"admin-gas-operator"})}catch(a){this.error=t(a)}finally{this.loading=!1}},async deleteGasOperator(s){try{this.loading=!0;const a=await r.delete(`/gas-operator/${s}`);this.success=a.data.message}catch(a){this.error=t(a)}finally{this.loading=!1}},async activateGasOperator(s,a){try{this.loading=!0;const e=await r.post(`/gas-operator/active/${s}`,a);this.success=e.data.message}catch(e){this.error=t(e)}finally{this.loading=!1}}}});export{c as u};
