import api from '../api'
import {set, fill} from './utils'

const newDog = () => ({
  name: '',
  age: 0,
  _id: ''
})

export default {
  namespaced: true,
  state: () => ({
    dogs: [],
    count: 0,
    editableDog: newDog(),
    page: 1,
    pageItemsAmount: 5
  }),
  mutations: {
    create: (state, dog) => {state.dogs.push(dog)},
    setCount: set('count'),
    setDogs: set('dogs'),
    fillEditableDog: fill('editableDog'),
    setPage: set('page'),
    setPageItemsAmount: set('pageItemsAmount'),
    startUpdate(state, value) {
      state.editableDog = {...state.dogs.find(dog => dog._id === value)}
    },
    update(state, value) {
      state.dogs = state.dogs.map(dog => {
        return dog._id === value._id
          ? value
          : dog
      })
    },
    _delete(state, value) {
      state.dogs = state.dogs.filter(dog => dog._id !== value )
    }
  },
  actions: {
    async readPage({commit, state}) {
      let dogs = await api.dogs.readPage(state.page - 1, state.pageItemsAmount)
      commit('setDogs', dogs)

      let count = await api.dogs.count()
      commit('setCount', count)
    },
    startUpdate({dispatch, state}, id) {
      dispatch('setEditable', {...state.dogs.find(dog => dog._id === id)})
    },
    async _delete({commit}, id) {
      await api.dogs._delete(id)
      commit('_delete', id)
    },
    setPage({commit, dispatch}, page) {
      commit('setPage', page)
      dispatch('readPage')
    },
    setPageItemsAmount({commit}, amount) {
      commit('setPageItemsAmount', amount)
    },
    createNew({dispatch}) {
      dispatch('setEditable', newDog())
    },
    setEditable({commit}, dog) {
      commit('nameAgeEditor/setEditableAnimal', {...dog}, {root: true})
      commit('nameAgeEditor/setAnimalType', 'dogs', {root: true})
    }

  },
  getters: {
    dogsTable(state) {
      return {
        caption: 'Dogs',
        titles: ['ID', 'Name', 'Age', 'Created'],
        data: state.dogs.map(dog => ({
          _id: dog._id,
          name: dog.name,
          age: dog.age,
          createdAt: dog.createdAt
        }))
      } 
    },
    offset: state => (state.page - 1) * state.pageItemsAmount,
    pageAmount: state => Math.ceil(state.count / state.pageItemsAmount)

  }
}