const Model = {
  namespace: 'my',
  state: {
   flag:true,
  },
  effects: {
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
