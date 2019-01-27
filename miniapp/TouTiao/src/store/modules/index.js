import { getSetting, getNewsList } from "@/data/index";

const state = {
  channels: [],
  currentUrl: '',
  newsList: []
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}