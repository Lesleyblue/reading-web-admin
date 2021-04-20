/*
 * @Author: your name
 * @Date: 2021-04-13 22:41:33
 * @LastEditTime: 2021-04-20 11:08:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reading-web-admin\src\main.js
 */
import Vue from 'vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import store from './store'

Vue.config.productionTip = false

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
