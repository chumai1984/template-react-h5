import { PUBLIC_PATH } from '@/utils/config';
import { createFromIconfontCN } from '@ant-design/icons';

export const WIcon = createFromIconfontCN({
  scriptUrl: `${PUBLIC_PATH}/ifont/iconfont.js`,
})

// 获取地址栏Hash参数
export function getHashString(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let hash = window.location.hash;
  let r = hash.substr(hash.indexOf(name)).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}

// 获取地址栏searchc参数
export function getSearchString(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let r = location.search.replace(/[?|/]/g, '').match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}
