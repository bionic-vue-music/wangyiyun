//组织一些默认行为
export default{
    install(){
        window.onmousedown=function(e){
            e.preventDefault();
        }
    }
}