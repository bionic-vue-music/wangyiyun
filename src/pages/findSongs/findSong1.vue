<template>
    <el-col :span="24" class="main" v-loading="findSongLoading" element-loading-text="数据加载中..."
        element-loading-spinner="el-icon-loading" element-loading-background="rgba(43, 43, 43, 0.8)">
        <el-col :span="18" class="autoSroll">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="block in getBlocks.banners" :key="block.bannerId" class="autoSroll_item">
                    <img :src="block.pic" alt="">
                </el-carousel-item>
            </el-carousel>
            <div class="recSongsTitle" v-if="!findSongLoading">
                <span>歌单推荐></span>
            </div>
            <ul class="recSongs">
                <li v-for="(recSong,index) in getRecmBlocks" :key='recSong.id'
                    :style="(index==4||index==9) && Th5_Th10">
                    <el-image :src="recSong.picUrl" fit='cover' style="width: 184px; height: 200px" :alt="recSong.name">
                    </el-image>
                    <div class="recSongsName">
                        <span>{{recSong.name}}</span>
                    </div>
                    <div class="playIcon">
                        <i>
                            <svg t="1629539292198" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4216" width="200" height="200">
                                <path
                                    d="M512 1024C229.235 1024 0 794.765 0 512S229.235 0 512 0s512 229.235 512 512-229.235 512-512 512z m-85.248-257.498l307.034-230.284c17.024-12.762 17.024-33.434 0-46.196L426.752 259.738c-17.024-12.762-30.797-5.888-30.797 15.347v476.07c0 21.287 13.799 28.109 30.797 15.36z"
                                    fill="#dd3924" p-id="4217"></path>
                            </svg>
                        </i>
                    </div>
                    <div class="palyCount">
                        <span>
                            <svg t="1629552160874" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1257" width="200" height="200">
                                <path
                                    d="M803.84 492.032 213.056 135.04C195.392 124.288 174.208 124.288 156.352 134.976 138.624 145.728 128 164.928 128 186.368l0 714.176c0 21.44 10.624 40.704 28.352 51.392C165.248 957.312 174.976 960 184.704 960c9.728 0 19.52-2.688 28.352-8.064l590.72-356.992c17.728-10.752 28.288-30.016 28.288-51.456C832.128 521.984 821.568 502.72 803.84 492.032zM189.568 891.712 187.136 193.792l578.624 349.696L189.568 891.712z"
                                    p-id="1258" fill="#ffffff"></path>
                            </svg>
                        </span>
                        <span>{{recSong.playCount>=10000?(recSong.playCount/10000).toFixed(2)+"万":recSong.playCount}}</span>
                    </div>
                </li>
            </ul>
            <div>
                <div class="privateContentTitle" v-if="!findSongLoading">
                    <span>独家放送></span>
                </div>
                <ul class="privateContent">
                    <li v-for="(privateContent,index) in getPrivateContent" :key="privateContent.id" :style="index==2 && Th5_Th10">>
                        <el-image :src="privateContent.picUrl"
                            fit='fill' style="width: 305px; height: 170px">
                        </el-image>
                        <div class="privateContentName">
                            <span>{{privateContent.name}}</span>
                        </div>
                        <div class="platIcon1">
                            <i>
                                <svg t="1629557640417" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="8118" width="200" height="200">
                                    <path
                                        d="M634.3 441.2c-34.5-18.5-67.7-39.1-100.1-61.3l-48.5-33.3-6.1-4.1c-2.2-1.4-5-2.9-7.5-4.3-5.3-2.6-10.9-4.7-16.8-5.7-11.8-2.2-24.3-1.1-35.8 3.2-11.4 4.4-21.6 11.8-29.4 21.6-7.8 9.7-12.9 21.8-14.5 34.3-0.3 2.9-0.7 6.7-0.8 9l-0.3 7.3-0.6 14.7-1.1 29.3-3.7 117.3-1 29.3-0.1 3.8 0.1 5.2c0 3.5 0.3 6.9 1.1 10.4 0.5 3.5 1.3 6.9 2.5 10.3 1 3.4 2.2 6.7 3.9 9.9 12.1 25.9 38.6 44.2 68.1 46 14.7 0.9 29.9-2.5 42.7-9.5l13.3-7.3c4.3-2.4 8.6-4.7 12.8-7.2 17-9.7 33.6-20 50.2-30.3 16.5-10.5 32.7-21.6 48.5-33.3 7.9-5.8 15.6-12 23.5-18l5.8-4.6c1.7-1.3 4.6-3.8 6.8-5.7 2.4-1.9 4.6-4 6.5-6.4 2-2.4 4.2-4.4 5.8-7 14.5-19.7 17.4-44.5 12.2-65.2-5.2-21.4-19.8-38.6-37.5-48.4z m3.4 93.5c-1.4 1.3-3.3 2-4.8 3.1-1.5 1-3.2 1.9-5 2.5l-12.4 5c-9.1 3.8-18.3 7.4-27.3 11.4-18.1 7.8-35.7 16.3-53.1 25.3-17.3 9.2-34.5 18.5-51.3 28.3l-25 14.7c-4.2 2.7-8.7 4.2-13.6 4.4-9.7 0.8-20.8-4.7-26.4-13.8-0.8-1.1-1.4-2.3-1.9-3.5-0.7-1.2-1.1-2.5-1.4-3.8-0.5-1.3-0.8-2.7-0.9-4.1l-0.4-2.2-0.2-3.5-1-29.3-3.7-117.3-1.1-29.3-0.6-14.7-0.3-7.3c-0.1-2.6 0.1-3.7 0-5.7 0.5-13.9 9.3-27.3 22.7-33.8 6.6-3.3 14.2-4.8 21.7-4.3 3.8 0.3 7.5 1 11.3 2.2 1.9 0.8 3.5 1.3 5.7 2.3l6.6 3.2 53.1 25.4c35.4 17 69.8 35.4 103.1 56 15.9 10 26.5 27.5 26.6 45.4 0.6 17.9-7.9 34.5-20.4 43.4z"
                                        fill="#d81e06" p-id="8119"></path>
                                    <path
                                        d="M920.1 320.1c-24.5-53.3-60-100.9-102.8-139.4s-92.6-68.3-145.6-87.9C618.8 72.9 562.5 63.6 506.6 64l-41.9 2.3c-13.8 1.8-27.6 4.3-41.4 6.4-13.6 3.1-27.1 6.7-40.7 10-13.3 4.1-26.4 9.3-39.6 13.9-51.9 20.9-100 51.6-140.8 90.4-40.9 38.8-74.4 85.8-97.5 137.9-23.2 52-35.5 109.1-36.6 166.4-0.6 57.4 10 115 31.5 168.6 21.4 53.6 53.6 102.9 94 144.4 40.5 41.4 89.3 74.9 142.8 97.8 53.5 23 111.7 35.2 170.2 35.9 117 1.9 234.7-44.5 319.6-127.1 42.4-41.3 76.5-91.2 99.2-146.1 5-14 10.5-27.8 14.9-41.9 3.6-14.4 7.7-28.7 10.6-43.2 2.1-14.7 4.4-29.3 6.1-44l1.8-44.3c-0.8-59.2-14.3-118-38.7-171.3zM787.7 772.4c-36.2 37.4-79.8 67.9-127.9 88.8-48.1 20.8-100.4 32-153.2 32.9-52.8 0.6-105.7-9.1-154.9-28.8-49.2-19.6-94.6-49.1-132.8-86.3-38.1-37.2-69-82-90.1-131.2-21.2-49.2-32.4-102.6-33.2-156.5-0.8-53.8 8.7-107.9 28.1-158.6 19.4-50.7 48.9-97.8 86.6-137.7 37.8-39.8 83.9-72 134.7-93.6 13-4.7 25.8-9.9 38.9-14.2 13.4-3.3 26.6-7.4 40.2-10.2 13.7-1.9 27.3-4.2 41-5.9l41.4-1.9c55.3 0.6 110.2 13.1 159.9 35.9 49.8 22.9 94.1 56.1 130 96.1 35.8 40.1 63.3 86.7 81.3 136.1 18.2 49.4 26.6 101.7 25.9 153.8-1.2 104.4-43.3 206.5-115.9 281.3z"
                                        fill="#d81e06" p-id="8120"></path>
                                    <path
                                        d="M720.8 429.3c-2.2-3.4-5.2-6-7.9-9.1l-4.2-4.4-4.7-3.8-4.7-3.8c-1.7-1.4-3.2-2.5-4.5-3.4l-8.4-6-33.7-23.8c-22.6-15.6-45.5-30.7-68.8-45.1-23.4-14.3-46.8-28.4-70.6-42-5.9-3.5-11.9-6.8-17.9-10.1l-9-5-4.5-2.5c-1.7-0.9-2.6-1.5-4.9-2.7-16.2-8.9-35.3-13.2-53.9-12.2-37.4 2-71.4 25.1-87 58-1 2-2 4.1-2.9 6.1l-2.2 6.4c-0.7 2.2-1.4 4.3-2 6.5l-1.3 6.6-1.1 6.6-0.4 6.6-0.3 6.6 0.1 5.3 1.2 41.1 4.1 164.3 1 41.1 0.5 20.5 0.3 10.3c0 3.3 0.6 8 0.9 11.9 2 16.3 8.5 32.2 18.6 45 10.1 12.9 23.5 22.9 38.5 28.8 15 5.8 31.6 7.4 47.3 4.6 7.9-1.4 15.4-4 22.5-7.3 3.4-1.8 7.1-3.7 10.1-5.6l8.6-5.6 68.9-45c45.9-30 92.8-58.4 140.8-84.8 24.4-13.7 44.1-37.9 50.1-66.9 3.2-14.3 3.6-29.6 0.4-44.6-2.8-15.2-9-30.1-19-42.6z m5.4 84.9c-1.2 25.7-16.8 50.2-39.4 64.2-46.9 28.4-94.9 54.7-143.8 79.5L469.6 695l-9.1 4.7c-3 1.4-5.5 2.4-8.3 3.6-5.5 2-11.2 3.2-16.9 3.8-11.4 1.1-23-0.9-33.2-5.7-20.8-9.4-35-29.9-36.3-51.7 0-2.9-0.3-5.1-0.2-8.6l0.3-10.3 0.5-20.5 1-41.1 4.1-164.3 1.2-41.1c0.1-1.7 0.1-3.6 0.2-5l0.4-3.6 0.3-3.6 0.9-3.4 0.8-3.4 1.3-3.2 1.3-3.2 1.7-3c9-16.1 27.7-26.3 45.3-25.7 8.8 0 17.2 2.6 24.9 7.2l35 20.6c23.7 13.7 47.7 27 71.7 40.1 24.1 13 48.6 25.3 73.4 37.1l37.5 17.2 9.4 4.2 2.4 1 1.9 1 3.8 1.9 3.9 1.9 3.5 2.4c2.2 1.7 5 3 6.9 5.1 18 14.4 28.5 39.4 27 64.8z"
                                        fill="#d81e06" p-id="8121"></path>
                                </svg>
                            </i>
                        </div>
                    </li>
                </ul>
            </div>
        </el-col>
    </el-col>
