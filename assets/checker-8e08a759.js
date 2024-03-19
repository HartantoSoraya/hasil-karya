import{b2 as i,b3 as a,b4 as c,b5 as r}from"./index-d8570b98.js";const n=i({id:"checker",state:()=>({checkers:[],loading:!1,error:null,success:null}),actions:{async fetchCheckers(){try{this.loading=!0;const s=await a.get("/checkers");this.checkers=s.data.data}catch(s){this.handleError(s)}finally{this.loading=!1}},async fetchChecker(s){try{return this.loading=!0,(await a.get(`/checker/${s}`)).data.data}catch(e){this.handleError(e)}finally{this.loading=!1}},async createChecker(s){try{this.loading=!0;const e=await a.post("/checker",s);this.success=e.data.message,c.push({name:"admin-checker"})}catch(e){this.error=r(e)}finally{this.loading=!1}},async updateChecker(s){try{this.loading=!0;const e=await a.post(`/checker/${s.id}`,s);this.success=e.data.message,c.push({name:"admin-checker"})}catch(e){this.error=r(e)}finally{this.loading=!1}},async deleteChecker(s){try{this.loading=!0;const e=await a.delete(`/checker/${s}`);this.success=e.data.message}catch(e){this.error=r(e)}finally{this.loading=!1}},async activateChecker(s,e){try{this.loading=!0;const t=await a.post(`/checker/active/${s}`,e);this.success=t.data.message}catch(t){this.error=r(t)}finally{this.loading=!1}}}});export{n as u};
