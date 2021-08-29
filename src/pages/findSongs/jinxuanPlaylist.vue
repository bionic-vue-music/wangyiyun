<template>
    <div class="jinpinPlaylist" v-loading='loading' element-loading-text="数据加载中..."
        element-loading-spinner="el-icon-loading" element-loading-background="rgba(43, 43, 43, 0.8)">
        <div class="head clearfloat">
            <div class="left fl">
                <span>精品歌单</span>
            </div>
            <div class="right fr">
                
                <el-popover popper-class='myProve' v-model="visible" placement="bottom" width="400" trigger="click">
                    
                   <div class="tagHead">
                        <span @click="showAll">全部歌单></span>
                   </div>
                   <ul>
                     <li v-for="tag in getPlaylistHighqualityTags" :key="tag.id" class="tagLi" @click="changeTag(tag.name)">
                        <span>{{tag.name}}</span>
                     </li>
                   </ul>
                    <el-button slot="reference" type='info' class="categoryBtn" size='mini'>
                        <span v-if="$route.query.tag">{{tagName? tagName+'>': '全部歌单>'}}</span></el-button>
                </el-popover>
            </div>
        </div>
        <div class="body" v-if="getHighqualityPlaylist">
            <ul>
                <li v-for="p in getHighqualityPlaylist" :key="p.id" class="clearfloat playlistLi" @click="toPlaylist(p.id)">
                    <div class="fl image">
                        <el-image fit='cover' :src="p.coverImgUrl" style="width: 120px; height: 120px"></el-image>
                    </div>
                    <div class="fl imageSpan">
                        <div>
                            <span class="pName">{{p.name}}</span>
                        </div>
                        <div>
                            <span class="pnickname">by-{{p.creator.nickname}}
                            </span>
                            <el-image v-if="p.creator.avatarDetail" class="dengji" fit='cover' :src="p.creator.avatarDetail.identityIconUrl"
                                style="width: 15px; height: 15px"></el-image>
                        </div>
                        <div class="pinfo">
                            <span>{{p.tag}}</span>
                            <span>{{p.copywriter}}</span>
                        </div>
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
                        <span>{{p.playCount>=10000?(p.playCount/10000).toFixed(2)+"万":p.playCount}}</span>
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
                </li>
            </ul>
        </div>
          <el-pagination :background="true" layout="prev, pager, next" :total="getPage1.total"
            :page-size='getPage1.psize' :current-page='getPage1.pno' @current-change="handleCurrentChange">
        </el-pagination>
        <span :style="{color:'white'}" v-if="!getHighqualityPlaylist[0]">抱歉什么也没找到....</span>
    </div>
</template>
<script>
    import {
        mapActions,
        mapGetters,
        mapMutations
    } from "vuex"
    export default {
        name: 'jinxuanPlaylist',
        data() {
            return {
                loading: true,
                visible:false,
                tagName:'',
                limit:20
            }
        },
        computed: {
            ...mapGetters('findSongModule', ['getPage1','getHighqualityPlaylist','getPlaylistHighqualityTags'])
        },
        methods: {
            ...mapActions('findSongModule', ['GetHighqualityPlaylist','GetPlaylistHighqualityTags']),
            ...mapMutations('findSongModule',['setPage1']),
            toPlaylist(id) {
                // console.log(id);
                this.$router.push({
                    name: 'playlist',
                    query: {
                        id
                    }
                });
            },
            async showAll(){
                this.visible = false;
                this.tagName="";
                this.loading = true;
                await this.GetHighqualityPlaylist({});
                this.setPage1({
                    ...this.getPage1,
                    pno: 1
                });
                this.loading = false;
            },
            async changeTag(tag){
              
                if (this.tagName == tag) return;
                this.visible = false;
                this.loading = true;
                await this.GetHighqualityPlaylist({
                    cat: tag
                })
                 this.setPage1({
                    ...this.getPage1,
                    pno: 1
                });
                this.tagName = tag;
                this.loading = false;
            },
            async handleCurrentChange(val){
                console.log(val);
                this.setPage1({
                    ...this.getPage1,
                    pno: val
                });
                this.loading = true;
                await this.GetHighqualityPlaylist({
                    cat:this.tagName,
                    updateTime: this.getHighqualityPlaylist[this.getHighqualityPlaylist.length-1].updateTime
                });
                this.loading = false;
            }
        },
        beforeRouteEnter(from, to, next) {
            next(async (vm) => {
                //获取所有精品歌单列表
                vm.tagName=from.query.tag;
                await vm.GetHighqualityPlaylist({cat:from.query.tag,});
                await vm.GetPlaylistHighqualityTags()
                vm.loading = false;
            })
        }
    }
