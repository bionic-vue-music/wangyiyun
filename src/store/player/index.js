import {songUrlById,songLycById,songDetail} from "../../api/playSong/index";
// import { Message } from 'element-ui';
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
       },
    },
    getters:{
      getSongInfo(state){
           return state.songInfo;
      },
      getIsPlay(state){
           return state.isPlay;
      },
    },
    actions:{
        async getSong({commit},song){

            let res=await songUrlById(song.id);
            let res1=await songLycById(song.id);
            let res2=await songDetail(song.id);
            // console.log(res);
            if(!res) return;
            if(!res1) return;
            if(!res2) return;

            let {url}=res.data.data[0];
            let {name}=res2.data.songs[0];
            let arName=res2.data.songs[0].ar[0].name;
            let pic=res2.data.songs[0].al.picUrl
            if(!res1.data.lrc){
                // Message({
                //     type:"error",
                //     message:'抱歉暂无歌源...',
                //     title:'提示',
                //     duration:3500,
                //     center:true
                // });
                // Message.close();
                // return;
                commit('setSongInfo',{...song,src:url,title:name,artist:arName,pic})
            }else{
                let {lyric,version}=res1.data.lrc;
           
                commit('setSongInfo',{...song,src:url,lyric,version,title:name,artist:arName,pic})
            }
           
       }
    },
}