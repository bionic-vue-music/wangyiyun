<template>
    <div>
         <aplayer class="ss" :lrcType="getSongInfo.version" :show-lrc="showLrc" ref="player" @canplay="autoPlay" :music="{
                 src:getSongInfo.src||'http://music.163.com/song/media/outer/url?id=562598065.mp3',
                 pic:getSongInfo.pic||'http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
                 lrc:getSongInfo.lyric|| noLrcTip
           }">
    </aplayer>
    <ul class="songInfo">
        <li>
            <span>{{getSongInfo.title}}</span>
        </li>
        <li>
            <span>{{getSongInfo.artist}}</span>
        </li>
    </ul>
    <ul class="controll">
        <li>
            <svg t="1629648973567" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17179" width="200" height="200"><path d="M925.1 600.7c-26.3-8.7-54.7 5.8-63.4 32.6-35.2 109-134.3 182.3-246.6 182.3H423.5C280.4 815.5 164 697 164 551.2c0-145.7 116.4-264.3 259.4-264.3h264.3c1.3 17.6 3.4 35.1 6.1 52.7 2.7 17.3 19.7 28.1 36.1 22.9 72.6-23.4 135.7-58.4 189.3-104.9 13.2-11.5 13-32.4-0.4-43.6-54.9-46-117.8-81-188.6-104.9-16.4-5.6-33.7 5.3-36.4 22.8-2.7 17.6-4.7 35.2-6.1 52.7H423.5c-198.4 0-359.9 164.5-359.9 366.6 0 202.2 161.4 366.6 359.9 366.6h191.7c155.7 0 293.1-101.5 342-252.6 8.6-26.8-5.8-55.7-32.1-64.5z" p-id="17180" fill="#ffffff"></path></svg>
        </li>
        <li>
           <svg t="1629649428625" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22049" width="200" height="200"><path d="M712.6 212.4c64.7-41 117.3-14.4 117.3 59.6v478.8c0 73.9-52.5 100.6-117.3 59.6L357.7 585.8c-64.8-41-64.8-107.6 0-148.7l354.9-224.7z" p-id="22050" fill="#ffffff"></path><path d="M263.4 831.7h-9.8c-31.2 0-56.7-25.5-56.7-56.7V249.8c0-31.2 25.5-56.7 56.7-56.7h9.8c31.2 0 56.7 25.5 56.7 56.7V775c0 31.2-25.5 56.7-56.7 56.7z" p-id="22051" fill="#ffffff"></path></svg>
        </li>
        <li @click="on_off">
            <svg v-if=false t="1629649053272" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18914" width="200" height="200"><path d="M512 26.947368c267.883789 0 485.052632 217.168842 485.052632 485.052632s-217.168842 485.052632-485.052632 485.052632S26.947368 779.883789 26.947368 512 244.116211 26.947368 512 26.947368z m97.010526 300.274527c-22.177684 0-41.606737 19.348211-41.606737 41.498947V673.145263c0 22.096842 19.402105 41.472 41.57979 41.472s41.606737-19.348211 41.606737-41.498947V368.747789c0-22.150737-19.402105-41.498947-41.57979-41.498947z m-194.021052 0c-22.177684 0-41.579789 19.348211-41.57979 41.498947V673.145263c0 22.096842 19.402105 41.472 41.57979 41.472s41.606737-19.348211 41.606737-41.498947V368.747789c-0.026947-22.150737-19.429053-41.498947-41.57979-41.498947H414.989474z" p-id="18915" fill="#bfbfbf"></path></svg>
        </li>
        <li>
            <svg t="1629649094592" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20269" width="200" height="200"><path d="M761.158332 809.566932 728.926476 809.566932c-15.203706 0-27.4883-12.284594-27.4883-27.4883L701.438176 559.861266c-3.162371 2.554223-6.568001 5.108445-10.46015 7.419408L312.953082 801.417746c-42.813636 26.515263-77.842974 7.05452-77.842974-43.421784L235.110108 266.004038c0-50.354674 34.664449-69.207269 76.991567-41.962228l379.849388 245.326998c3.40563 2.189334 6.568001 4.621927 9.487112 7.05452L701.438176 242.772776c0-15.203706 12.284594-27.4883 27.4883-27.4883l32.231857 0c15.203706 0 27.4883 12.284594 27.4883 27.4883L788.646633 782.078632C788.646633 797.282338 776.362038 809.566932 761.158332 809.566932L761.158332 809.566932 761.158332 809.566932z" p-id="20270" fill="#ffffff"></path></svg>
        </li>
        <li @click="handleShowLrc">
            <svg t="1629649114030" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21142" width="200" height="200"><path d="M448 704h192v-192h-192v192z m-32-256h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-256a32 32 0 0 1-32-32v-256a32 32 0 0 1 32-32zM174.72 178.528a32 32 0 1 1 48.32-41.952l76.416 88a32 32 0 0 1-48.32 41.984L174.72 178.528z m51.264 205.952H137.6a32 32 0 1 1 0-64h120.32a32 32 0 0 1 32 32v420.672l10.272-13.568a32 32 0 0 1 51.04 38.624l-67.776 89.6c-18.528 24.448-57.504 11.36-57.504-19.328V384.48z m608.32-192.064H384a32 32 0 0 1 0-64h482.336a32 32 0 0 1 32 32V864a32 32 0 0 1-32 32h-142.56a32 32 0 1 1 0-64h110.56V192.416zM416 354.976a32 32 0 0 1 0-64h257.408a32 32 0 1 1 0 64H416z" p-id="21143" fill="#ffffff"></path></svg>
        </li>
    </ul>
        <div class="zzb">   
        </div>
          <div class="zzb1" title="展开音乐详情页">
        <i>
            <svg t="1629650442146" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22889" width="200" height="200"><path d="M512.133 399.517l-292.16 292.155c-12.27 12.28-32.186 12.28-44.457 0-12.28099999-12.27-12.281-32.186 0-44.457l314.388-314.388c12.27-12.28 32.186-12.28 44.457 0l314.387 314.388c6.14 6.136 9.211 14.183 9.211 22.228s-3.071 16.092-9.211 22.228c-12.27 12.28-32.186 12.28-44.457 0l-292.159-292.155z" p-id="22890" fill="#cdcdcd"></path></svg>
        </i>
        </div>
    </div>
