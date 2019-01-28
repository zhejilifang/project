import { getSetting, getNewsList, getDetailList } from "@/data/index";

const state = {
  channels: [],
  currentUrl: '',
  newsList: [],
  hot_time: '',
  detailList: []
}

const mutations = {
  updateChannels(state, channels) {
    state.channels = channels;
  },
  updateCurrentUrl(state, currentUrl) {
    state.currentUrl = currentUrl;
  },
  updateNewsList(state, newsList) {
    state.newsList = newsList;
    state.hot_time = newsList.map(item => {
      return item.behot_time;
    }).sort((a, b) => b - a)[0];
  },
  appendNewsList(state, newsList) {
    state.newsList = [...state.newsList, ...newsList];
    console.log(state.newsList.length);
    state.hot_time = newsList.map(item => {
      return item.behot_time;
    }).sort((a, b) => b - a)[0];
  },
  removeNews(state, id) {
    let index = state.newsList.findIndex(item => {
      return item.item_id == id;
    })
    state.newsList.splice(index, 1);
  },
  goToDetail(state, detailList) {
    state.detailList = detailList
  }
}

const actions = {
  async getSetting({ commit }) {
    let channels = await getSetting();
    // console.log('channels...', channels)
    commit('updateCurrentUrl', channels.channels[0][0].appUrl)
    commit('updateChannels', channels.channels[0])
  },
  async getNewsList({ commit }, url) {
    // console.log('currentUrl', url);
    let res = await getNewsList(url);
    // console.log('res...', res.data)
    let newsList = res.data.map(item => {
      return JSON.parse(item.content)
    })
    console.log('newsList...', newsList)
    commit('updateNewsList', newsList)
  },
  async getMore({ commit, state }, url) {
    url += `&max_behot_time=${state.hot_time}`
    let res = await getNewsList(url);
    let newsList = res.data.map(item => {
      return JSON.parse(item.content)
    })
    commit('appendNewsList', newsList);
  },
  async getDetailList({ commit }, id) {
    let res = await getDetailList(id);
    console.log(res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}