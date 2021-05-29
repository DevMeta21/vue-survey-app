import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import TestStart from '@/components/TestStart'
import TestQuestion from '@/components/TestQuestion'
import TestWait from '@/components/TestWait'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TestStart',
    component: TestStart,
  },
  {
    path: '/question',
    name: 'TestQuestion',
    component: TestQuestion,
    props: true
  },
  {
    path: '/wait',
    name: 'TestWait',
    component: TestWait,
    props: true

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
