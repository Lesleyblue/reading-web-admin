/*
 * @Author: your name
 * @Date: 2021-04-20 16:06:07
 * @LastEditTime: 2021-04-20 17:10:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reading-web-admin\src\router.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Index from './views/index'
import newsList from './components/NewsList.vue'

// import Register from './views/register'

Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/login',component:Login},
        {path:'/index',component:Index},
        {path:'/news/newsList',component:newsList},
        // {path:'/register',component:Register},
    ]

})
// export default [
//     {
//         path:'/',
//         name: 'Index',
//         component: () => import("./views/index"),
//         children: [
//             {
//                 path:'/newsList',
//                 name:'NewsList',
//                 component: () => import('./components/NewsList.vue')
//             }
//         ]     
//     },
// ]