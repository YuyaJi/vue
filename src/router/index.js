import Vue from 'vue'
import Router from 'vue-router'
import Title from '../components/Title.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Title,
      component: Title,
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import(/* webpackChunkName: "Home" */ '../components/Home.vue')
        }, {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "Login" */ '../components/Login.vue')
        }, {
          path: '/sign',
          name: 'sign',
          component: () => import(/* webpackChunkName: "Sign" */ '../components/Sign.vue')
        }
      ]
    }
  ]
})
