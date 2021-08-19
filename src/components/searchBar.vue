<template>
    <div>
        <span class="title">热搜榜</span>
        <ul>
            <li v-for="(song,index) in getHotSongs" :key="song.score">
                <div class="index">
                    <span :style="index<=2 && oneToThree">
                      {{index+1}}
                    </span>
                </div>
                <div class="content">
                    <div>
                       <span class="songName">{{song.searchWord}}</span>
                       <span>
                           <img :src="song.iconUrl" alt="" v-if="song.iconType==1" class="hot">
                           <img :src="song.iconUrl" alt="" v-if="song.iconType==5" class="up">
                       </span>
                       <span class="count">{{song.score}}</span>
                    </div>
                    <div class="outsongContent">
                       <span class="songContent">{{song.content}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name:'searchBar',
    data(){
        return {
            oneToThree:{
                color: '#ff3a3a',
            }
        }
    },
    computed:{
        ...mapGetters('searchSongsModule',['getHotSongs']),
    }
}
</script>

<style scoped>
   .songContent{
       font-size: 13px;
   }
   ul{
       list-style: none;
       padding: 0;
   }
   li{
       height: 60px;
       line-height: 60px;
       overflow: hidden;
       cursor: pointer;
   }
   li:hover{
       background-color: #333333;
   }
   
   .index{
       float: left;
       padding-left: 10px;
        width: 10%;
   }
   .index span{
       display: inline-block;
       height: 40px;
       /* width: 10%; */
   }
   .content{
       float: right;
       margin-right: 50px;
       width: 70%;
       height: 100%;
       /* height: 50%; */
   }
   .content div{
       height: 20px;
       text-align: left;
       /* overflow: hidden; */
   }
   .content span {
       padding: 0 5px;
   }
   .songName{
       color: #fffdfd;
   }
   .count{
       font-size: 10px;
   }
   .hot{
       width: 23px;
       height: 12px;
   }
   .up{
      height: 11px;
      width: 11px;
   }
</style>