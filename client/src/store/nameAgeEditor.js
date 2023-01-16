import api from '../api'
import {set, fill} from './utils'

export default {
  namespaced: true,
  state: () => ({
    editableAnimal: null,
    animalType: ''
  }),
  mutations: {
    reset: state => {
      state.editableAnimal = null
      state.animalType = ''
    },
    setAnimalType: set('animalType'),
    setEditableAnimal: set('editableAnimal'),
    fillEditableAnimal: fill('editableAnimal')
  },
  actions: {
    save({state, dispatch}) {
      if (!state.editableAnimal.name || !state.editableAnimal.age)
        return

      state.editableAnimal._id
        ? dispatch('update')
        : dispatch('create')
    },
    async create({state, commit}) {
      const animal = await api[state.animalType].create(state.editableAnimal)
      commit(`${state.animalType}/create`, animal, {root: true})
      commit('reset')
    },
    async update({state, commit}) {
      const animal = await api[state.animalType].update(state.editableAnimal._id, state.editableAnimal)
      commit(`${state.animalType}/update`, animal, {root: true})
      commit('reset')
    },
    reset({commit}) {
      commit('reset')
    }
  },
  getters: {},
}