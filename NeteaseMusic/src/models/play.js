import { songDetail, songUrl, songLyric } from '@/services/index'

export default {
  // 模块的命名空间
  namespace: 'play',

  state: {
    mode: 0,
    current: -1,
    song: {},
    songs: window.localStorage.getItem('songList') && JSON.parse(window.localStorage.getItem('songList')) || []
  },

  // 异步操作，用generator函数去控制时序
  effects: {
    * songDetail({ payload }, { call, put, select }) {
      let data = yield call(songDetail, payload.ids);
      let urls = yield call(songUrl, payload.ids);
      let state = yield select(state => state.play);
      console.log('songDetail...', data, urls, state);
      data.data.songs.forEach(item => {
        urls.data.data.forEach(value => {
          if (item.id === value.id) {
            item.url = value.url;
          }
        })
      })

      for (let i = 0, len = data.data.songs.length; i < len; i++) {
        console.log('data.data.songs..', data.data.songs)
        let lyric = yield call(songLyric, data.data.songs[i].id);
        console.log('lyric...', lyric);
        // data.data.songs[i].lyric = lyric.data.lrc.lyric;
      }

      if (payload.ids.indexOf(',') !== -1) {
        window.localStorage.setItem('songList', JSON.stringify(data.data.songs))
        state = {
          songs: data.data.songs
        }
      } else {
        let current = state.songs.findIndex(item => item.id === data.data.songs[0].id)
        console.log('select...', current, state.songs, data.data.songs[0]);
        state = {
          song: data.data.songs[0],
          current
        }
      }
      yield put({
        type: 'updateState',
        payload: state
      })
    }
  },

  // 同步操作，纯函数的方式去更新数据
  reducers: {
    updateState(state, { payload }) {
      return {...state, ...payload }
    },
    changeSong(state, { payload }) {
      let current = 0;
      console.log('type...', payload, state.mode, state.current);
      if (state.mode === 1) {
        if (payload === 'prev') {
          current = (state.current - 1 + state.songs.length) % state.songs.length;
        } else {
          current = (state.current + 1) % state.songs.length;
        }
      } else {
        current = Math.round(Math.random() * state.songs.length);
      }
      return {...state, current, song: state.songs[current] }
    }
  },
};