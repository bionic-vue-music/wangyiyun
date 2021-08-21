import {homePage} from "../../api/findSongs/index"
export default{
    namespaced:true,
    state:{
        blocks:{},//首页发现block信息
    },
    getters:{
        getBlocks(state){
            return state.blocks;
        }
    },
    mutations:{
        setBlocks(state,blocks){
            state.blocks=blocks;
        }
    },
    actions:{
        async getHomePage({commit}){
          let res=await homePage();
          console.log(res);
          if(!res) return;
          let {extInfo}=res.data.data.blocks[0]
          console.log(extInfo.banners);
          commit('setBlocks',extInfo);
        }
    }
}