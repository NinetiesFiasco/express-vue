import {createRouter, createWebHistory} from 'vue-router'
import {Main, Cats, Dogs} from './pages'

const routes = [
  { path: '/', component: Main},
  { path: '/cats', component: Cats},
  { path: '/dogs', component: Dogs}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router