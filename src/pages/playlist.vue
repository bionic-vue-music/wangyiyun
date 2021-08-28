<template>
    <div class="playlist">
        <div class="head clearfloat" v-if="getPlaylistDetail" v-loading='loading' element-loading-text="数据加载中..."
            element-loading-spinner="el-icon-loading" element-loading-background="rgb(43, 43, 43)">
            <div class="TX fl">
                <el-image fit='cover' :src='getPlaylistDetail.coverImgUrl' style="width: 210px; height: 230px">
                </el-image>
            </div>
            <div class="info fl">
                <div>
                    <span class="gedan">歌单</span>
                    <span class="gedanName">{{getPlaylistDetail.name}}</span>
                </div>
                <div v-if="getPlaylistDetail.creator">
                    <span class="user">
                        <el-image fit='cover' class="usertx" :src='getPlaylistDetail.creator.avatarUrl'
                            style="width: 30px; height: 30px">
                        </el-image>
                    </span>
                    <span class="dengji">
                        <el-image v-if="getPlaylistDetail.creator.avatarDetail" fit='cover' :src='getPlaylistDetail.creator.avatarDetail.identityIconUrl'
                            style="width: 10px; height: 10px">
                        </el-image>
                    </span>
                    <span class="userName">{{getPlaylistDetail.creator.nickname}}</span>
                    <span class="createTime">{{Time}}创建</span>
                </div>
                <div class="btnSpan">
                    <span>
                        <span>
                            <i>
                                <svg t="1630049659756" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2890" width="200" height="200">
                                    <path
                                        d="M803.84 492.032 213.056 135.04C195.392 124.288 174.208 124.288 156.352 134.976 138.624 145.728 128 164.928 128 186.368l0 714.176c0 21.44 10.624 40.704 28.352 51.392C165.248 957.312 174.976 960 184.704 960c9.728 0 19.52-2.688 28.352-8.064l590.72-356.992c17.728-10.752 28.288-30.016 28.288-51.456C832.128 521.984 821.568 502.72 803.84 492.032zM189.568 891.712 187.136 193.792l578.624 349.696L189.568 891.712z"
                                        p-id="2891" fill="#ffffff"></path>
                                </svg>
                            </i>
                        </span>
                        <span v-if="getPlaylistDetail" class="playAll">播放全部</span>
                        <span>
                            <svg t="1630049745027" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3751" width="200" height="200">
                                <path d="M248.888889 497.777778l526.222222 0 0 28.444444-526.222222 0 0-28.444444Z"
                                    p-id="3752" fill="#ffffff"></path>
                                <path d="M497.777778 248.888889l28.444444 0 0 526.222222-28.444444 0 0-526.222222Z"
                                    p-id="3753" fill="#ffffff"></path>
                            </svg>
                        </span>
                    </span>
                    <span class="action"><i><svg t="1630050447052" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7641" width="200" height="200">
                                <path
                                    d="M181.333333 258.133333c0-42.666667 34.133333-76.8 76.8-76.8h234.666667c25.6 0 46.933333 12.8 64 34.133334l59.733333 93.866666h153.6c38.4 0 72.533333 29.866667 72.533334 68.266667v196.266667c0 17.066667-12.8 34.133333-34.133334 34.133333-17.066667 0-29.866667-12.8-29.866666-25.6v-196.266667c0-4.266667-4.266667-8.533333-8.533334-8.533333H245.333333v392.533333c0 4.266667 4.266667 8.533333 8.533334 8.533334h260.266666c17.066667 0 34.133333 12.8 34.133334 34.133333 0 17.066667-12.8 29.866667-25.6 29.866667h-260.266667c-38.4 0-72.533333-29.866667-72.533333-68.266667V258.133333z m546.133334 349.866667c17.066667 0 29.866667 12.8 29.866666 25.6v55.466667h55.466667c17.066667 0 34.133333 12.8 34.133333 34.133333 0 17.066667-12.8 29.866667-25.6 29.866667H761.6v51.2c0 17.066667-12.8 34.133333-34.133333 34.133333-17.066667 0-29.866667-12.8-29.866667-25.6v-55.466667h-51.2c-17.066667 0-34.133333-12.8-34.133333-34.133333 0-17.066667 12.8-29.866667 25.6-29.866667h55.466666v-51.2c0-21.333333 12.8-34.133333 34.133334-34.133333z m-238.933334-362.666667h-234.666666c-4.266667 0-8.533333 4.266667-8.533334 8.533334v55.466666h290.133334l-38.4-59.733333c0-4.266667-4.266667-4.266667-8.533334-4.266667z"
                                    fill="#dbdbdb" p-id="7642"></path>
                            </svg></i>
                        收藏({{getPlaylistDetail.subscribedCount>10000?parseInt(getPlaylistDetail.subscribedCount/10000)+"万":getPlaylistDetail.subscribedCount}})</span>
                    <span class="action"><i><svg t="1630051207927" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="8917" width="200" height="200">
                                <path
                                    d="M509.454629 0a43.300571 43.300571 0 0 1 0 86.601143 422.985143 422.985143 0 1 0 422.985142 422.838857 43.300571 43.300571 0 1 1 86.454858 0A509.44 509.44 0 1 1 509.454629 0z m262.217142 216.649143a42.569143 42.569143 0 0 1 60.489143-59.830857l74.605715 74.605714a57.490286 57.490286 0 0 1 0 81.408l-74.605715 74.605714a42.569143 42.569143 0 0 1-60.123428-60.196571l12.653714-12.580572h-54.857143c-149.430857 0-200.118857 63.561143-200.118857 255.853715a42.422857 42.422857 0 1 1-85.065143 0.146285V570.514286c0-237.714286 86.820571-340.918857 285.110857-340.918857h54.857143l-12.946286-12.946286z"
                                    fill="#dbdbdb" p-id="8918"></path>
                            </svg></i>
                        分享({{getPlaylistDetail.shareCount}})</span>
                    <span class="action"><i><svg t="1630051261981" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="12500" width="200" height="200">
                                <path
                                    d="M828.402 396.977v373.921c0 15.84-12.922 28.761-28.765 28.761H224.363c-15.873 0-28.766-12.921-28.766-28.761V396.977h-57.526v373.921c0 47.582 38.708 86.26 86.292 86.26h575.273c47.584 0 86.292-38.678 86.292-86.26V396.977h-57.526z"
                                    p-id="12501" fill="#dbdbdb"></path>
                                <path
                                    d="M704.923 503.573l-40.675-40.646-123.477 123.454V166.84H483.23v419.54L359.752 462.927l-40.675 40.646 192.93 192.915z"
                                    p-id="12502" fill="#dbdbdb"></path>
                            </svg></i>下载全部</span>
                </div>
                <div v-if="getPlaylistDetail.tags">
                    <span class="tags">标签:</span>
                    <span class="tagsContent">{{getPlaylistDetail.tags.join('/')}}</span>
                </div>
                <div>
                    <span class="tags">歌曲:</span>
                    <span class="count">{{getPlaylistDetail.trackCount}}</span>
                    <span class="tags">播放:</span>
                    <span class="count">{{parseInt(getPlaylistDetail.playCount/10000)+'万'}}</span>
                </div>
                <div class="description"  v-if="!loading">
                    <span class="tags jj">简介:</span>
                    <span @click="shouDes=true" :style="shouDes && ss" class="desContent">{{getPlaylistDetail.description}}</span>
                </div>
            </div>
        </div>
        <div class="body clearfloat">
            <div>
                <el-tabs v-model="activeName" class="tabs" v-if="!loading">
                    <el-tab-pane label="歌曲列表" name="first">
                        <el-table :cell-style='handleCell' v-loading='loading' element-loading-text="数据加载中..."
                            element-loading-spinner="el-icon-loading" element-loading-background="rgb(43, 43, 43)"
                            :show-overflow-tooltip="true" empty-text="数据加载中..." :data="getTracks" style="width: 100%"
                            :default-sort="{prop: 'date', order: 'descending'}">
                            <el-table-column type="index" :index='handleIndex' label="" sortable width="100">
                            </el-table-column>
                            <el-table-column prop="name" label="音乐标题" sortable>
                            </el-table-column>
                            <el-table-column :formatter='handleArName' prop="ar" label="歌手" sortable>
                            </el-table-column>
                            <el-table-column prop="al.name" sortable label="专辑">
                            </el-table-column>
                            <el-table-column prop="dt" :formatter='handleTime' sortable label="时长" width="100">
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="评论" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="收藏者" name="third">角色管理</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex'
    export default {
        name: 'playlist',
        data() {
            return {
                activeName: "first",
                songName: '',
                index: 1,
                loading: true,
                shouDes:false,
                ss:{
                    "overflow": "",
                    "text-overflow": "",
                    "white-space": ""
                },
            }
        },
        computed: {
            ...mapGetters('findSongModule', ['getPlaylistDetail', 'getTracks']),
            Time() {
                let time = new Date(this.getPlaylistDetail.createTime);
                time = `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}`
                return time;
            }
        },
        methods: {
            ...mapActions('findSongModule', ['GetPlaylistDetail']),
            handleCell({columnIndex}){
                if(columnIndex==1){
                    return 'color:rgb(235, 231, 231)'
                }
            },
            handleIndex(index) {
                return index < 10 ? '0' + (index + 1) : index + 1;
            },
            handleArName(row) {
                if (row.ar.length > 1) {
                    let name = '';
                    row.ar.forEach(item => name = name + item.name + '/')
                    return name;
                } else {
                    return row.ar[0].name
                }
            },
            handleTime(row) {
                let s = parseInt(row.dt / 1000);
                let m = parseInt(s / 60);
                let q = s % 60
                if (q < 10) {
                    q = '0' + q;
                }
                if (m < 10) {
                    m = '0' + m;
                }
                return `${m}:${q}`
            }
        },
        beforeRouteEnter(from, to, next) {
            next(async (vm) => {
                if(!vm.loading == true){
                     vm.loading = true;
                }
                await vm.GetPlaylistDetail(from.query.id);
                vm.loading = false;
            })
        },
    }
