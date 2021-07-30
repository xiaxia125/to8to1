import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detailsimg from '../views/Detailsimg'
import Rendering from '../views/Rendering'
import Company from '../views/Company'
import Security from '../views/Security'
import Strategy from '../views/Strategy'
import Register from '../views/Register'
import Login from '../views/Login'
import Search from '../views/Search'
import Detailscom from '../views/Detailscom'
import Detailsstr from '../views/Detailsstr'
import backstage from '../views/backstage'
import manage from '../views/manage'
import Vrroom from '../views/Vrroom'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vrroom',
    name: 'Vrroom',
    component: Vrroom
  },
  {
    path: '/backstage',
    name: 'backstage',
    component: backstage
  },
  {
    path: '/manage',
    name: 'manage',
    component: manage
  },
  {
    path: '/rendering',
    name: 'Rendering',
    component: Rendering
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/detailsimg/:rid',
    name: 'Detailsimg',
    component: Detailsimg,
    props:true
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  },
  {
    path: '/detailscom/:cid',
    name: 'Detailscom',
    component: Detailscom,
    props:true
  },
  {
    path: '/security',
    name: 'Security',
    component: Security
  },
  {
    path: '/detailsstr',
    name: 'Detailsstr',
    component: Detailsstr
  },
  {
    path: '/strategy',
    name: 'Strategy',
    component: Strategy
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
