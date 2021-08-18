import Vue from "vue";

//生成二维码key
export const  createKey=()=>{
//   let timestamp=new Date().getTime();
  return Vue.$http({
      url:'/login/qr/key',
      method:'get',
  })
}

// 调用此接口传入上一个接口生成的key可生成二维码图片的base64和二维码信息
export async function  createBase64(){
     let res=await createKey();
     let {unikey}=res.data.data
    //  说明: 二维码登录涉及到3个接口,调用务必带上时间戳,防止缓存
     let timestamp=new Date().getTime();
     return Vue.$http({
         url:'/login/qr/create',
         method:'get',
         params:{
             key:unikey,
             timestamp
         }
     })
}


// 说明: 轮询此接口可获取二维码扫码状态,800为二维码过期,801为等待扫码,802为待确认,803为授权登录成功(803状态码下会返回cookies)

// 必选参数: key,由第一个接口生成
export async function qrImgStatus(){
    let res=await createKey();
    let {unikey}=res.data.data
      //  说明: 二维码登录涉及到3个接口,调用务必带上时间戳,防止缓存 同一个二维码要保证是同一个key
    let timestamp=new Date().getTime();
    // console.log(res);
    // console.log(unikey);
    return Vue.$http({
        url:'/login/qr/check',
        method:'get',
        params:{
            key:unikey,
            timestamp
        }
    })
}

//查询登陆状态
export  function loginStatus(){
    return Vue.$http({
        url:'/login/status',
        method:'get'
    })
}

//刷新登陆状态
export function loginRefreshStatus(){
    return Vue.$http({
        url:'/login/refresh',
        method:'get'
    })
}