</script>
<style scoped>
    .head span {
        display: inline-block;
        margin: 0 10px;
    }
    
    .info>div {
        margin-top: 10px;
    }

    .info .el-image {
        vertical-align: text-bottom;
    }
    .usertx {
        border-radius: 50%;
    }
    .tags{
        color: rgb(223, 219, 219);
        font-size: 13px;
    }
    .createTime {
        color: rgb(133, 131, 131);
        font-size: 13px;
    }
    .count{
        font-size: 13px;
        color: rgb(168, 167, 167);
    }
    .user {
        margin-right: 0 !important;
        cursor: pointer;
    }
    .jj{
        vertical-align: top;
    }
    .userName {
        color: rgb(133, 185, 230);
        font-size: 13px;
        cursor: pointer;
    }
    .tagsContent{
        color: rgb(133, 185, 230);
        font-size: 13px;
        cursor: pointer;
    }
    .action {
        color: rgb(204, 201, 201);
        vertical-align: top;
        padding: 0px 5px;
        height: 32px;
        cursor: pointer;
        line-height: 32px;
        font-size: 13px;
    }
    .action:hover{
        background-color: rgb(52, 52, 52);
    }
    .playAll {
        color: white;
    }

    .userName:hover, .tagsContent:hover{
        color: rgb(139, 199, 216);
    }

    .btnSpan>span {
        text-align: center;
        height: 30px;
        border: 1px solid rgb(158, 157, 157);
        border-radius: 15px;
    }

    .btnSpan>span:nth-child(1) {
        cursor: pointer;
        text-align: center;
        border: 1px solid rgb(236, 65, 65);
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        background-color: rgb(236, 65, 65);
    }

    .btnSpan>span:nth-child(1):hover {
        background-color: rgb(219, 52, 52);
    }

    .btnSpan>span svg {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }

    .gedanName {
        color: rgb(219, 215, 215);
        font-size: 30px;
        font-weight: bold;
    }

    .gedan {
        text-align: center;
        width: 40px;
        color: rgb(236, 65, 65);
        border: 1px solid rgb(236, 65, 65);
        vertical-align: text-top;
    }
    .desContent{
        vertical-align: top;
        font-size: 13px;
        width: 90%;
        /* overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; */
        color: rgb(179, 175, 175);
    }
    .dengji {
        margin: 0 !important;
    }

    .body {
        margin-top: 30px;
    }

    .TX .el-image {
        border-radius: 5px;
    }

    .playlist /deep/ .el-table--enable-row-hover .el-table__body tr:hover>td {
        background-color: rgb(55, 55, 55);
    }

    .playlist /deep/ .el-table thead {
        color: rgb(167, 166, 164);
        font-size: 13px;
    }

    .playlist /deep/ .el-table th,
    .el-table tr {
        background-color: rgb(48, 48, 48);
    }

    .playlist /deep/ .el-table td,
    .el-table th.is-leaf {
        border: none;
    }

    .playlist /deep/ .el-table__row--striped {
        background-color: rgb(48, 48, 48);
    }

    .playlist /deep/ .el-table__row {
        background-color: rgb(48, 48, 48);
    }

    .playlist /deep/ .el-table .cell {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .description {
        margin-right: 0px;
        width: 100%;
       
    }

    .playlist /deep/ .el-table {
        font-size: 13px;
    }

    .playlist /deep/ .el-tabs__nav-wrap {
        width: 206px;
    }

    .playlist /deep/ .el-tabs__active-bar {
        background-color: rgb(236, 65, 65);
    }

    .playlist /deep/ .el-tabs__item {
        color: rgb(235, 231, 231);
    }

    .search {
        width: 20%;
    }

    .fr {
        float: right;
    }

    .playlist {
        margin-left: 30px;
        margin-top: 30px;
    }

    .fl {
        float: left;
    }

    .clearfloat::after {
        content: "";
        display: block;
        clear: both;
    }

    .TX {
        width: 20%;
    }

    .info {
        margin-left: 15px;
        width: 78%;
        height: 200px;
    }
</style>