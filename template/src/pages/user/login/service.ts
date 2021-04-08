import request from '@/utils/request';

// 获取我的应用列表
export async function GetAppList(params) {
  return request('/inbiz/api/MyAppManager/GetAppList', {
    params,
  });
}
