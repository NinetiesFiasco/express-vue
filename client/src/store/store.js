import {createStore} from 'vuex'
import cats from './cats'
import dogs from './dogs'

const store = createStore({
  modules: {
    cats, dogs
  }
})

export default store;