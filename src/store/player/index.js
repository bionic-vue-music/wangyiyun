import {songUrlById,songLycById} from "../../api/playSong/index";
export default {
    namespaced:true,
    state:{
       songInfo:{
        src:'',
        title:'',
        artist:'',
        pic:'',
        id:'',
        version:'',
       },
       isPlay:false,
    },
    mutations:{
       setSongInfo(state,songInfo){
           state.songInfo=songInfo;
       },
       setIsPlay(state,val){
           state.isPlay=val;
       }
    },
    getters:{
      getSongInfo(state){
           return state.songInfo;
      },
      getIsPlay(state){
           return state.isPlay;
      }
    },
    actions:{
        async getSong({commit},song){

            let res=await songUrlById(song.id);
            let res1=await songLycById(song.id);
            // console.log(res);
            if(!res) return;
            if(!res1) return;
            let {url}=res.data.data[0];
            let {lyric,version}=res1.data.lrc;
            commit('setSongInfo',{...song,src:url,lyric,version})
       }
    },
}