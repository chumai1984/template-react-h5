import {GetAppList} from "./service";
import {cloneDeep} from 'lodash'

const Model = {
  namespace: 'login',
  state: {
    a: 'aaa',
    b: 'bbb',
  },
  effects: {
    * fetch({payload}, {call, put}) {
      const res = yield call(GetAppList, payload);
      try{
        let list = cloneDeep(res.data.List)

        if (res.result == 0) {
          yield put({
            type: 'updateState',
            payload: {
              list,
              listTotal: res.data.TotalCount,
            }
          });
        }
      }catch(err){
        console.log(err)
      }
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
