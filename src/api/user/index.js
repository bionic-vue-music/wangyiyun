import Vue from "vue";


//说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户详情
export function userDetail(id){
   return Vue.$http({
       url:'/user/detail',
       method:'get',
       params:{
        uid:id
       }
   })
}
//明 : 登录后调用此接口 , 可以获取用户等级信息,包含当前登录天数,听歌次数,下一等级需要的登录天数和听歌次数,当前等级进度
export async function userLevelInfo(){
    return Vue.$http({
        url:'/user/level',
        method:'get',
    }).catch(err=>{console.log(err);});
}
//退出登录
export function Logout(){
     return Vue.$http({
         url:'/logout',
         method:'get'
     })
 }
//说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
export function userPlaylists(uid){
    return Vue.$http({
        url:'/user/playlist',
        method:'get',
        params:{
            uid
        }
    })
}