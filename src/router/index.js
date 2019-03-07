import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import mapBuild from '../components/Map.vue'
import User from '../components/UserCommands.vue'
import my_booked from '../components/user_components/my_booked.vue'
import my_info from '../components/user_components/my_info.vue'
import my_preference from '../components/user_components/my_preference.vue'
import my_release from '../components/user_components/my_release'
import loginpage from '../components/loginpage.vue'

import signuppage from '../components/signuppage.vue'
import HouseInfo from "../components/HouseInfo";
import Manager from '../components/manager.vue'


Vue.use(Router);

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
    {path: '/map', component: mapBuild},

    {path: '/loginpage', component: loginpage},
    {path: '/signuppage', component: signuppage},
    {path: '/manager', component: Manager},
    {path: '/houseinfo', component: HouseInfo},

    {path: '*', redirect: '/home'},

    {
      path: '/user',
      component: User,
      children: [
        {path: 'my_booked/:userid', component: my_booked},
        {path: 'my_info/:userid', component: my_info},
        {path: 'my_preference/:userid', component: my_preference},
        {path: 'my_release/:userid', component: my_release},
      ]
    },
  ]
})
