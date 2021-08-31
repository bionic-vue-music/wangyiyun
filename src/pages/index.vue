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
                <transition name="main_bar" appear mode="out-in">
                    <keep-alive>
                        <router-view name="findSong"></router-view>
                        <router-view name="playlist"></router-view>
                        <router-view name="album"></router-view>
                        <router-view name="userCreate"></router-view>
                        <router-view name="userSave"></router-view>
                    </keep-alive>
                </transition>
            </el-main>
        </el-container>
        <el-container class="vedio">
            <el-footer style="padding:0px">
                <keep-alive>
                    <indexPageVideo></indexPageVideo>
                </keep-alive>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import indexPageHead from "../components/indexPageHead.vue"
    import indexPageMenu from "../components/indexPageMenu.vue"
    import indexPageVideo from "../components/indexPageVideo.vue"
    import {
        mapGetters
    } from "vuex"
    export default {
        name: "index",
        components: {
            indexPageHead,
            indexPageMenu,
            indexPageVideo,
        },
        computed: {
            ...mapGetters('playerModule', ['getDrawer'])
        },
        beforeRouteEnter(from, to, next) {
            next(vm => {
                vm.$router.push({
                    name: 'findSong1'
                })
            })
        }
    }
</script>

<style scoped>
  .main_bar-leave-active {
        animation: tabBar 0.8s;
    }

    .main_bar-enter-active {
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
    .indexPageMenu {
        border-top: 2px solid rgb(157, 26, 26);
        /* border-right: 1px solid red; */
    }

    .el-main {
        background-color: #2b2b2b;
        border-top: 2px solid rgb(157, 26, 26);
        border-left: 1px solid rgb(90, 87, 87);
        z-index: 10;
    }

    .el-footer {
        background-color: #1f1f22;
        position: sticky;
        top: 60px;
        /* width: 100%; */
        height: 100px !important;
    }

    .vedio {
        height: 100px;
        background-color: rgb(33, 33, 36);
        z-index: 300;
    }

    .second-container {
        height: 704px;
        background-color: #2b2b2b;
        z-index: 50;
    }

    .el-header {
        z-index: 100;
    }
</style>