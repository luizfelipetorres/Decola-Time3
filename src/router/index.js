import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'login',
    component: Login
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
