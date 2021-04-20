import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Index from './views/index'
// import Register from './views/register'

Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/login',component:Login},
        {path:'/index',component:Index},
        // {path:'/register',component:Register},
    ]

})