<!--
 * @Author: lesley
 * @Date: 2021-04-13 22:56:24
 * @LastEditTime: 2021-04-20 17:07:14
  index 也为 某个模块的管理页面
-->

<template>
  <div>
      <div class="nav"><Navigator/></div>
      <div class="main">
        <div class="menu">
            <Menu/>
        </div>
        <div class="content">
            <!-- 通过点击菜单的name来显示不同的模块页面 -->
            <!-- <router-view></router-view> -->
            <!-- <AddNews/> -->
            <NewsList/>
        </div>
      </div>
      
  </div>
</template>

<script>
import Navigator from '../components/Navigator'
import Menu from '../components/Menu'
import NewsList from '../components/NewsList'
import AddNews from '../components/AddNews'
export default {
    components:{
        Navigator,
        Menu,
        NewsList,
        AddNews
    },
    methods:{
        showMenu(){
            
        }
    }
}
</script>

<style lang="less" scoped>
.nav{
    height: 6vh;
}
.main{
    display: flex;
    .menu{
        height: 94vh;
        width: 15%;
        background-color: #515a6e;
    }
    .content{
        width: 100%;
    }
}
</style>