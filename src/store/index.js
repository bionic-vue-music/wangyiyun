import Vue from "vue";
import vuex from "vuex"
import loginModule from './login/index'
Vue.use(vuex);

export default new vuex.Store({
    modules:{
      loginModule
    }
})