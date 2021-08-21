<template>
        <el-col :span="24" class="main">
            <div class="nav"></div>
            <el-col :span="18" class="autoSroll">
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="block in getBlocks.banners" :key="block.bannerId" class="autoSroll_item">
                        <img :src="block.pic" alt="">
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-col>
</template>
<script>
import {mapActions,mapGetters} from "vuex"
    export default {
        name: 'findSong',
        computed:{
            ...mapGetters('findSongModule',['getBlocks'])
        },
        methods:{
            ...mapActions('findSongModule',['getHomePage']),
        },
         beforeRouteEnter(to,from,next){
          next(async (vm)=>{
              await vm.getHomePage()
          })
        }
    }
</script>
<style scoped>
  img{
      width: 545px;
      height: 200px;
  }
  .autoSroll{
      margin: 0px 150px;
      /* padding: 0 100px; */
  }
  .main{
     text-align: center;
  }
  .main /deep/ .el-carousel__button{
      width: 7px;
      height: 7px;
      padding: 0;
      border-radius: 50%;
      background-color: rgb(141, 137, 137);
  }
  .main /deep/ .el-carousel__button:hover{
      background-color: red;
  }
</style>