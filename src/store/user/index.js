import { userDetail ,userLevelInfo,Logout} from "../../api/user/index";
import { loginByPhone } from "../../api/login/index";
export default{
    namespaced:true,
    state:{
    //用户详情
       profile:[
           {
            nickname:'',//用户昵称
            userId:'', //用户id
            signature:'',//个性签名
            backgroundUrl:'',//个人主页背景图片地址
            avatarUrl:'',//头像url
            city:'',//用户城市
            province:'',//用户省会
            gender:'',//0保密1男2女
            birthday:'',//生日
            vipType:'',//vip等级
           }
       ],
       level:'',//等级
    },
    mutations:{
        setProfile(state,profile){
            state.profile=[profile];//对象数组  便于渲染视图数据
        },
        setLevel(state,level){
            state.level=level;
        },
    },
    getters:{
        getProfile(state){
            return state.profile
        },
        getLevel(state){
            return state.level
        },
    },
    actions:{
        //用户详情
        async getUserDetail(context,id){
            let res=await userDetail(id);
            let {profile,level}=res.data;
            // console.log(profile.followeds);
            // console.log(profile.follows);
            // console.log(profile.authority);
            context.commit('setProfile',profile);
            context.commit('setLevel',level)
        },
        //手机登录
        async getLoginByPhone(context,userPhone){
           let res=await loginByPhone(userPhone).catch(err=>console.log(err));
         
        //    console.log(res);
           if(!res) return
        //    console.log(res);
           let {profile}=res.data;
        //    console.log(profile);
           context.commit('setProfile',profile);
           return loginByPhone(userPhone);
        },
        //用户等级...
        async getUserLevelInfo(context){
            let res=await userLevelInfo().catch(err=>{console.log(err);});
            if(!res)return
            console.log(res);
            let {level}=res.data.data;
            context.commit('setLevel',level);
            
        },
        //logout
        async getLogout(context){
           let res=await Logout();
           console.log(res);
           let profile={}
        //    let {profile}=res.data
           context.commit('setProfile',profile);//传入空数据，初始化新状态
           context.commit('setLevel',''); //
        }
    },
}