</template>
<script>
    import {
        mapActions,
        mapGetters
    } from "vuex"
    export default {
        name: 'findSong1',
        data() {
            return {
                Th5_Th10: {
                    'padding': '0px'
                },
                findSongLoading: true, //发现音乐数据加载loading...
            }
        },
        computed: {
            ...mapGetters('findSongModule', ['getBlocks', 'getRecmBlocks', 'getPrivateContent']),
        },
        methods: {
            ...mapActions('findSongModule', ['getHomePage', 'getRecSongs', 'privateContent']),
        },
        beforeRouteEnter(to, from, next) {
            next(async (vm) => {
                //banners
                await vm.getHomePage();
                //推荐歌单
                await vm.getRecSongs();
                //独家放送
                await vm.privateContent();
                vm.findSongLoading = false;
            })
        }
    }
</script>
<style scoped>
    ul {
        list-style: none;
    }
    li {
        border-radius: 5px;
        display: inline-block;
    }
    img{
         border-radius: 5px;
    }
    .el-image{
         border-radius: 5px;
    }
    .main /deep/ .carousel__item{
         border-radius: 5px;
    }
    .main /deep/ .el-carousel__mask{
         border-radius: 5px;
    }
    .main /deep/ .el-carousel__item--card{
        border-radius: 5px;
    }
    .autoSroll img {
        width: 600px;
        height: 200px;
    }
    .autoSroll {
        margin: 0px 150px;
    }

    .main {
        text-align: center;
    }

    .main /deep/ .el-carousel__button {
        width: 7px;
        height: 7px;
        padding: 0;
        border-radius: 50%;
        background-color: rgb(141, 137, 137);
    }

    .main /deep/ .el-carousel__button:hover {
        background-color: red;
    }

    .recSongs {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: left;
    }

    .recSongs li {
        display: inline-block;
        /* padding: 20px 20px 0px 0px;  */
        margin-top: 30px;
        padding-right: 10px;
        position: relative;
        cursor: pointer;
        width: 184px;
        height: 200px;
    }

    .playIcon {
        position: absolute;
        bottom: 10px;
        right: 20px;
        opacity: 0;
        transition: all 0.8s;
    }

    .platIcon1 {
        position: absolute;
        top: 25px;
        left: 5px;
    }

    .platIcon1 svg {
        width: 35px;
        height: 35px;
    }

    .playIcon svg {
        width: 50px;
        height: 50px;
    }

    .recSongs li:hover .playIcon {
        opacity: 1;
        transition: all 0.8s;
    }

    .recSongsTitle,.privateContentTitle {
        color: rgb(223, 215, 215);
        text-align: left;
        font-size: 25px;
        font-weight: bold;
        margin-top: 40px;
        cursor: pointer;
    }
     .recSongsTitle :hover,.privateContentTitle :hover{
         color: white;
     }
    .recSongsName {
        color: rgb(177, 171, 171);

        /* 文本的溢出显示省略号 */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .privateContentName{
        color: rgb(238, 231, 231);
    }
    .recSongsName span {
        font-size: 10px;
    }

    .recSongsName :hover {
        color: white;
    }

    .palyCount svg {
        width: 20px;
        height: 20px;
        vertical-align: bottom;
    }

    .palyCount span {
        color: white;
        font-size: 10px;
    }

    .palyCount {
        position: absolute;
        right: 15px;
        top: 0;
    }

    .privateContent {
        margin: 0;
        padding: 0;
        text-align: left;
        margin-top: 0px;
    }

    .privateContent li {
        position: relative;
        padding-right: 20px;
        width: 305px;
        height: 170px;
        cursor: pointer;
    }
</style>