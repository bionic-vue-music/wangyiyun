import Vue from "vue";

// 获取音乐 url
export function songUrlById(id){
    return Vue.$http({
        url:'/song/url',
        method:'get',
        params:{
            id
        }
    })
}
//获取音乐歌词 
export function songLycById(id){
    return Vue.$http({
        url:'/lyric',
        method:'get',
        params:{
            id
        }
    })
}
//说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情
export function songDetail(ids){
    return Vue.$http({
        url:'/song/detail',
        method:'get',
        params:{
            ids
        }
    })
}