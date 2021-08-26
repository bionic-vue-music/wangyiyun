<template>
    <el-col :span="24" class="main">
        <el-row class="head">
            <el-col :span="16">
                <el-menu class="el-menu-demo" mode="horizontal" background-color="#2b2b2b" text-color="#fff"
                    active-text-color="#ffd04b" router :default-active="$route.path">
                    <el-menu-item index="/findSong1">个性推荐</el-menu-item>
                    <el-menu-item index="-1">专属定制</el-menu-item>
                    <el-menu-item index="/findSong3">歌单</el-menu-item>
                    <el-menu-item index="5">排行榜</el-menu-item>
                    <el-menu-item index="6">歌手</el-menu-item>
                    <el-menu-item index="7">最新音乐</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <el-row>
            <div>
                <transition name="findSong_animation" appear mode="out-in">
                   <keep-alive>
                    <router-view name="findSong1"></router-view>
                    <router-view name="findSong3"></router-view>
                    <router-view name="jinxuanPlaylist"></router-view>
                </keep-alive>
                </transition>
            </div>
        </el-row>
    </el-col>
</template>
<script>
    export default {
        name: 'findSong',
        beforeRouteEnter(from, to, next) {
            next(vm => {
                vm.$router.push({
                    name: 'findSong1'
                })
            })
        },
    }
</script>
<style scoped>
    .findSong_animation-leave-active {
        animation: tabBar 0.8s;
    }

    .findSong_animation-enter-active {
        animation: tabBar1 0.8s;
    }
    @keyframes tabBar {
        0% {
            opacity: 1;
            transform: translateX(0px);
        }

        100% {
            opacity: 0;
            transform-origin: center;
            transform: translateX(-100px);
        }
    }

    @keyframes tabBar1 {
        0% {
            opacity: 0;
            transform: translateX(100px);
        }

        100% {
            opacity: 1;
            transform-origin: center;
            transform: translateX(0px);
        }
    }

    .el-menu--horizontal {
        border: none;
    }

    .el-menu--horizontal .el-menu-item {
        font-size: 18px;
        color: #b317179c;
    }

    .head {
        margin-bottom: 20px;
    }
</style>