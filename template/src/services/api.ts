import request from '@/utils/request';

// 根据token获取用户信息
export async function GetUserInfoByToken(params) {
  return request('/api/services/OrgUser/GetUserInfoByToken',{
    params
  });
}

// WebCore
export async function WebCore(params) {
  return request('/WebCore',{
    method: 'POST',
    requestType: 'form',
    data: params
  });
}
