import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

// set is mutation shortcut
const set = key => (state, value) => {
  state[key] = value
}
const fill = key => (state, payload) => {
  const newObject = {...state[key]};
  for (const [key, value] of Object.entries(payload)) {
    newObject[key] = value
  }
  state[key] = newObject
}

const stateMapper = key => (arrayProperties) => {
  const map = {}
  for (const property of arrayProperties)
    map[property] = state => state[key][property]

  return mapState(map)
}

const catsState = stateMapper('cats')
const dogsState = stateMapper('dogs')
const nameAgeEditorState = stateMapper('nameAgeEditor')

export {
  set, fill,
  mapState, mapGetters, mapMutations, mapActions,
  catsState, dogsState, nameAgeEditorState
}
