// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

/***************引入echarts****************************/
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

/*************引入axios************************/
import axios from 'axios'
Vue.prototype.$axios = axios;

/***************引入百度地图API****************************/

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'PQfeV5IcHkQ0lxsA3YW9UyyuQQegA3jf'
})
/********************************************************/

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
