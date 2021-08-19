//组织一些默认行为
export default{
    install(){
        //阻止拖拽
        window.ondragstart=function(e){
            e.preventDefault();
        };
        // 阻止图片保存
        window.oncontextmenu=function(e){
            e.preventDefault();
        }
    }
}