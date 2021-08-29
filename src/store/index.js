import Vue from "vue";
import vuex from "vuex"
import loginModule from './login/index'
import userModule from './user/index'
import searchSongsModule from './searchSongs/index';
import findSongModule from './findSongs/findSong';
import playerModule from "./player/index"
// import createPersistedState from 'vuex-persistedstate';
Vue.use(vuex);

export default new vuex.Store({
  state:{
    dialogTableVisible:false,//dialog显示
    loginPage:'loginPage1',//登录动态组件
  },
  mutations:{
    setDialogTableVisible(state,dialogTableVisible){
       state.dialogTableVisible=dialogTableVisible;
    },
    setLoginPage(state,page){
      state.loginPage=page;
    }
  },
  getters:{
    getDialogTableVisible(state){
      return state.dialogTableVisible;
    },
    getLoginPage(state){
      return state.loginPage;
    }
  },
  modules:{
      loginModule,
      userModule,
      searchSongsModule,
      findSongModule,
      playerModule
    },
  // plugins: [createPersistedState()],
})