import api from '../api'

const newCat = () => ({
  name: '',
  age: 0,
  _id: ''
})

export default {
  namespaced: true,
  state: () => ({
    cats: [],
    editableCat: newCat(),
    count: 0,
    page: 1,
    pageItemsAmount: 5
  }),
  mutations: {
    reset(state) {
      state.editableCat = newCat()
    },
    setName(state, value) {
      state.editableCat.name = value
    },
    setAge(state, value) {
      state.editableCat.age = value
    },
    create(state, value) {
      state.cats.push(value)
    },
    update(state, value) {
      state.cats = state.cats.map(cat => {
        return cat._id === value._id
          ? value
          : cat
      })
    },
    startUpdate(state, value) {
      state.editableCat = {...state.cats.find(cat => cat._id === value)}
    },
    _delete(state, value) {
      state.cats = state.cats.filter(cat => cat._id !== value )
    },
    setCats(state, value) {
      state.cats = value
    },
    setCount(state, value) {
      state.count = value
    },
    setPage(state, value) {
      state.page = value
    },
    setPageItemsAmount(state, value) {
      state.pageItemsAmount = value
    }
  },
  actions: {
    reset({commit}) {
      commit('reset')
    },
    save({state, dispatch}) {
      if (!state.editableCat.name || !state.editableCat.age)
        return

      state.editableCat._id
        ? dispatch('update')
        : dispatch('create')
    },
    async create({state, commit}) {
      const cat = await api.cats.create(state.editableCat)
      commit('reset')
      commit('create', cat)
    },
    async update({state, commit}) {
      const cat = await api.cats.update(state.editableCat._id, state.editableCat)
      commit('reset')
      commit('update', cat)
    },
    startUpdate({commit}, id) {
      commit('startUpdate', id)
    },
    async _delete({commit}, id) {
      await api.cats._delete(id)
      commit('_delete', id)
    },
    async readPage({commit, state}) {
      let cats = await api.cats.readPage(state.page - 1, state.pageItemsAmount)
      let count = await api.cats.count()
      commit('setCount', count)
      commit('setCats', cats)
    },
    setPage({commit, dispatch}, page) {
      commit('setPage', page)
      dispatch('readPage')
    },
    setPageItemsAmount({commit}, amount) {
      commit('setPageItemsAmount', amount)
    }
  },
  getters: {
    cats: (state) => state.cats,
    editableCat: (state) => state.editableCat,
    count: (state) => state.count,
    page: (state) => state.page,
    pageItemsAmount: (state) => state.pageItemsAmount
  }
}