import {GetUserInfoByToken} from '@/services/api'

const Model = {
  namespace: 'content',
  state: {
    cc: 'cccaaa',
    dd: 'cccbbb',
    userInfo: {}
  },
  effects: {
    * getUserInfo({payload, callback}, {call, put, select}){
      const res = yield call(GetUserInfoByToken, payload);
      if (res && res.result == 0) {
        yield put({
          type: 'updateState',
          payload: {
            userInfo: res.data,
          }
        });
      }
      return res.data
    }
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
