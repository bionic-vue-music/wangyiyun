<template>
    <el-container>
        <el-header style="padding:0px;">
            <indexPageHead class="indexPageHead"></indexPageHead>
        </el-header>
        <el-container class="second-container">
            <el-aside style="width:250px;">
               <indexPageMenu class="indexPageMenu"></indexPageMenu>
            </el-aside>
            <el-main style="padding:0px">
                <router-view name="asd"></router-view>
            </el-main>
        </el-container>
        <el-container>
            <el-footer style="padding:0px">
              <indexPageVideo></indexPageVideo>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
import indexPageHead from "../components/indexPageHead.vue"
import indexPageMenu from "../components/indexPageMenu.vue"
import indexPageVideo from "../components/indexPageVideo.vue"

export default {
    name:"index",
    components:{
        indexPageHead,
        indexPageMenu,
        indexPageVideo,
    },
}
</script>

<style scoped>
.indexPageMenu{
    border-top: 2px solid rgb(157, 26, 26);
    /* border-right: 1px solid red; */
}
.el-main{
    background-color: #2b2b2b;
    border-top: 2px solid rgb(157, 26, 26);
    border-left: 1px solid rgb(90, 87, 87);  
    z-index: 10;
}
.el-footer{
    background-color: #1f1f22;
    position: sticky;
    top: 0px;
}
.second-container{
    height: 850px;
    background-color: #2b2b2b;
}
.el-header{
    z-index: 20;
}
</style>