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
                        <el-image v-if="getPlaylistDetail.creator.avatarDetail" fit='cover'
                            :src='getPlaylistDetail.creator.avatarDetail.identityIconUrl'
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
                <div class="description" v-if="!loading">
                    <span class="tags jj">简介:</span>
                    <span @click="shouDes=!shouDes" :class="{showContent:shouDes,desContent:true,closeContent:!shouDes}"
                        class="desContent">{{getPlaylistDetail.description}}</span>
                </div>
            </div>
        </div>
        <div class="body clearfloat">
            <el-input size="mini" v-model="songName" v-if="!loading" placeholder="搜索歌单音乐"  suffix-icon="el-icon-search"></el-input>
            <div>
                <el-tabs v-model="activeName" class="tabs" v-if="!loading">
                    <el-tab-pane label="歌曲列表" name="first">
                        <el-table @row-dblclick='playsong' :cell-style='handleCell' v-loading='loading' element-loading-text="数据加载中..."
                            element-loading-spinner="el-icon-loading" element-loading-background="rgb(43, 43, 43)"
                            :show-overflow-tooltip="true" empty-text="抱歉什么也没搜到..." :data="getTracks(songName)" style="width: 100%"
                            :default-sort="{prop: 'date', order: 'descending'}">
                            <el-table-column type="index" :index='handleIndex' label="" sortable width="50">
                            </el-table-column>
                            <el-table-column prop="name" label="音乐标题" sortable>
                                <template slot-scope="scope">
                                    <span class="Icon">
                                        <i>
                                            <svg t="1630142660276" class="icon" viewBox="0 0 1170 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="1197" width="200" height="200">
                                                <path
                                                    d="M1066.676944 101.025891A351.539301 351.539301 0 0 0 584.680751 90.428552a351.539301 351.539301 0 0 0-481.996194 10.597339 344.230792 344.230792 0 0 0 0 490.035554l403.795143 400.140888a109.627641 109.627641 0 0 0 156.402101 0l403.795143-399.775463a344.230792 344.230792 0 0 0 0-490.400979z m-52.255842 438.510563L610.625959 939.677342a36.542547 36.542547 0 0 1-51.890417 0L154.574973 539.536454a271.876549 271.876549 0 0 1 0-386.985572A277.357931 277.357931 0 0 1 534.982887 146.338649L584.680751 189.093429 634.013189 146.338649a277.357931 277.357931 0 0 1 380.407913 8.03936 271.876549 271.876549 0 0 1 0 385.158445z"
                                                    fill="#bfbfbf" p-id="1198"></path>
                                                <path
                                                    d="M338.018559 182.881196A155.305824 155.305824 0 0 0 182.712735 338.18702a18.271273 18.271273 0 0 0 36.542546 0A118.763277 118.763277 0 0 1 338.018559 219.423743a18.271273 18.271273 0 0 0 0-36.542547z"
                                                    fill="#bfbfbf" p-id="1199"></path>
                                            </svg>
                                        </i>
                                    </span>
                                    <span class="Icon">
                                        <i>
                                            <svg t="1630142787352" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="2254" width="200" >
                                                <path
                                                    d="M333.917091 462.848c-10.938182 0-21.876364 4.189091-30.208 12.567273a42.682182 42.682182 0 0 0 0 60.509091l173.986909 173.847272c16.616727 16.756364 43.752727 16.756364 60.509091 0l173.940364-173.847272a42.682182 42.682182 0 0 0-30.254546-72.983273 42.635636 42.635636 0 0 0-30.347636 12.474182l-100.864 100.910545V42.775273a42.728727 42.728727 0 1 0-85.597091 0v533.550545l-100.864-101.003636a43.008 43.008 0 0 0-30.301091-12.474182z m629.108364 170.821818a37.748364 37.748364 0 0 0-37.701819 37.748364v213.178182a22.528 22.528 0 0 1-22.528 22.481454H121.157818a22.528 22.528 0 0 1-22.434909-22.481454v-213.271273a37.701818 37.701818 0 0 0-75.403636 0v243.153454c0 37.422545 30.440727 67.770182 67.723636 67.770182h842.007273c37.376 0 67.723636-30.440727 67.723636-67.770182v-243.153454a37.701818 37.701818 0 0 0-37.701818-37.608727z"
                                                    fill="#bfbfbf" p-id="2255"></path>
                                            </svg>
                                        </i>
                                    </span>
                                    <span v-html="scope.row.name"></span>
                                    <span class="from">{{scope.row.alia[0]}}</span>
                                    <span class="Icon1" v-if="scope.row.pop==100">
                                        <i>
                                            <svg t="1629613317968" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="14055" 
                                                height="200">
                                                <path
                                                    d="M411.82958 487.166405c-0.548492-0.042979-1.032516-0.303922-1.581008-0.303922l-90.782609 0c-19.49603 0-35.325553-15.678074-35.325553-34.914184s15.829524-34.892695 35.325553-34.892695c0.724501 0 1.339508-0.346901 2.020006-0.411369 0.703011 0.064468 1.315972 0.411369 2.041496 0.411369l135.110187 0c12.140505 0 21.954011-9.714246 21.954011-21.686928 0-11.969613-9.813506-21.684882-21.954011-21.684882L323.526441 373.683794c-0.725524 0-1.339508 0.325411-2.041496 0.38988-0.681522-0.064468-1.295506-0.38988-2.020006-0.38988-43.691081 0-79.235622 35.109636-79.235622 78.263481 0 40.030715 30.692023 72.776514 69.992097 77.352739 1.559519 0.346901 2.986007 0.933255 4.63353 0.933255l93.834108 0c19.47454 0 35.325553 15.656585 35.325553 34.892695 0 19.234063-15.851013 34.892695-35.325553 34.892695L262.185374 600.018659c-12.141528 0-21.956058 9.714246-21.956058 21.684882 0 11.992125 9.813506 21.686928 21.956058 21.686928l150.851707 0c1.557472 0 2.919493-0.564865 4.368494-0.867764 39.563064-4.358261 70.5191-37.190017 70.5191-77.395718C487.924675 523.033287 454.025611 488.834394 411.82958 487.166405z"
                                                    fill="#d81e06" p-id="14056"></path>
                                                <path
                                                    d="M773.813914 615.112426c7.397481-10.317996 11.782348-22.796192 11.782348-36.291554L785.596262 436.777785c0-35.304064-29.616528-63.907519-66.172095-63.907519L588.419484 372.870266c-36.534078 0-66.172095 28.603455-66.172095 63.907519l0 142.042063c0 35.282574 29.639041 63.907519 66.172095 63.907519l131.004683 0c6.144954 0 11.976776-1.069355 17.620309-2.582825l13.56904 13.301957c4.259 4.206812 9.858532 6.310729 15.456017 6.310729 5.64251 0 11.30651-2.146896 15.587-6.4192 8.540514-8.500605 8.497535-22.228257-0.130983-30.66337L773.813914 615.112426zM741.686193 578.819848c0 1.394766-0.574075 2.617617-0.86367 3.936659l-24.019043-23.555485c-8.563026-8.414647-22.50455-8.370645-31.045063 0.12996-8.53949 8.500605-8.496511 22.228257 0.132006 30.66337l9.54847 9.361205L588.419484 599.355557c-12.272511 0-22.262026-9.215896-22.262026-20.535709L566.157457 436.777785c0-11.319813 9.989515-20.535709 22.262026-20.535709l131.004683 0c12.272511 0 22.262026 9.215896 22.262026 20.535709L741.686193 578.819848z"
                                                    fill="#d81e06" p-id="14057"></path>
                                                <path
                                                    d="M865.968777 252.511038 158.029176 252.511038c-52.202942 0-94.237291 42.34748-94.237291 94.585215l0 329.806471c0 52.115961 42.190915 94.585215 94.237291 94.585215l707.940624 0c52.204989 0 94.238314-42.34748 94.238314-94.585215L960.208115 347.096253C960.208115 294.981315 918.015154 252.511038 865.968777 252.511038zM913.028583 676.902724c0 26.139334-21.110807 47.405683-47.058782 47.405683L158.029176 724.308407c-25.947975 0-47.057759-21.266349-47.057759-47.405683L110.971417 347.096253c0-26.139334 21.10876-47.405683 47.057759-47.405683l707.940624 0c25.947975 0 47.058782 21.266349 47.058782 47.405683L913.028583 676.902724z"
                                                    fill="#d81e06" p-id="14058"></path>
                                            </svg>
                                        </i>
                                    </span>
                                    <span class="Icon1" v-if="scope.row.mv">
                                        <i>
                                            <svg t="1629613454631" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="16318"
                                                height="200">
                                                <path
                                                    d="M878.028283 244.363636H145.842424c-54.044444 0-97.486869 43.830303-97.486868 97.874748v341.074747c0 53.915152 43.70101 97.874747 97.486868 97.874748h732.315152c54.044444 0 97.486869-43.830303 97.486868-97.874748V342.238384c-0.129293-53.915152-43.70101-97.874747-97.616161-97.874748z m48.743434 438.949495c0 27.022222-21.850505 49.00202-48.614141 49.002021H145.842424c-26.892929 0-48.614141-21.979798-48.614141-49.002021V342.238384c0-27.022222 21.850505-49.00202 48.614141-49.00202h732.315152c26.892929 0 48.614141 21.979798 48.614141 49.00202v341.074747z"
                                                    p-id="16319" fill="#d81e06"></path>
                                                <path
                                                    d="M437.656566 376.888889h47.191919V642.585859h-47.191919V463.90303l-79.256566 104.468687-79.256566-104.468687V642.585859H232.080808V376.888889h47.191919l79.256566 106.795959 79.127273-106.795959zM658.230303 576.258586l84.29899-198.59394h52.622222l-118.044444 265.69697h-38.141414l-118.044445-265.69697h52.880808l84.428283 198.59394z"
                                                    p-id="16320" fill="#d81e06"></path>
                                            </svg>
                                        </i>
                                    </span>
                                    <span class="Icon1" v-if="scope.row.fee==1">
                                        <i>
                                            <svg t="1630146035004" class="icon" viewBox="0 0 1927 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="10714" width="200"
                                                height="200">
                                                <path
                                                    d="M361.411765 0a361.411765 361.411765 0 0 0-361.411765 361.411765v301.17647a361.411765 361.411765 0 0 0 361.411765 361.411765h1566.117647V361.411765a361.411765 361.411765 0 0 0-361.411765-361.411765H361.411765z m0 60.235294h1204.705882a301.176471 301.176471 0 0 1 300.875294 288.105412L1867.294118 361.411765v602.352941H361.411765a301.176471 301.176471 0 0 1-300.875294-288.105412L60.235294 662.588235V361.411765a301.176471 301.176471 0 0 1 288.105412-300.875294L361.411765 60.235294z"
                                                    fill="#FF5B3A" p-id="10715"></path>
                                                <path
                                                    d="M1566.117647 0H361.411765a361.411765 361.411765 0 0 0-361.411765 361.411765v301.17647a361.411765 361.411765 0 0 0 361.411765 361.411765h1566.117647V361.411765a361.411765 361.411765 0 0 0-361.411765-361.411765z"
                                                    fill="#FF5B3A" fill-opacity=".1" p-id="10716"></path>
                                                <path
                                                    d="M872.990118 347.738353l43.730823-30.479059a824.681412 824.681412 0 0 0-64.933647-80.173176l-43.068235 27.166117c26.503529 30.479059 48.368941 58.307765 64.271059 83.486118z m-9.276236 497.603765c31.804235 0 58.970353-48.368941 82.82353-144.444236l-49.694118-40.417882c-11.926588 75.535059-22.528 114.627765-33.129412 115.952941-17.889882-3.312941-33.129412-42.405647-46.381176-117.940706-9.276235-60.958118-15.902118-142.456471-18.552471-243.83247h125.229177V353.701647h-126.554353c-1.325176-36.442353-1.325176-74.872471-1.325177-115.952941h-60.958117c0 39.755294 0 78.848 1.325176 115.952941H533.082353v60.958118h204.739765c2.650353 84.811294 7.951059 155.708235 15.902117 214.016 9.276235 67.584 24.515765 122.578824 45.718589 164.321882 18.552471 34.454588 40.417882 52.344471 64.271058 52.344471zM476.099765 386.831059l43.068235-43.730824c-27.828706-33.129412-62.283294-65.596235-103.363765-98.063059l-43.730823 43.068236c43.730824 34.454588 78.848 67.584 104.026353 98.725647z m-54.332236 444.596706a834.680471 834.680471 0 0 0 117.940706-105.35153l-16.564706-66.258823c-16.564706 18.552471-32.466824 35.117176-47.706353 50.356706V437.187765H326.354824v60.295529h88.124235v245.157647c0 12.589176-5.963294 23.190588-16.564706 32.466824l23.853176 56.32z m139.14353-25.178353a1911.687529 1911.687529 0 0 0 184.862117-41.080471v-58.970353c-25.840941 7.288471-52.344471 13.914353-78.848 19.877647V563.079529h56.982589v-58.970353H548.321882v58.970353h56.982589v174.260706c-19.877647 3.312941-39.755294 5.963294-59.632942 8.613647l15.23953 60.29553z m940.212706 46.381176V509.409882h95.412706v-59.632941h-258.409412V345.088c88.786824-4.638118 170.285176-19.877647 243.83247-45.056l-31.804235-56.32c-80.173176 29.153882-170.947765 45.056-272.986353 47.706353v236.544c-5.300706 116.615529-37.767529 207.390118-97.40047 273.648941l45.056 47.043765c70.896941-80.173176 108.664471-186.849882 113.302588-320.692706v-18.552471h100.713412v343.220706h62.283294z m-422.068706-100.713412v-44.393411h131.855059V292.080941H1016.771765v459.836235h62.283294z m70.234353-104.026352h-70.234353V351.713882h70.234353v296.176942z"
                                                    fill="#FF5B3A" p-id="10717"></path>
                                            </svg>
                                        </i>
                                    </span>
                                    <span class="Icon1" v-if="scope.row.fee==1">
                                        <i>
                                            <svg t="1630150361895" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14949" width="200" height="200"><path d="M827.9 243H194.8c-41.4 0-75.8 31.2-75.8 70.7v395.6c0 39.5 34.5 70.7 75.8 70.7H828c42.3 0 75.8-32.1 75.8-70.7V313.7c0-39.5-34.5-70.7-75.9-70.7zM446.7 404.8L339.6 642c-3.6 7.6-10.7 13-18.7 14.1h-22.3c-9.8 0-18.7-9.7-20.5-21.7l-34.8-237.2c-2.7-16.2 7.1-30.3 20.5-30.3h5.4c9.8 0 18.7 9.7 20.5 21.7l16.9 123.5c2.7 23.8 29.4 29.2 39.2 7.6L409.1 380c3.6-7.6 10.7-13 18.7-13 16.2-0.1 26.9 20.5 18.9 37.8z m126-6.5l-57.6 237.2c-2.5 11.9-15 20.6-28.8 20.6h-7.5c-18.8 0-32.5-15.2-28.8-31.4l57.6-237.2c2.5-11.9 15-20.6 28.8-20.6h7.5c18.8 0 32.6 15.2 28.8 31.4zM773 481.7c-4.3 13-9.4 23.8-16.2 32.5-6 7.6-12.8 14.1-20.5 18.4-6.8 4.3-17.1 7.6-29.9 9.7-6.8 1.1-20.5 2.2-41 2.2h-14.5c-9.4 0-18 8.7-19.7 20.6l-11.1 69.3c-1.7 11.9-10.3 20.6-21.4 21.7h-5.1c-12.8 0-22.2-15.2-19.7-31.4l39.3-237.2c1.7-11.9 10.3-20.6 19.7-20.6H709c17.1 0 29.9 2.2 39.3 7.6 9.4 5.4 18 14.1 23.1 24.9 6 10.8 8.6 23.8 8.6 40.1-0.1 14.1-2.7 28.2-7 42.2z" p-id="14950" fill="#d81e06"></path><path d="M655.9 490.9l0.2-1.1h-0.2zM726 411.5c-3.9-2.1-12.6-3.2-26.8-3.2h-15.7c-8.7 0-16.5 8.6-18.1 20.4l-9.3 61.2h12.4c22.8 0 37.8-1.1 45.6-5.4 7.9-3.2 13.4-9.7 18.1-18.2 3.9-8.6 6.3-17.2 6.3-27.9 0-7.5-0.8-12.9-3.1-17.2-2.4-4.4-5.5-7.6-9.4-9.7z" p-id="14951" fill="#d81e06"></path></svg>
                                        </i>
                                    </span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="ar" :class="{songers:true}" label="歌手" sortable width='300'>
                                <template slot-scope='scope'>
                                    <span class="songersName" v-for="(a,index) in scope.row.ar"
                                        :key="a.id+index">{{a.name}}<span
                                            v-if="scope.row.ar.length!=1 && index!=scope.row.ar.length-1">/</span></span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="al.name" sortable label="专辑" width="300">
                                <template slot-scope='scope'>
                                    <span v-html="scope.row.al.name" class="zhuanji">
                                        {{scope.row.al.name}}
                                    </span>
                                </template>
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
        mapGetters,
        mapMutations
    } from 'vuex'
    export default {
        name: 'playlist',
        data() {
            return {
                activeName: "first",
                songName: '',
                index: 1,
                loading: true,
                shouDes: false,
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
            ...mapMutations('playerModule',['setIsPlay']),
            ...mapActions('playerModule',['getSong']),
            ...mapActions('findSongModule', ['GetPlaylistDetail']),
            async playsong(row){
               this.setIsPlay(true);
               await this.getSong({id:row.id});
            },
            handleCell({
                columnIndex
            }) {
                if (columnIndex == 1) {
                    return 'color:rgb(235, 231, 231)'
                }
            },
            handleIndex(index) {
                return index < 10 ? '0' + (index + 1) : index + 1;
            },
            // handleArName(row) {
            //     if (row.ar.length > 1) {
            //         let name = '';
            //         row.ar.forEach(item => name = name + item.name + '/')
            //         return name;
            //     } else {
            //         return row.ar[0].name;
            //     }
            // },
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
                if (!vm.loading == true) {
                    vm.loading = true;
                }
                await vm.GetPlaylistDetail(from.query.id);
                vm.loading = false;
            })
        },
    }
