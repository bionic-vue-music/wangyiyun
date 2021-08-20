import Vue from "vue"

//说明 : 调用此接口,可获取热门搜索列表
export function hotSearch(){
    return Vue.$http({
        url:'/search/hot/detail',
        method:'get'
    })
}
//说明 : 调用此接口 , 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
export function searchRes(keywords){
    return Vue.$http({
        url:'/search/suggest',
        method:'get',
        params:{
            keywords
        }
    })
}