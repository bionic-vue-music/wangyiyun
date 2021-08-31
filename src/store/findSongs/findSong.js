import {commentPlaylist,playlistSubscribers,playlistDetail,playlisthighqualitytags,highqualityPlaylist,playlisthot,homePage,recMvs,recSongs,privateContent,newSongs,topPlaylist} from "../../api/findSongs/index"
import {songDetail} from '../../api/playSong/index'
export default{
    namespaced:true,
    state:{
        blocks:{},//首页发现block信息
        recmBlocks:[],//首页发现歌单推荐信息
        privateContent:[],//首页独家放送信息
        newSongs:[],//推荐新音乐
        recMv:[],//推荐mv
        playlists:[],//网友精选碟歌单
        playlisthot:[],//热门歌单分类
        highqualityPlaylist:[],//精选歌单
        playlistHighqualityTags:[],//精品歌单标签列表
        page:{
            total:0,
            pno:1,
            psize:50
        },//网友精选歌单分页
        page1:{
            total:0,
            pno:1,
            psize:50
        },//热门歌单分类分页
        playlistDetail:[],//歌单详情
        tracks:[],//歌单歌曲
        playlistSubscribers:[],//收藏者
        page2:{
            total:0,
            pno:1,
            psize:60
        },//收藏者分类
        page3:{
            total:0,
            pno:1,
            psize:50
        },//评论
        commentPlaylist:[],
        hotCommentPlaylist:[],//热评
    },
    getters:{
        getHotCommentPlaylist(state){
            return state.hotCommentPlaylist;
        },
        getCommentPlaylist(state){
            return state.commentPlaylist;
        },
        getPlaylistSubscribers(state){
            return state.playlistSubscribers;
        },
        getTracks(state){
           return function(words){ //getters传参 返回函数(闭包)
                if(!words){  
                    return state.tracks;
                }else{
                    return state.tracks.filter(item=>{
                        let songers='';
                        item.ar.forEach(a=>songers+=a.name);
                        return item.name.includes(words) || item.al.name.includes(words) || songers.includes(words)
                     }
                    )
                }
            }
        },
        getPlaylistDetail(state){
           return state.playlistDetail;
        },
        getPage2(state){
            return state.page2;
        },
        getPage1(state){
            return state.page1;
        },
        getPage3(state){
            return state.page3;
        },
        getPage(state){
            return state.page;
        },
        getPlaylistHighqualityTagsYZ(state){
            return state.playlistHighqualityTags.filter(item=>{
                return item.category==0}
            )
        },
        getPlaylistHighqualityTagsSTYLE(state){
            return state.playlistHighqualityTags.filter(item=>
                item.category==1
            )
        },
        getPlaylistHighqualityTagsCJ(state){
            return state.playlistHighqualityTags.filter(item=>
                item.category==2
            )
        },
        getPlaylistHighqualityTagsQG(state){
            return state.playlistHighqualityTags.filter(item=>
                item.category==3
            )
        },
        getPlaylistHighqualityTagsZT(state){
            return state.playlistHighqualityTags.filter(item=>
                item.category==4
            )
        },
        getPlaylistHighqualityTags(state){
            return state.playlistHighqualityTags;
        },
        getHighqualityPlaylist(state){
            return state.highqualityPlaylist;
        },
        getPlaylistHot(state){
            return state.playlisthot
        },
        getBlocks(state){
            return state.blocks;
        },
        getRecmBlocks(state){
            return state.recmBlocks;
        },
        getPrivateContent(state){
            return state.privateContent;
        },
        getNewSongs(state){
            return state.newSongs;
        },
        getRecMv(state){
            return state.recMv;
        },
        getPlaylists(state){
            return state.playlists
        }
    },
    mutations:{
        setCommentPlaylist(state,comment){
            state.commentPlaylist=comment;
        },
        setHotcommentPlaylist(state,comment){
            state.hotCommentPlaylist=comment
        },
        setPlaylistSubscribers(state,playlistSubscribers){
            state.playlistSubscribers=playlistSubscribers;
        },
        setTracks(state,ids){
            state.tracks=ids;
        },
        setPlaylistDetail(state,playlist){
            state.playlistDetail=playlist;
        },
        setPage2(state,page){
            state.page2=page;
        },
        setPage3(state,page){
            state.page3=page;
        },
        setPage1(state,page){
            state.page1=page;
        },
        setPage(state,page){
            state.page=page;
        },
        setPlaylistHighqualityTags(state,Tags){
            state.playlistHighqualityTags=Tags;
        },
        setHighqualityPlaylist(state,highqualityPlaylist){
            state.highqualityPlaylist=highqualityPlaylist;
        },
        setPlaylistHot(state,hot){
            state.playlisthot=hot;
        },
        setPlaylists(state,playlists){
            state.playlists=playlists;
        },
        setBlocks(state,blocks){
            state.blocks=blocks;
        },
        setRecmBlocks(state,recmBlocks){
            state.recmBlocks=recmBlocks;
        },
        setPrivateContent(state,privateContent){
            state.privateContent=privateContent
        },
        setNewSongs(state,newSongs){
            state.newSongs=newSongs;
        },
        setRecMv(state,mv){
            state.recMv=mv;
        }
    },
    actions:{
        async getHomePage({commit}){
          let res=await homePage();
        //   console.log(res);
          if(!res) return;
          let {banners}=res.data;
        //   console.log(extInfo.banners);
          commit('setBlocks',banners);
        },
        async getRecSongs({commit}){
           let res=await recSongs();
           let {result}=res.data;
           commit("setRecmBlocks",result)
        },
        async privateContent({commit}){
            let res=await privateContent();
            let {result}=res.data;
            commit('setPrivateContent',result);
        },
        async getRecNewSongs({commit}){
            let res=await newSongs();
            if(!res) return;
            let {result}=res.data;
            commit('setNewSongs',result);
        },
        async getRecMvs({commit}){
            let res =await recMvs();
            if(!res) return;
            let {result}=res.data;
            commit('setRecMv',result);
        },
        async GetPlaylists({commit,state},page){
            let res=await topPlaylist(page);
            if(!res) return;
            let {playlists,total}= res.data;
            commit('setPlaylists',playlists);
            commit('setPage',{...state.page,total})
        },
        async GetPlaylistHot({commit}){
            let res=await playlisthot();
            if(!res) return;
            let {tags}=res.data;
            commit('setPlaylistHot',tags)
        },
        async GetHighqualityPlaylist({commit,state},page){
            let res=await highqualityPlaylist(page);
            if(!res) return;
            let {playlists,total}=res.data;
            commit('setHighqualityPlaylist',playlists);
            commit('setPage1',{...state.page1,total})
        },
        async GetPlaylistHighqualityTags({commit}){
            let res=await playlisthighqualitytags();
            if(!res) return;
            let {sub}=res.data;
            commit('setPlaylistHighqualityTags',sub);
        },
        async GetPlaylistDetail({commit},id){
            let res=await playlistDetail(id);
            if(!res) return;
            // console.log(res);
            let {playlist} =res.data;
            let songIds=[];
            playlist.trackIds.forEach(item=>songIds.push(item.id));
            let res1=await songDetail(songIds.toString())
            if(!res1) return;
            // console.log(res1);
            let {songs}=res1.data;
            commit('setTracks',songs);
            commit('setPlaylistDetail',playlist);
        },
        async GetPlaylistSubscribers({commit,state},page){
            let res=await playlistSubscribers(page);
            console.log(res);
            if(!res) return;
            let {subscribers,total}=res.data;
            // console.log(total);
            commit('setPage2',{...state.page2,total});
            commit('setPlaylistSubscribers',subscribers);
        },
        async GetCommentPlaylist({commit,state},page){
              let res= await commentPlaylist(page);
              if(!res) return;
              let {hotComments,comments,total}=res.data
              commit('setHotcommentPlaylist',hotComments);
              commit('setCommentPlaylist',comments);
              commit('setPage3',{...state.page3,total});
        }
    }
}