import { songDetail, songUrl } from '@/services/index'

export default {
  // 模块的命名空间
  namespace: 'play',

  state: {
    song: {},
    songs: []
  },

  // 异步操作，用generator函数去控制时序
  effects: {
    * songDetail({ payload }, { call, put }) {
      let data = yield call(songDetail, payload.ids);
      let urls = yield call(songUrl, payload.ids);
      console.log('songDetail...', data, urls);
      // 把播放url放到歌曲详情里
      data.data.songs.forEach(item => {
        urls.data.data.forEach(value => {
          if (item.id === value.id) {
            item.url = value.url;
          }
        })
      })
      yield put({
        type: 'updateState',
        payload: {
          song: data.data.songs[0],
          songs: data.data.songs
        }
      })
    }
  },

  // 同步操作，纯函数的方式去更新数据
  reducers: {
    updateState(state, { payload }) {
      return {...state, ...payload }
    }
  },
};