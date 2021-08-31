import {getalbum,commentAlbum} from "../../api/album/index"
export default{
    namespaced: true,
    state:{
        page:{
            total:0,
            pno:1,
            psize:50
        },//专辑评论分页
        albumSong:[],//专辑歌曲
        album:{},//专辑信息
        commentPlaylist:[],
        hotCommentPlaylist:[],//热评
    },
    mutations:{
        setCommentPlaylist(state,comment){
            state.commentPlaylist=comment;
        },
        setHotcommentPlaylist(state,comment){
            state.hotCommentPlaylist=comment
        },
        setPage(state,page){
            state.page=page;
        },
        setAlbumSong(state,albumSong){
            state.albumSong=albumSong;
        },
        setAlbum(state,album){
            state.album=album;
        },
    },
    getters:{
        getHotCommentPlaylist(state){
            return state.hotCommentPlaylist;
        },
        getCommentPlaylist(state){
            return state.commentPlaylist;
        },
        getPage(state){
            return state.page;
        },
        getAlbum(state){
            return state.album;
        },
        getAlbumSong(state){
            return function(words){ //getters传参 返回函数(闭包)
                if(!words){  
                    return state.albumSong;
                }else{
                    return state.albumSong.filter(item=>{
                        let songers='';
                        item.ar.forEach(a=>songers+=a.name);
                        return item.name.includes(words) || item.al.name.includes(words) || songers.includes(words)
                     }
                    )
                }
            }
        },
    },
    actions:{
        async GetAlbum({commit},id){
            let res= await getalbum(id);
            if(!res) return;
            let {songs,album}=res.data;
            commit('setAlbumSong',songs);
            commit('setAlbum',album);
        },
        async GetCommentAlbum({commit,state},page){
            let res= await commentAlbum(page);
            if(!res) return;
            let {hotComments,comments,total}=res.data
            commit('setHotcommentPlaylist',hotComments);
            commit('setCommentPlaylist',comments);
            commit('setPage',{...state.page,total});
      }
    }

}