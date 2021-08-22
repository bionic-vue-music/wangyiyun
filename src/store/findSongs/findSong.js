import {homePage,recMvs,recSongs,privateContent,newSongs} from "../../api/findSongs/index"
export default{
    namespaced:true,
    state:{
        blocks:{},//首页发现block信息
        recmBlocks:[],//首页发现歌单推荐信息
        privateContent:[],//首页独家放送信息
        newSongs:[],//推荐新音乐
        recMv:[],//推荐mv
    },
    getters:{
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
        }
    },
    mutations:{
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
          console.log(res);
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
        }
    }
}