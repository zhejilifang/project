import { searchHot, searchResult, searchSuggest } from '@/services/index'

export default {
  // 模块的命名空间
  namespace: 'search',

  state: {
    searchHot: [],
    searchResult: [],
    songCount: 0,
    searchSuggest: []
  },

  // 异步操作，用generator函数去控制时序
  effects: {
    // 获取热门搜索
    * searchHot(action, { call, put }) {
      let data = yield call(searchHot);
      console.log('data...', data);
      yield put({
        type: 'updateState',
        payload: {
          searchHot: data.data.result.hots
        }
      })
    },
    // 获取搜索建议
    * searchSuggest({ payload }, { call, put }) {
      let data = yield call(searchSuggest, payload)
      console.log('suggest...', data, payload);
      // 拼接一下搜索建议
      let suggest = [];

      if (Object.keys(data.data.result).length) {
        let result = data.data.result;
        result.order.forEach((item, index) => {
          // 类型拼接到数据里
          result[item].forEach(value => {
            value.type = item
          })
          suggest = [...suggest, ...result[item]]
        })
      }
      yield put({
        type: 'updateState',
        payload: {
          searchSuggest: suggest
        }
      })
    },
    // 回车搜索
    * searchResult({ payload }, { call, put }) {
      let data = yield call(searchResult, payload)
      console.log('result...', data, payload);
      yield put({
        type: 'updateState',
        payload: {
          searchResult: data.data.result.songs,
          songCount: data.data.result.songCount
        }
      })
    },
  },

  // 同步操作，纯函数的方式去更新数据
  reducers: {
    updateState(state, { payload }) {
      return {...state, ...payload }
    }
  },
};