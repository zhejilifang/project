import { getDetailList, getCommentList } from '@/data/index'
import { formatTime } from "@/utils/index"

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
    // console.log(res)
    commit('updateState', {
      comment_count: res.data.comment_count,
      content: res.data.content,
      info: res.data
    })
  },
  async getCommentList({ commit, state }, { id, page }) {
    console.log('id...page', id, page)
    let res = await getCommentList(id, page);
    console.log('comment...', res)
    let formatComment = res.data.map(item => {
      if (typeof item.comment.create_time == 'string') {
        return item
      } else {
        item.comment.create_time = formatTime(new Date(item.comment.create_time * 1000));
        return item
      }
    })
    console.log('formatComment', formatComment)
    commit('updateState', {
      comment: page == 1 ? formatComment : [...state.comment, ...formatComment]
    })
    console.log('...state', state.comment)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}