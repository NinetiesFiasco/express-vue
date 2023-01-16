import api from '../api'
import {set, fill} from './utils'

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
    setCats: set('cats'),
    setCount: set('count'),
    setPage: set('page'),
    setPageItemsAmount: set('pageItemsAmount'),
    fillEditableCat: fill('editableCat')
  },
  actions: {
    startUpdate({dispatch, state}, id) {
      dispatch('setEditable', {...state.cats.find(cat => cat._id === id)})
    },
    async _delete({commit}, id) {
      await api.cats._delete(id)
      commit('_delete', id)
    },
    async readPage({commit, state}) {
      let cats = await api.cats.readPage(state.page - 1, state.pageItemsAmount)
      commit('setCats', cats)
      
      let count = await api.cats.count()
      commit('setCount', count)
    },
    setPage({commit, dispatch}, page) {
      commit('setPage', page)
      dispatch('readPage')
    },
    setPageItemsAmount({commit}, amount) {
      commit('setPageItemsAmount', amount)
    },
    createNew({dispatch}) {
      dispatch('setEditable', newCat())
    },
    setEditable({commit}, cat) {
      commit('nameAgeEditor/setEditableAnimal', {...cat}, {root: true})
      commit('nameAgeEditor/setAnimalType', 'cats', {root: true})
    }
  },
  getters: {
    catsTable(state) {
      return {
        caption: 'Cats',
        titles: ['ID', 'Name', 'Age', 'Created'],
        data: state.cats.map(cat => ({
          _id: cat._id,
          name: cat.name,
          age: cat.age,
          createdAt: cat.createdAt
        }))
      } 
    },
    offset: (state) => (state.page - 1) * state.pageItemsAmount,
    pageAmount: state => Math.ceil(state.count / state.pageItemsAmount)
  },
}