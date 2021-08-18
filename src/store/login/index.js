import {loginStatus,loginRefreshStatus} from "../../api/login/index.js"

export default{
    namespaced:true,
    state:{
    },
    actions:{
       async getLoginStatus(){
        let res=await loginRefreshStatus();  
        console.log(res);
        await loginStatus();
       },
    }
}