import { getBanner } from "../services/index";

export default {

  namespace: 'discover',

  state: {
    banner: []
  },

  effects: {
    * getBanner({ payload }, { call, put }) {
      let res = yield call(getBanner)
      console.log(res);
      yield put({
        type: 'updateState',
        payload: {
          banner: res.data.banners
        }
      })
    }
  },

  reducers: {
    updateState(state, { payload }) {
      return {...state, ...payload };
    },
  },

};