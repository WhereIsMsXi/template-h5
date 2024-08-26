import { wechatConfig } from '@/constants/wechatConfig';

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
