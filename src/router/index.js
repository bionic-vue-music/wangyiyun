import Vue from "vue"
import vueRouter from "vue-router"

const index=()=>import('../pages/index.vue')
const loginPage1=()=>import('../pages/loginPage1.vue')
const loginPage2=()=>import('../pages/loginPage2.vue')

Vue.use(vueRouter)
const routes=[
    {path:'/',component:index,name:'index',
      children:[
          {path:'/loginPage1',component:loginPage1,name:'loginPage1'},
          {path:'/loginPage2',component:loginPage2,name:'loginPage2'}
      ]
    },
];

const router=new vueRouter({routes});


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router;