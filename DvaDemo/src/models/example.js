import {query} from '../services/example'

export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({type:"fetchRemote", payload:{}})
    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put }) {
      const {data} = yield call(query)
      console.log("\n---fetchRemote--\n",data)
      if(data && data.success){
        yield put({type:"fetch", payload:data})
      }else{
        throw Error("fail")
      }
    },
  },

  reducers: {
    fetch(state, action) {
      console.log("\n--fetch--\n", {...state, ...action.payload})
      return { ...state, ...action.payload };
    },
  },

}
