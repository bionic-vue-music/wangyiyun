import {songUrlById} from "../../api/playSong/index";
export default {
    namespaced:true,
    state:{
       songUrl:'',//通过id获取歌曲详情,播放url
    },
    mutations:{
        setSongUrl(state,url){
            state.songUrl=url;
        },
    },
    getters:{
        getSongUrl(state){
            return state.songUrl;
        },
    },
    actions:{
        async getSongUrlById({commit},songId){
            let res=await songUrlById(songId);
            console.log(res);
            if(!res) return;
            let {url}=res.data.data[0];
            commit("setSongUrl",url);

        }
    }
}