import Vue from "vue";
import vuex from "vuex"
import loginModule from './login/index'
import userModule from './user/index'
import searchSongsModule from './searchSongs/index'
// import createPersistedState from 'vuex-persistedstate';
Vue.use(vuex);

export default new vuex.Store({
  state:{
    dialogTableVisible:false,//dialog显示
  },
  mutations:{
    setDialogTableVisible(state,dialogTableVisible){
       state.dialogTableVisible=dialogTableVisible;
    },
  },
  getters:{
    getDialogTableVisible(state){
      return state.dialogTableVisible;
    },
  },
  modules:{
      loginModule,
      userModule,
      searchSongsModule,
    },
  // plugins: [createPersistedState()],
})