</script>
<style scoped>
    .jinpinPlaylist /deep/ .el-pager li {
        background-color: rgb(43, 43, 43);
    }

    .jinpinPlaylist /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: rgb(236, 65, 65);
    }

    .jinpinPlaylist /deep/ .btn-prev,
    .jinpinPlaylist /deep/ .btn-next {
        background-color: rgb(56, 56, 56);
    }

    .el-pagination {
        text-align: center;
    }
    .tagHead{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgb(150, 147, 147);
    }
    .myProve{
        text-align: left;
    }
    .tagLi{
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 10px 0px;
        padding-right: 10px;
        cursor: pointer;
    }
    .tagLi span,.tagHead span{
        color: rgb(238, 232, 232);
    }
    .tagLi span:hover,.tagHead span:hover{
        color: rgb(223, 51, 45);
    }
    .pinfo span {
        padding: 0 5px;
        font-size: 10px;
    }

    .pinfo span:nth-child(2) {
        color: rgb(167, 161, 161);
    }

    .pinfo span:first-child {
        display: inline-block;
        /* height: 5px; */
        border: 1px solid rgb(223, 51, 45);
        color: rgb(223, 51, 45);
    }

    .pinfo {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgb(167, 161, 161);
    }

    .dengji {
        vertical-align: bottom;
    }

    .pnickname {
        color: rgb(165, 159, 159);
        font-size: 10px;
    }

    .pnickname:hover {
        color: rgb(192, 189, 189);
        cursor: pointer;
    }

    .pName {
        color: rgb(219, 215, 215);
        font-size: 15px;
        cursor: pointer;
    }

    .image {
        cursor: pointer;
        margin-top: 15px;
    }

    .pName:hover {
        color: white;
    }

    .el-image {
        border-radius: 5px;
    }

    .imageSpan {
        margin-top: 15px;
        margin-left: 15px;
    }

    .imageSpan {
        width: 185px;
        height: 120px;
    }

    .imageSpan div {
        margin-top: 8px;
    }

    .right {
        margin-right: 80px;
    }
   .categoryBtn{
        border-radius: 15px;
        border: 1px solid rgb(148, 146, 146);
        color: rgb(219, 215, 215);
        font-size: 12px;
        height: 30px;
        line-height: 15px;
        width: 90px;
        text-align: center;
        background-color: rgb(43, 43, 43);
         overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .categoryBtn span{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .categoryBtn:hover{
        background-color: rgb(52, 52, 52);
    }
    .fl {
        float: left;
    }

    .fr {
        float: right;

    }

    .clearfloat::after {
        content: '';
        display: block;
        clear: both;
    }

    .jinpinPlaylist {
        width: 90%;
        margin: 0 auto;
        text-align: left;
    }

    .left {
        color: rgb(219, 215, 215);
        font-size: 18px;
        font-weight: bold;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .playlistLi {
        width: 32%;
        height: 150px;
        margin-top: 20px;
        margin-right: 10px;
        display: inline-block;
        border-radius: 5px;
        position: relative;
    }

    .body>ul {
        text-align: left;
    }

    .palyCount svg {
        width: 20px;
        height: 20px;
        vertical-align: bottom;
    }

    .palyCount span {
        color: white;
        font-size: 6px;
        text-shadow: 2px 2px 2px rgb(129, 125, 125);
    }

    .palyCount {
        position: absolute;
        left: 45px;
        top: 15px;
    }

    .playIcon {
        position: absolute;
        bottom: 15px;
        left: 85px;
        opacity: 0;
        transition: all 0.8s;
    }

    .playlistLi:hover .playIcon {
        opacity: 1;
        transition: all 0.8s;
    }

    .playIcon svg {
        width: 30px;
        height: 30px;
    }
</style>