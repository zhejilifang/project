const state = {
    num: 1000
}

const getters = {
    date(state) {
        return new Date().toLocaleString() + '---' + state.num
    }
}

const mutations = {
    changeNum(state, { payload }) {
        state.num = payload == 'add' ? ++state.num : --state.num
    }
}

const actions = {
    changeNumAsync({ commit }, action) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('changeNum', action);
                resolve();
            }, 1000)
        })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}