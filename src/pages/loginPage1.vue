<template>
    <div class="loginBox"  v-loading="loading">
        <h1>扫码登陆</h1>
           <div class="loginPng">
               <img src="../assets/login1.png" alt="" class="showMOreLogin">
               <div id="qrcode" class="ewmLogin"></div>
               <div class="scanLogin">
                  <span>使用<a href="https://music.163.com/#/download">网易云APP</a>扫码登陆</span>
               </div>
           </div>
           <div class="otherLogin">
               <span @click='$router.push({name:"loginPage2"})'>选择其他登陆模式></span>
           </div>
    </div>
</template>
<script>
import {createBase64,qrImgStatus,} from "../api/login/index.js";
import QRCode from 'qrcodejs2' //导入二维码库
import {mapActions} from "vuex"
export default {
    name:'loginPage1',
    data(){
      return{
         loading:true,
         hasEwm:false, //判断当前是否又二维码，避免重复挂在
         timer:null,
         key:''//存储二维码key值
      }
    },
    methods:{
        ...mapActions('loginModule',['getLoginStatus'])
    },
    //keepalive 不会让组件走此beforeRouteEnter 所以从其他页面返回回来失败，用activated钩子
    async activated(){
       
  },
  deactivated(){
      clearInterval(this.timer);
    //   console.log();
  },
  async created(){
       let res=await createBase64().catch(err=>{console.log(err)});
       console.log(res.config.params.key);
       this.key=res.config.params.key
        let {code,data}=res.data;
        if(code!='200') return;
        if(this.hasEwm) return;//判断当前是否又二维码，避免重复挂在
            //调用的时候DOM还没有渲染好，所以qrcode.makeCode的调用要放在$nextTick里面
            //理解：nextTick()，是将回调函数延迟在下一次dom更新数据后调用，简单的理解是：当数据更新了，在dom中渲染后，自动执行该函数，
        let qrcode = new QRCode('qrcode',{
                width: 128,
                height: 128,
            });
        this.$nextTick(()=>{
            qrcode.makeCode(data.qrurl);
            this.loading=false;
            this.hasEwm=true;
        });


      //轮询
    //   解释：setInterval不会清除定时器队列（js单线程），每重复执行1次都会导致定时器叠加，最终卡死你的网页。
    //   setInterval放在外层，内层嵌套setTimeout
    // JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事
    // JavaScript 的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 
    // DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript 同时有两个线程，一个线程
    // 在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

      let _this=this;
       _this.timer=setInterval(()=>{
        setTimeout(()=>{
          qrImgStatus(_this.key).then(async (res)=>{
              let {code,message}=res.data;
              if(code==803){
                _this.$notify({
                    title:'提示',
                    message,
                    type:'success'
                });
                
                console.log(res);
                console.log(res.data.cookie);
                let status=await this.getLoginStatus();
                console.log(status);
               
              }else if(code==800){
                 _this.$notify({
                    title:'提示',
                    message,
                    type:'warning'
                });
                 //二维码过期了，清除timer
                clearInterval(_this.timer);
              }
              else{
                // console.log(res);
                _this.$notify({
                    title:'提示',
                    message,
                    type:'info'
                })   
              }
          })
        },0)
      },5000);
  }
}
</script>
<style scoped>

.loginBox{
    text-align: center;
    height: 510px;
}
.otherLogin{
    margin-top: 200px;
    cursor: pointer;
}

.showMOreLogin{
    position: absolute;
    left: 150px;
    top: 100px;
    opacity: 0;
    transition: all 0.8s;
}
.ewmLogin{
    margin-left: 110px;
    transition: all 0.8s;
}
.scanLogin{
    margin-top: 20px;
    transition: all 0.8s;
}
.loginPng:hover .ewmLogin{
   transform: scale(0.6) translateX(130px);
   transition: all 0.8s;
}
.loginPng:hover .showMOreLogin{
   transform: translateX(-130px);
   opacity: 1;
   transition: all 0.8s;
}
.loginPng:hover .scanLogin{
    transform:translateX(100px);
   transition: all 0.8s;
}
.scanLogin a{
    color: rgb(61, 158, 182);
    text-decoration: none;
}
</style>