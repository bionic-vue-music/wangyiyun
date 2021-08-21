<template>
    <el-menu
      background-color="#2b2b2b"
      text-color="#fff"
      router   
      :default-active="$route.name.slice(0,-1)"
      active-text-color="#ffd04b">
       <el-menu-item-group>
          <!-- <el-menu-item  class="none" index='222'><span class="boldSpan"></span></el-menu-item> -->
          <el-menu-item index="findSong"><span class="boldSpan">发现音乐</span></el-menu-item>
          <el-menu-item index="222"><span class="boldSpan">播客</span></el-menu-item>
          <el-menu-item index="1-3"><span class="boldSpan">视频</span></el-menu-item>
          <el-menu-item index="1-4"><span class="boldSpan">朋友</span></el-menu-item>
          <el-menu-item index="1-5"><span class="boldSpan">直播</span></el-menu-item>
          <el-menu-item index="1-6"><span class="boldSpan">私人FM</span></el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title"><span>我的音乐</span></template>
          <el-menu-item index="2-1"><i><svg t="1629077290616" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5076" width="200" height="200"><path d="M145.066667 755.771733c0-73.544533 58.026667-127.428267 131.413333-127.428266 29.013333 0 53.947733 5.994667 77.841067 23.099733l0.6656-417.322667c0-25.655467 20.48-46.178133 44.373333-46.178133l438.613333-51.310933h3.413334c23.893333-1.706667 46.08 18.816 46.08 44.471466v494.2848c0 35.9168-13.653333 68.411733-39.253334 92.356267-23.893333 23.944533-58.026667 37.627733-92.16 37.627733-71.68 0-131.413333-58.154667-131.413333-131.694933 0-71.8336 58.026667-131.694933 131.413333-131.694933 29.013333 0 56.32 8.379733 78.506667 25.4848V345.2928l-426.666667 47.889067v362.589866C406.186667 829.316267 348.16 887.466667 276.48 887.466667S145.066667 829.312 145.066667 755.771733z m131.413333-76.983466c-43.101867 0-78.506667 35.490133-78.506667 78.698666s35.4048 78.698667 78.506667 78.698667c43.101867 0 78.506667-35.490133 78.506667-78.698667-1.536-44.7488-35.4048-78.698667-78.506667-78.698666z m479.573333-82.094934c-43.101867 0-78.506667 35.4816-78.506666 78.677334 0 43.191467 35.4048 78.673067 78.506666 78.673066 43.101867 0 78.506667-35.4816 78.506667-78.677333 0-43.191467-35.4048-78.677333-78.506667-78.677333z m76.8-298.6112V187.925333L405.333333 238.545067V345.6l427.52-47.517867z" p-id="5077" fill="#cdcdcd"></path></svg></i><span>本地音乐</span></el-menu-item>
          <el-menu-item index="2-2"><i><svg t="1629077415122" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10723" width="200" height="200"><path d="M483.2 822.4v-256c0-12.8 12.8-25.6 25.6-25.6s25.6 12.8 25.6 25.6v256l51.2-38.4c12.8-6.4 25.6-6.4 38.4 6.4 12.8 19.2 6.4 32-6.4 38.4l-96 70.4c0 6.4-6.4 6.4-12.8 6.4s-12.8 0-12.8-6.4l-96-70.4c-12.8-6.4-12.8-25.6-6.4-38.4 6.4-12.8 25.6-12.8 38.4-6.4l51.2 38.4z m-204.8-38.4h-19.2c-115.2 0-204.8-102.4-204.8-224 0-128 96-230.4 211.2-224 38.4-128 147.2-217.6 268.8-217.6 134.4 0 249.6 102.4 281.6 249.6 89.6 19.2 153.6 102.4 153.6 204.8 0 115.2-83.2 211.2-185.6 211.2-32 0-96 0-166.4-57.6-12.8-12.8-12.8-32 0-38.4 12.8-12.8 25.6-12.8 38.4 0 51.2 51.2 96 44.8 121.6 44.8h6.4c76.8 0 134.4-70.4 134.4-160 0-83.2-57.6-153.6-128-160-12.8 0-19.2-12.8-25.6-19.2-19.2-128-115.2-224-230.4-224-102.4 0-198.4 83.2-224 198.4 0 12.8-12.8 19.2-32 19.2h-25.6c-83.2 0-147.2 76.8-147.2 172.8 0 96 64 172.8 147.2 172.8h12.8c25.6 0 57.6 0 102.4-44.8 12.8-12.8 25.6-12.8 38.4 0 12.8 12.8 12.8 25.6 0 38.4-51.2 51.2-96 57.6-128 57.6z" fill="#dbdbdb" p-id="10724"></path></svg></i><span>下载管理</span></el-menu-item>
          <el-menu-item index="2-3"><i><svg t="1629077169487" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2423" width="200" height="200"><path d="M512 29.9008A482.0992 482.0992 0 1 0 994.0992 512 482.7136 482.7136 0 0 0 512 29.9008z m0 915.2512A433.152 433.152 0 1 1 945.152 512 433.5616 433.5616 0 0 1 512 945.152z" fill="#dbdbdb" p-id="2424"></path><path d="M755.0976 487.5264H536.4736V279.1424a24.4736 24.4736 0 0 0-49.0496 0V512a24.4736 24.4736 0 0 0 24.576 24.4736h243.0976a24.4736 24.4736 0 1 0 0-49.0496z" fill="#dbdbdb" p-id="2425"></path></svg></i><span>最近播放</span></el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2">
           <template slot="title"><span>创建的歌单</span></template>
             <!-- <template slot="title">选项4</template> -->
           <el-menu-item-group> 
              <el-menu-item index="1-4-1">
                <i>
                  <svg t="1629076812512" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1315" width="200" height="200"><path d="M698.7 124.5c-71.7 0-138.5 28.8-187.1 79.1-48.5-50.1-115.2-78.8-186.8-78.8-143.7 0-260.6 116.9-260.6 260.6 0 66.6 25.1 129.8 70.6 178.3 0.8 1 1.6 1.9 2.5 2.8l2.6 2.6 1.3 1.3L471 886.1c10.4 10.4 25.1 16.5 40.6 16.5 15.6 0 30.2-6 41.2-17 10.4-9.8 270.3-256.3 329.7-315.6l1-1-0.5 0.4c0.8-0.7 1.5-1.5 2.2-2.3 47.8-49 74-113.5 74-182 0.1-143.7-116.8-260.6-260.5-260.6z m156.9 415.6c-0.3 0.3-0.6 0.7-0.9 1h-0.1c-58.8 58.7-330.1 316-330.1 316-3.6 3.6-8.3 5.3-12.9 5.3-4.7 0-9.4-1.8-12.9-5.3L169.5 542l-1.3-1.3-2.6-2.6h0.1c-38-39.6-61.4-93.4-61.4-152.7 0-121.8 98.8-220.6 220.6-220.6 78.7 0 147.8 41.3 186.8 103.4 39-62.2 108.2-103.6 187-103.6 121.8 0 220.6 98.8 220.6 220.6 0 60.3-24.3 115.1-63.7 154.9zM325.2 215.6c-95.6 0-173.5 77.8-173.5 173.5 0 11.1 9 20 20 20 11.1 0 20-9 20-20 0-73.6 59.8-133.4 133.4-133.4 11.1 0 20-9 20-20 0.1-11.2-8.8-20.1-19.9-20.1z" p-id="1316" fill="#cdcdcd"></path></svg>
                </i>
                <span>我喜欢的音乐</span>
                <el-button size="mini" type="info" round>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart myHeart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                  </i>
                </el-button>
              </el-menu-item>
           </el-menu-item-group>
        </el-submenu>
    </el-menu>
  
</template>

<script>
export default {
    name:"indexPageMenu",
}
</script>
<style scoped>
  .el-menu-item{
      height: 40px;
      line-height: 40px;
  }
  .el-menu{
    border: none;
  }
  .el-menu-item svg{
    width: 20px;
    height:20px;
    vertical-align: -3px;
    padding-right: 5px;
  }
  .ww{
    margin-top: 20px;
  }
  .el-menu-item-group__title{
   padding: 0px;
  }
  .myHeart{
    /* margin-left: 10px; */
    margin-top: -5px;
    vertical-align: top;
    transition: all 0.5s;
  }
  /* 我喜欢的音乐按钮 */
  .el-button{
    background-color: #2b2b2b;
     margin-left: 30px;
     width: 55px;
     height: 25px;
     text-align: center;
  }
  .el-button--info:hover{
    background-color: #404040;
  }
  .el-button--info:hover .myHeart{
    color: rgb(236, 228, 228);
    transition: all 0.5s;
  }
  .boldSpan:hover{
    font-weight: bolder;
    font-size: 16px;
  }
  .none{
   width: 0px;
   height: 0px;
  }
</style>