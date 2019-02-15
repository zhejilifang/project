import { getBanner, getPersonalized } from "@/services/index";

export default {

  namespace: 'discover',

  state: {
    banner: [],
    personalized: []
  },

  effects: {
    * getBanner({ payload }, { call, put }) {
      let res = yield call(getBanner)
      console.log('banner...', res);
      yield put({
        type: 'updateState',
        payload: {
          banner: res.data.banners
        }
      })
    },
    * getPersonalized({ payload }, { call, put }) {
      let res = yield call(getPersonalized)
      console.log('personalized', res);
      yield put({
        type: 'updateState',
        payload: {
          personalized: res.data.result
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