import { getSetting } from "@/data/index";

const state = {
  channels: []
}

const mutations = {
  updateChannels(state, channels) {
    state.channels = channels;
  }
}

const actions = {
  async getSetting({ commit }) {
    let channels = await getSetting();
    console.log('channels...', channels)
    commit('updateChannels', channels.channels[0])
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}