</script>
<style scoped>
.playlist /deep/ .el-input__inner{
    background-color: rgb(77, 76, 76);
      border-radius: 15px;
    border: none;

    color: white;
}
    .el-input{
        width: 15%;
        position: fixed;
        right: 50px;
        z-index: 300;
        border: none;
    }
    .from {
        color: rgb(124, 124, 124);
    }

    .Icon svg {
        width: 15px;
        height: 15px;
        vertical-align: middle;
        cursor: pointer;
    }
    
    .Icon1 svg {
        width: 25px;
        height: 25px;
        vertical-align: middle;
        cursor: pointer;
    }
    .head span {
        display: inline-block;
        margin-left: 10px;
    }

    .songers {
        cursor: pointer;
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

    .tags {
        color: rgb(223, 219, 219);
        font-size: 13px;
    }

    .createTime {
        color: rgb(133, 131, 131);
        font-size: 13px;
    }

    .count {
        font-size: 13px;
        color: rgb(168, 167, 167);
    }

    .user {
        margin-right: 0 !important;
        cursor: pointer;
    }

    .jj {
        vertical-align: top;
    }

    .userName {
        color: rgb(133, 185, 230);
        font-size: 13px;
        cursor: pointer;
    }

    .tagsContent {
        color: rgb(133, 185, 230);
        font-size: 13px;
        cursor: pointer;
    }

    .zhuanji:hover {
        color: wheat;
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

    .action:hover {
        background-color: rgb(52, 52, 52);
    }

    .playAll {
        color: white;
    }

    .userName:hover,
    .tagsContent:hover {
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

    .songersName:hover {
        color: wheat;
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

    .desContent {
        vertical-align: top;
        font-size: 13px;
        width: 90%;
        color: rgb(179, 175, 175);
    }

    .closeContent {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .showContent {
        overflow: '';
        text-overflow: '';
        white-space: '';
    }

    .dengji {
        margin: 0 !important;
    }

    .body {
        margin-top: 30px;
        position: relative;
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
    .playlist /deep/ .el-table__empty-block{
        background-color: rgb(43,43,43);
    }
    .playlist /deep/ .el-table__row {
        background-color: rgb(48, 48, 48);
    }

    .playlist /deep/ .el-table__row>td:nth-child(3) {
        cursor: pointer;
    }

    .playlist /deep/ .el-table__row>td:nth-child(4) {
        cursor: pointer;
    }

    .playlist /deep/ .el-table .cell {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .playlist /deep/ .el-table .cell span {
        margin: 0 5px;
    }

    .description {
        margin-right: 0px;
        width: 100%;
        cursor: pointer;
    }

    .playlist /deep/ .el-table {
        font-size: 13px;
    }

    .playlist /deep/ .el-tabs__nav-wrap {
         
        width: 206px;
    }
    .playlist /deep/ .tabs{
 z-index: 100px;
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
        /* height: 200px; */
    }
</style>