</template>

<script>
    import Aplayer from "vue-aplayer";
    import {mapGetters,mapMutations} from "vuex"
    export default {
        name: "indexPageVideo",
        data(){
            return{
                showLrc:true,
                noLrcTip:"抱歉暂无歌词..."
            }
        },
        computed:{
            ...mapGetters('playerModule',['getSongInfo','getIsPlay'])
        },
        methods:{
            ...mapMutations('playerModule',['setIsPlay']),
            on_off(){
                this.$refs.player.toggle();
               if(this.getIsPlay){
                  this.setIsPlay(false);
                //   this.$refs.player.pause();
               }else{
                  this.setIsPlay(true);
                //    this.$refs.player.play();
               }
            },
            autoPlay(){
                if(this.getIsPlay){
                     this.$refs.player.play();
                }
                let _this=this;
                window.onkeydown=function(e){
                   
                    // console.log(e);
                    if(e.keyCode==32 ){
                         _this.$refs.player.toggle();
                         //阻止页面跳动
                         e.preventDefault();
                    }
                }
            },
            handleShowLrc(){
                let time=0
               if(this.showLrc){
                  this.showLrc=false;
                  time=this.$refs.player.audio.currentTime
                  console.log(time);
               } 
               else{
                   this.showLrc=true;
                   this.$refs.player.audio.currentTime=time;
               }
            }
        },
        components: {
            Aplayer
        }
    }
