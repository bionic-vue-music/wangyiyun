export default {
    namespaced:true,
    state:{
       songInfo:{
        src:'',
        title:'',
        artist:'',
        pic:'',
        id:'',
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
        getSong({commit},song){
        commit('setSongInfo',song)
       }
    },
}