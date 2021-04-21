<!--
 * @Author: your name
 * @Date: 2021-04-14 09:13:23
 * @LastEditTime: 2021-04-21 16:27:06
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
                <MenuItem name="2-1">用户列表</MenuItem>
                <MenuItem name="2-2">新增用户</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-book-outline"></Icon>
                    书籍管理
                </template>
                <MenuGroup title="在线读书模块">
                    <MenuItem name="3-1">列表</MenuItem>
                    <MenuItem name="3-2">新增</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="国学/古籍模块">
                    <MenuItem name="3-4">列表</MenuItem>
                    <MenuItem name="3-5">新增</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="ios-paper-outline"></Icon>
                    每日一读管理
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="4-1">文章列表</MenuItem>
                    <MenuItem name="4-2">新增文章</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="5">
                <template slot="title">
                    <Icon type="ios-chatboxes-outline"></Icon>
                     评论管理
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="5-1">新增和启动</MenuItem>
                    <MenuItem name="5-2">活跃分析</MenuItem>
                    <MenuItem name="5-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="5-4">用户留存</MenuItem>
                    <MenuItem name="5-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="6">
                <template slot="title">
                    <Icon type="ios-stats" />
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="6-1">新增和启动</MenuItem>
                    <MenuItem name="6-2">活跃分析</MenuItem>
                    <MenuItem name="6-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="6-4">用户留存</MenuItem>
                    <MenuItem name="6-5">流失用户</MenuItem>
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