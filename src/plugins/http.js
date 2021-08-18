//封装axios
import axios from "axios";
// 设置baseUrl默认值
axios.defaults.baseURL = 'https://netease-cloud-music-api-six-henna.vercel.app'

export default{
    install(Vue){
        Vue.$http=axios;
        Vue.prototype.$http=axios;
    }
}