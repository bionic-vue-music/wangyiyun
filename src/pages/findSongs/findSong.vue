<template>
    <el-col :span="24" class="main">
        <el-col :span="16">
            <el-menu  class="el-menu-demo" mode="horizontal"
                background-color="#2b2b2b" text-color="#fff" active-text-color="#ffd04b" router :default-active="$route.path">
                <el-menu-item index="/findSong1">个性推荐</el-menu-item>
                <el-menu-item index="-1">专属定制</el-menu-item>
                <el-menu-item index="4">歌单</el-menu-item>
                <el-menu-item index="5">排行榜</el-menu-item>
                <el-menu-item index="6">歌手</el-menu-item>
                <el-menu-item index="7">最新音乐</el-menu-item>
            </el-menu>
        </el-col>
        <router-view name="findSong1"></router-view>
    </el-col>
</template>
<script>
    export default {
        name: 'findSong',
    }
</script>
<style scoped>
    .el-menu--horizontal{
        border:none;
    }
    .el-menu--horizontal .el-menu-item{
        font-size: 18px;
        color: #b317179c;
    }
</style>