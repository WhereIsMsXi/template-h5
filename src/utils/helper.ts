import { wechatConfig } from '@/constants/wechatConfig';
import { to } from '@where_is_mr_li/utils';

export function getCode() {
  const env: any = import.meta.env.VITE_NODE_ENV;
  const map: any = {
    development: 'redirectUriDev',
    preannounce: 'redirectUriPre',
    production: 'redirectUriPro',
  };
  const redirectUri = encodeURIComponent(wechatConfig[map[env]]);
  // eslint-disable-next-line max-len
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wechatConfig.appid}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
}

// 微信权限验证
export async function configTest(wx: any) {
  // const reqForm = {
  //   url: window.location.href.split('#')[0],
  // };
  // const result = await Sys.getSignature(reqForm);

  const [err, res] = await to(
    new Promise((resolve, reject) => {
      resolve('success');
    }),
  );
  let { noncestr, timestamp } = res as any;
  const { signature, appid } = res as any;
  noncestr += '';
  timestamp += '';

  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appid, // 必填，公众号的唯一标识
    timestamp, // 必填，生成签名的时间戳
    nonceStr: noncestr, // 必填，生成签名的随机串
    signature, // 必填，签名
    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
    openTagList: [], // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
  });

  wx.ready(() => {
    const title = ``;
    const desc = ``;
    const link = ``;
    const imgUrl = ``;

    // 分享给朋友
    wx.updateAppMessageShareData({
      title, // 分享标题
      desc, // 分享描述
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success() {
        // 设置成功
        console.log('设置分享给朋友成功');
      },
    });

    // 分享到朋友圈
    wx.updateTimelineShareData({
      title, // 分享标题
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success() {
        // 设置成功
        console.log('设置分享到朋友圈成功');
      },
    });
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中
  });

  wx.error((res: any) => {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名
    console.log('res', res);
  });
}
