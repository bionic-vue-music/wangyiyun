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

// 说明 : 调用此接口 , 可获取网友精选碟歌单

// 可选参数 : order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'

// cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)

// limit: 取出歌单数量 , 默认为 50

// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
export function topPlaylist(page){
    return Vue.$http({
        url:'/top/playlist',
        method:'get',
        params:{
            cat:page.cat,
            limit:page.limit,
            offset:page.offset
        }
    })
}
//热门歌单分类	
export function playlisthot(){
    return Vue.$http({
        method:'get',
        url:'/playlist/hot'
    })
}

// 获取精品歌单
// 说明 : 调用此接口 , 可获取精品歌单

// 可选参数 : cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ",
//  默认为 "全部",可从精品歌单标签列表接口获取(/playlist/highquality/tags)

export function highqualityPlaylist(page){
    return Vue.$http({
        url:'/top/playlist/highquality',
        method:'get',
        params:{
            cat:page.cat,
            limit:page.limit,
            before:page.before
        }
    })
}


// 精品歌单标签列表
// 说明 : 调用此接口 , 可获取精品歌单标签列表
export function playlisthighqualitytags(){
        return Vue.$http({
            method:'get',
            url:'/playlist/catlist'
        })
}
