import {loginStatus,} from "../../api/login/index.js"

export default{
    namespaced:true,
    state:{
    },
    actions:{
        getLoginStatus:async function(){
        // let res=await loginRefreshStatus();  
        // console.log(res);
        return loginStatus();
       },
    }
}