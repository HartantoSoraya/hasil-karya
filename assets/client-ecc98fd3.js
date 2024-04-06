import{P as n,Q as s,b4 as i,b5 as a}from"./index-b8bb9b87.js";const l=n({id:"client",state:()=>({clients:[],loading:!1,error:null,success:null}),actions:{async fetchClients(){try{this.loading=!0;const e=await s.get("/clients");this.clients=e.data.data}catch(e){this.handleError(e)}finally{this.loading=!1}},async fetchClient(e){try{return this.loading=!0,(await s.get(`/client/${e}`)).data.data}catch(t){this.handleError(t)}finally{this.loading=!1}},async createClient(e){try{this.loading=!0;const t=await s.post("/client",e);this.success=t.data.message,i.push({name:"admin-client"})}catch(t){this.error=a(t)}finally{this.loading=!1}},async updateClient(e){try{this.loading=!0;const t=await s.post(`/client/${e.id}`,e);this.success=t.data.message,i.push({name:"admin-client"})}catch(t){this.error=a(t)}finally{this.loading=!1}},async deleteClient(e){try{this.loading=!0;const t=await s.delete(`/client/${e}`);this.success=t.data.message}catch(t){this.error=a(t)}finally{this.loading=!1}}}});export{l as u};
