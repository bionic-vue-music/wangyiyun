import {homePage,recSongs,privateContent} from "../../api/findSongs/index"
export default{
    namespaced:true,
    state:{
        blocks:{},//首页发现block信息
        recmBlocks:[],//首页发现歌单推荐信息
        privateContent:[]//首页独家放送信息
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
        }
    },
    actions:{
        async getHomePage({commit}){
          let res=await homePage();
          console.log(res);
          if(!res) return;
          let {extInfo}=res.data.data.blocks[0];
        //   console.log(extInfo.banners);
          commit('setBlocks',extInfo);
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
        }
    }
}