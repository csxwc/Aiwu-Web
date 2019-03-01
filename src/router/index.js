import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import mapBuild from '../components/Map.vue'
import User from '../components/UserCommands.vue'
import my_booked from '../components/user_components/my_booked.vue'
import my_info from '../components/user_components/my_info.vue'
import my_preference from '../components/user_components/my_preference.vue'
import my_release from '../components/user_components/my_release'
import login from '../components/login.vue'

import signup from '../components/signup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: "/", redirect: '/home'
    },
    { path: '/map', component: mapBuild},

    { path: '/login', component: login},
    { path: '/signup', component: signup},

    { path: '*', redirect :'/home'},

    { path: '/user',
      component: User,
      children: [
        { path:'my_booked', component:my_booked} ,
        { path:'my_info', component:my_info},
        { path:'my_preference', component:my_preference },
        { path:'my_release', component:my_release },
        { path:'/', redirect:'my_booked'}
      ]
    }
  ]
})
