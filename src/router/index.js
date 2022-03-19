import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/listalocais',
    name: 'ListaLocais',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaLocais.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
