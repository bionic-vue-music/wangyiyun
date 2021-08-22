import Vue from "vue"

//说明 : 调用此接口 , 可获取APP首页信息
export function homePage(){
    return Vue.$http({
         url:'/banner',
         method:'get',
         params:{
             type:0
         }
    })
}
//说明 : 调用此接口 , 可获取推荐歌单
export function recSongs(){
    return Vue.$http({
        url:'/personalized',
        method:'get',
        params:{
            limit:10,
        }
    })
}
//说明 : 调用此接口 , 可获取独家放送入口
export function privateContent(){
    return Vue.$http({
        url:'/personalized/privatecontent',
        method:'get'
    })
}
//说明 : 调用此接口 , 可获取推荐新音乐
export function newSongs(){
    return Vue.$http({
        url:'/personalized/newsong',
        method:'get',
        params:{
            limit:12
        }
    })
}
//说明 : 调用此接口 , 可获取推荐 mv
export function recMvs(){
    return Vue.$http({
        url:'/personalized/mv',
        method:'get'
    })
}