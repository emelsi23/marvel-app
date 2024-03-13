import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/charactes',
    name: 'Charactes',
    component: () => import('../views/characters/Characters.vue')
  } ,
  {
    path: '/series',
    name: 'Series',
    component: () => import('../views/series/Series.vue')
  } ,
  {
    path: '/comics',
    name: 'Comics',
    component: () => import('../views/comics/Comics.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
