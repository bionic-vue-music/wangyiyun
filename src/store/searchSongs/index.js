import {hotSearch,searchRes} from "../../api/searchSongs/index"


export default {
    namespaced:true,
    state:{
        hotSongs:[],//热搜榜单
        searchRes:{},//搜索结果
        barToInputKeyWord:'',//点击结果显示的歌曲返回给input里的值
    },
    mutations:{
        setHotSongs(state,song){
            state.hotSongs=song;
        },
        setSearchRes(state,song){
            state.searchRes=song;
        },
        setBarToInputKeyWord(state,val){
            state.barToInputKeyWord=val;
        },
    },
    getters:{
        getHotSongs(state){
            return state.hotSongs;
        },
        getSearchRes(state){
            return state.searchRes;
        },
        getBarToInputKeyWord(state){
            return state.barToInputKeyWord;
        }
    },
    actions:{
        async getHotSearch({commit}){
            let res=await hotSearch().catch(err=>{console.log(err)});
            // console.log(res);
            if(!res) return
            let {data}=res.data;
            commit('setHotSongs',data);
        },
        async getSearchRes({commit},keywords){
            let res=await searchRes(keywords).catch(err=>{console.log(err)});
            // console.log(res);
            if(!res) return
            let {result}=res.data;
            commit('setSearchRes',result);
        }
    }
}