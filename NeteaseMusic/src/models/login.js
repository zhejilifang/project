import { login } from '@/services/index'
import { setToken, getToken } from '@/utils/index'
import { routerRedux } from 'dva/router';

export default {

  namespace: 'login',

  state: {
    status: '',
    account: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        console.log('pathname...', pathname);
        if (pathname.indexOf('/login') === -1) {
          if (!getToken()) {
            dispatch(routerRedux.replace({
              pathname: `/login?redirect=${encodeURIComponent(pathname)}`,
            }))
          }
        }
      });
    },
  },

  effects: {
    * login({ payload }, { call, put }) {
      let res = yield call(login, payload.phone, payload.passwd);
      console.log('login...', res);
      if (res.data && res.data.code === 200) {
        setToken(res.data.account.id);
        yield put({
          type: 'updateState',
          payload: { status: 'ok', account: res.data.account }
        })

      } else {
        yield put({
          type: 'updateState',
          payload: { status: 'fail' }
        })
      }
    }
  },

  reducers: {
    updateState(state, { payload }) {
      return {...state, ...payload }
    }
  },

};