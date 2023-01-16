import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

import {TableView, ViewPagination, NameAgeEditor} from './components'


const app = createApp(App)
app.use(router)
app.use(store)
{
app
  .component('TableView', TableView)
  .component('ViewPagination', ViewPagination)
  .component('NameAgeEditor', NameAgeEditor)
}
app.mount('#app')
