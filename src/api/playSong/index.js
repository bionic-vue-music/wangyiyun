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