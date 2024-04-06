import{P as n,Q as s,b4 as i,b5 as a}from"./index-b8bb9b87.js";const c=n({id:"driver",state:()=>({drivers:[],loading:!1,error:null,success:null}),actions:{async fetchDrivers(){try{this.loading=!0;const e=await s.get("/drivers");this.drivers=e.data.data}catch(e){this.handleError(e)}finally{this.loading=!1}},async fetchDriver(e){try{return this.loading=!0,(await s.get(`/driver/${e}`)).data.data}catch(r){this.handleError(r)}finally{this.loading=!1}},async createDriver(e){try{this.loading=!0;const r=await s.post("/driver",e);this.success=r.data.message,i.push({name:"admin-driver"})}catch(r){this.error=a(r)}finally{this.loading=!1}},async updateDriver(e){try{this.loading=!0;const r=await s.post(`/driver/${e.id}`,e);this.success=r.data.message,i.push({name:"admin-driver"})}catch(r){this.error=a(r)}finally{this.loading=!1}},async deleteDriver(e){try{this.loading=!0;const r=await s.delete(`/driver/${e}`);this.success=r.data.message}catch(r){this.error=a(r)}finally{this.loading=!1}},async activateDriver(e,r){try{this.loading=!0;const t=await s.post(`/driver/active/${e}`,r);this.success=t.data.message}catch(t){this.error=a(t)}finally{this.loading=!1}}}});export{c as u};
