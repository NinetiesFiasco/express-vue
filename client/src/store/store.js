import {createStore} from 'vuex'
import cats from './cats'
import dogs from './dogs'
import nameAgeEditor from './nameAgeEditor'

const store = createStore({
  modules: {
    cats, dogs, nameAgeEditor
  }
})

export default store;