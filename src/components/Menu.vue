<!--
 * @Author: your name
 * @Date: 2021-04-14 09:13:23
 * @LastEditTime: 2021-04-20 16:55:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reading-web-admin\src\components\Menu.vue
-->
<template>
    <Row>
        <Menu theme="dark" style="width:100%" :open-names="openName" :active-name="activeName" @on-select="changeMenu">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper" />
                    新闻管理
                </template>
                    <MenuItem name="1-1">新闻列表</MenuItem>     
                <!-- <router-link to="/news/newsList">
                    <MenuItem name="1-1">新闻列表</MenuItem>     
                </router-link> -->
                <MenuItem name="1-2">新增新闻</MenuItem>
                <MenuItem name="1-3">新闻分类</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people" />
                    用户管理
                </template>
                <MenuItem name="2-1">新增用户</MenuItem>
                <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
        </Menu>
    </Row>
</template>

<script>
export default {
    data(){
        return{
            openName: ['1'],  // 应该要放在vuex里
            activeName:'1-1'
        }
    },
    methods:{
        changeMenu(e){
            this.$store.commit('changeMenu',e)
        }
    }
}
</script>

<style lang="less" scoped>

</style>