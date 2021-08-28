import {playlistDetail,playlisthighqualitytags,highqualityPlaylist,playlisthot,homePage,recMvs,recSongs,privateContent,newSongs,topPlaylist} from "../../api/findSongs/index"
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
        tracks:[]//歌单歌曲
    },
    getters:{
        getTracks(state){
            return state.tracks;
        },
        getPlaylistDetail(state){
           return state.playlistDetail;
        },
        getPage1(state){
            return state.page1;
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
        setTracks(state,ids){
            state.tracks=ids;
        },
        setPlaylistDetail(state,playlist){
            state.playlistDetail=playlist;
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
            let {playlist} =res.data;
            let songIds=[];
            playlist.trackIds.forEach(item=>songIds.push(item.id));
            let res1=await songDetail(songIds.toString())
            if(!res1) return;
            let {songs}=res1.data;
            commit('setTracks',songs);
            commit('setPlaylistDetail',playlist);
        }
    }
}