</script>
<style scoped>
     ul{
         list-style: none;
         position: absolute;
         padding: 0;
         margin: 0;
     }
     ul li{
         cursor: pointer;
     }
     .songInfo li{
        color: rgb(224, 228, 224);
        font-weight: bold;
     }
     .songInfo li:hover{
         color: white;
     }
     .songInfo{
         left: 110px;
         top: 20px;
     }
    .controll{
        left: 640px;
        top: 15px;
    }
    .controll li{
        display: inline-block;
        padding: 0 20px;
        width: 20px;
        height: 20px;
        line-height: 20px;
    }
    .controll svg{
        width: 20px;
        height: 20px;
    }
    .ss {
        background-color: rgb(33,33,36);
        /* w1024px */
        width: 100%;
        margin: 0;
    }
   
    .ss /deep/ .aplayer-bar-wrap .aplayer-bar {
    position: relative;
    height: 2px;
    /* width: 40%; */
    }
    .ss /deep/ .aplayer-music{ 
        width: 10%;
    }
    .aplayer /deep/ .aplayer-body .aplayer-info .aplayer-music .aplayer-title{
          display: none;
    }
    .aplayer /deep/ .aplayer-body .aplayer-info .aplayer-music .aplayer-author{
         display: none;
    }
   
    .ss /deep/ .aplayer-pic .aplayer-play{
      position: absolute;
      left: 765px;
      top: 0px;
      width: 25px;
      height: 25px;
    }
    .ss /deep/ .aplayer-pic .aplayer-pause{
      position: absolute;
      left: 765px;
      top: 0px;
      width: 25px;
      height: 25px;
      border: 2px solid #fff;
      bottom: 50%;
      right: 50%;
      margin: 0 -15px -15px 0;
    }
    .ss /deep/ .aplayer-pic .aplayer-pause .aplayer-icon-pause {
    position: absolute;
    top: 5px;
    left: 5px;
    height: 15px;
    width: 15px;
    }
    .ss /deep/ .aplayer-controller .aplayer-time .aplayer-volume-wrap+.aplayer-icon {
        display: none;
    }
    .ss /deep/ .aplayer-controller .aplayer-time .aplayer-icon{
        display: none;
    }
    .ss /deep/ .aplayer-controller{
        width: 40%;
    }
    .ss /deep/ .aplayer-controller button{
        width: 20px;
        height: 20px;
    }
    .ss /deep/ .aplayer-lrc{
        background-color: rgb(33,33,36);
        border: none;
        position: absolute;
        top:60px;
        left: 200px;
        height: 20px;
        border: none;
        width: 80%;
    }
     .ss /deep/ .aplayer-lrc p{
         color: rgb(15, 221, 170);
         font-size: 15px;
         font-weight: bold;
         /* height: 16; */
         line-height: 16px;
         /* margin-top: 2px; */
         /* height: 25px; */
     }
    .ss /deep/ .aplayer-controller{
         position: absolute;
         left: 500px;
         top: 40px;
     }
    .ss /deep/ .aplayer-ptime{
        position: absolute;
        left: -625px;
    }
     .ss /deep/ .aplayer-dtime{
        position: absolute;
        display: inline-block;
        right: -10px;
        background-color: rgb(33,33,36);
     }
      .ss /deep/ .aplayer-pic{
          width: 50px;
          height: 50px;
          margin-top: 10px;
          margin-left: 10px;
          border-radius: 5px;
      }
      .zzb{
          width: 50px;
          height: 50px;
          border-radius: 5px;
          background-color: rgb(43,70,84);
          position: absolute;
          left: 10px;
          top: 10px;
          text-align: center;
          opacity: 0;
          cursor: pointer;  
          /* display: none; */
      }
      .zzb1 svg{
          width: 25px;
          height: 25px;
          margin-top:10px;
      }
      .zzb1{
          width: 50px;
          height: 50px;
          border-radius: 5px;
          background-color: rgb(43,70,84);
          position: absolute;
          left: 10px;
          top: 10px;
          text-align: center;
          opacity: 0.6;
          cursor: pointer;
          display: none;
      }
      .zzb:hover ~.zzb1{
          display: block;
      }
</style>