import {playlisthighqualitytags,highqualityPlaylist,playlisthot,homePage,recMvs,recSongs,privateContent,newSongs,topPlaylist} from "../../api/findSongs/index"
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
    },
    getters:{
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
        async GetPlaylists({commit},page){
            let res=await topPlaylist(page);
            if(!res) return;
            let {playlists}= res.data;
            commit('setPlaylists',playlists)
        },
        async GetPlaylistHot({commit}){
            let res=await playlisthot();
            if(!res) return;
            let {tags}=res.data;
            commit('setPlaylistHot',tags)
        },
        async GetHighqualityPlaylist({commit},page){
            let res=await highqualityPlaylist(page);
            if(!res) return;
            let {playlists}=res.data;
            commit('setHighqualityPlaylist',playlists);
        },
        async GetPlaylistHighqualityTags({commit}){
            let res=await playlisthighqualitytags();
            if(!res) return;
            let {sub}=res.data;
            commit('setPlaylistHighqualityTags',sub)
        }
    }
}