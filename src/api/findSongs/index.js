import Vue from "vue"

//说明 : 调用此接口 , 可获取APP首页信息
export function homePage(){
    return Vue.$http({
         url:'/homepage/block/page',
         method:'get',
         params:{
             refresh:true
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