import { getUserList, updateUserInfo, deleteUserInfo, modifyRoler, getCommitData } from "@/api/user";

const state = {
  userList: []
}

const mutations = {
  updateList(state, list) {
    state.userList = list
  }
}

const actions = {
  // 获取用户信息
  getUserList({ commit }, query) {
    return new Promise((resolve, reject) => {
      getUserList(query).then(res => {
        console.log('res...', res);
        if (res.data.code == 1) {
          commit('updateList', res.data.data.list);
          resolve();
        } else {
          reject(res.data.msg)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 更改用户信息
  updateUserInfo({ commit }, query) {
    return new Promise((resolve, reject) => {
      updateUserInfo(query).then(res => {
        console.log('change_res...', res);
        if (res.data.code == 1) {
          resolve(res.data.msg);
        } else {
          reject(res.data.msg)
        }
      }).catch(err => {
        reject(err);
      })
    })
  },
  // 删除用户信息
  deleteUserInfo({ commit }, query) {
    console.log('delete_query...', query)
    return new Promise((resolve, reject) => {
      deleteUserInfo(query).then(res => {
        console.log('delete_res', res);
        if (res.data.code == 1) {
          resolve(res.data.msg);
        } else {
          reject(res.data.msg)
        }
      }).catch(err => {
        reject(err);
      })
    })
  },
  // 分配用户角色
  modifyRoler({ commit }, query) {
    // console.log('modify_query..',query);
    return new Promise((resolve, reject) => {
      modifyRoler(query).then(res => {
        console.log('delete_res', res);
        if (res.data.code == 1) {
          resolve(res.data.msg);
        } else {
          reject(res.data.msg)
        }
      }).catch(err => {
        reject(err);
      })
    })
  },
  // 获取提交记录
  getCommitData({ commit }, query) {
    return new Promise((resolve, reject) => {
      getCommitData().then(res => {
        console.log('commit', res.data)
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}