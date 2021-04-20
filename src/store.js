/*
 * @Author: your name
 * @Date: 2021-04-20 10:44:20
 * @LastEditTime: 2021-04-20 11:38:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reading-web-admin\src\store.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeName:'1-1',
    count: 1
  },
  mutations: {
    changeMenu(state,e) {
        state.activeName = e
    }
  },
  actions: {
      
  }
})