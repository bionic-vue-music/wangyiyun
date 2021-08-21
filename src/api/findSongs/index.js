import Vue from "vue"

//说明 : 调用此接口 , 可获取APP首页信息
export function homePage(){
    return Vue.$http({
         url:'/homepage/block/page',
         method:'get'
    })
}