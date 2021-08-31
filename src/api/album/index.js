import Vue from "vue"
//说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容
export function getalbum(id){
    return Vue.$http({
        url:'/album',
        method:'get',
        params:{
            id
        }
    })
}

//说明 : 调用此接口 , 专辑 id 和 limit 参数 , 可获得该专辑的所有评论 ( 不需要 登录 )
export function commentAlbum(page){
    return Vue.$http({
        url:'/comment/album',
        method:'get',
        params:{
          id:page.id,
          limit:page.limit,
          offset:page.offset,
          before:page.before
        }
    })
}