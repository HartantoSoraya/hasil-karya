import{b2 as o,b3 as a,b4 as r,b5 as t}from"./index-d8570b98.js";const i=o({id:"fuelLog",state:()=>({fuelLogs:[],loading:!1,error:null,success:null}),actions:{async fetchFuelLogs(){try{this.loading=!0;const s=await a.get("/fuel-logs");this.fuelLogs=s.data.data}catch(s){this.handleError(s)}finally{this.loading=!1}},async fetchFuelLog(s){try{return this.loading=!0,(await a.get(`/fuel-log/${s}`)).data.data}catch(e){this.handleError(e)}finally{this.loading=!1}},async createFuelLogTruck(s){try{this.loading=!0;const e=await a.post("/fuel-log/truck",s);this.success=e.data.message,r.push({name:"admin-fuel-log"})}catch(e){this.error=t(e)}finally{this.loading=!1}},async createFuelLogHeavyVehicle(s){try{this.loading=!0;const e=await a.post("/fuel-log/heavy-vehicle",s);this.success=e.data.message,r.push({name:"admin-fuel-log"})}catch(e){this.error=t(e)}finally{this.loading=!1}},async createFuelLogTruckGasOperator(s){try{this.loading=!0;const e=await a.post("/gas-operator/fuel-log/truck/store",s);this.success=e.data.message,r.push({name:"gas-operator-fuel-log-truck-create"})}catch(e){this.error=t(e)}finally{this.loading=!1}},async createFuelLogHeavyVehicleGasOperator(s){try{this.loading=!0;const e=await a.post("/gas-operator/fuel-log/heavy-vehicle/store",s);this.success=e.data.message,r.push({name:"gas-operator-fuel-log-heavy-vehicle-create"})}catch(e){this.error=t(e)}finally{this.loading=!1}},async updateFuelLog(s){try{this.loading=!0;const e=await a.post(`/fuel-log/${s.id}`,s);this.success=e.data.message,r.push({name:"admin-fuel-log"})}catch(e){this.error=t(e)}finally{this.loading=!1}},async updateFuelLogTruck(s){try{this.loading=!0;const e=await a.post(`/fuel-log/truck/${s.id}`,s);this.success=e.data.message,r.push({name:"admin-fuel-log"})}catch(e){this.error=t(e)}finally{this.loading=!1}},async updateFuelLogHeavyVehicle(s){try{this.loading=!0;const e=await a.post(`/fuel-log/heavy-vehicle/${s.id}`,s);this.success=e.data.message,r.push({name:"admin-fuel-log"})}catch(e){this.error=t(e)}finally{this.loading=!1}},async deleteFuelLog(s){try{this.loading=!0;const e=await a.delete(`/fuel-log/${s}`);this.success=e.data.message}catch(e){this.error=t(e)}finally{this.loading=!1}}}});export{i as u};
