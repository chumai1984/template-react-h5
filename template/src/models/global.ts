import {GetUserInfoByToken } from '@/services/api';

const Model = {
  namespace: 'global',
  state: {
    userInfo: {},
  },
  effects: {
    // 获取用户信息
    * getUser({payload}, {call, put}){
      const res = yield call(GetUserInfoByToken, payload);
      if (res && res.result == 0) {
        yield put({
          type: 'updateState',
          payload: {
            userInfo: res.data,
          }
        });
      }
      return res;
    },
  },
  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload,
      }
    }
  }
}

export default Model
