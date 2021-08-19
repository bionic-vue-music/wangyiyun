import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import preDefault from './plugins/preDefault'
import 'element-ui/lib/theme-chalk/index.css'
import router from "./router"
import httpPlugin from "./plugins/http"
import store from "./store/index"
import autoFocus from "./plugins/autoFocus"
Vue.use(httpPlugin)
Vue.use(ElementUI)
Vue.use(preDefault);
Vue.use(autoFocus);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
