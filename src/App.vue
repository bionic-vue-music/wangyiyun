<template>
      <transition name="initial" appear>
        <router-view></router-view>
      </transition>
</template>

<script>
// import index from "./pages/index.vue"

export default {
  name: 'App',
  components: {
    // index
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
/* 定义初始化动画 */
.initial-leave-active{
  animation: tabBar 0.8s ;
}
.initial-enter-active{
   animation: tabBar1 0.8s ;
}
@keyframes tabBar {
  0%{
     opacity: 1;
     
  }
  100%{
    opacity: 0;
    transform-origin: center;
    transform: translateY(100px) ;
  }
}
@keyframes tabBar1 {
  0%{
     opacity: 0;
     transform: translateY(-100px);
  }
  100%{
    opacity: 1;
    transform-origin: center;
    transform: translateX(0px) ;
  }
}


 /* css页面去除滚动条
 注：滚动条是导致页面切换标签页闪动的原因
html{ */
     /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
    /* -ms-overflow-style:none; */
    /*火狐下隐藏滚动条*/
     /* overflow:-moz-scrollbars-none; */

::-webkit-scrollbar{
    display:none;
}
</style>
