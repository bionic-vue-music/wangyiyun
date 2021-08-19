import {hotSearch} from "../../api/searchSongs/index"


export default {
    namespaced:true,
    state:{
        hotSongs:[]
    },
    mutations:{
        setHotSongs(state,song){
            state.hotSongs=song;
        }
    },
    getters:{
        getHotSongs(state){
            return state.hotSongs;
        }
    },
    actions:{
        async getHotSearch({commit}){
            let res=await hotSearch().catch(err=>{console.log(err)});
            console.log(res);
            if(!res) return
            let {data}=res.data;
            commit('setHotSongs',data);
        }
    }
}