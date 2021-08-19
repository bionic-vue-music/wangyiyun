import Vue from "vue"

//说明 : 调用此接口,可获取热门搜索列表
export function hotSearch(){
    return Vue.$http({
        url:'/search/hot/detail',
        method:'get'
    })
}