import { getDetail, getDetailList } from '@/data/index'

const state = {
  content: [],
  info: {},
  comment: [],
  comment_count: 0,
  current: 1
}

const mutations = {
  updateState(state, info) {
    state = Object.assign(state, info);
  }
}

const actions = {
  async getDetailList({ commit }, id) {
    let res = await getDetailList(id);
    console.log(res)
    commit('updateState', {
      comment_count: res.data.comment_count,
      content: res.data.content,
      info: res.data
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}