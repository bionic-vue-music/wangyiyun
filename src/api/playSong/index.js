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