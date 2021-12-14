import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Steaks from '../views/Steaks.vue'
import Keranjang from '../views/Keranjang.vue'
import SteakDetail from '../views/SteakDetail.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/steaks',
    name: 'Steaks',
    component: Steaks
  },
  {
    path: '/steaks/:id',
    name: 'SteakDetail',
    component: SteakDetail
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: Keranjang
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router