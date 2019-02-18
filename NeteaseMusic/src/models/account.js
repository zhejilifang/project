import { getUserDetail } from "@/services/index";
import { getToken } from '@/utils/index'

export default {

  namespace: 'account',

  state: {
    userDetail: {},
    profile: {}
  },

  effects: {
    * getUserDetail({ payload }, { call, put }) {
      let uid = getToken()
      let res = yield call(getUserDetail, uid)
      console.log('userDetail...', res);
      yield put({
        type: 'updateState',
        payload: {
          userDetail: res.data,
          profile: res.data.profile
        }
      })
    }
  },

  reducers: {
    updateState(state, { payload }) {
      console.log('...payload', payload)
      return {...state, ...payload };
    },
  }

};