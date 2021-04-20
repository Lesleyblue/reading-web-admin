<!--
 * @Author: your name
 * @Date: 2021-04-14 10:23:43
 * @LastEditTime: 2021-04-20 11:51:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reading-web-admin\src\components\NewsList.vue
-->
<template>
    <div class="news">
        <!-- 搜索部分 -->
        <div class="search">
            <span>类型</span>
            <Select v-model="model" style="width:100px" clearable>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Input v-model="keywords" icon="ios-search-outline" placeholder="请输入" style="width: 200px" />
            <Button shape="circle" icon="ios-search">搜索</Button>
        </div>
        <!-- 操作按钮 -->
        <Button type="success" style="margin-right: 10px" ghost>一键发布</Button>
         <Button type="error" ghost>一键删除</Button>
        <!-- 新闻列表 -->
        <Table border :columns="columns12" :data="news" style="margin-top: 20px">
            <template slot-scope="{ row }" slot="select">
                <Checkbox @on-change="select(row.id)"></Checkbox>
                <!-- <strong>{{ row.name }}</strong> -->
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="info" size="small" ghost style="margin-right: 5px" @click="show(index)">浏览</Button>
                <Button type="primary" size="small" ghost style="margin-right: 5px" @click="show(index)">编辑</Button>
                <Button type="error" size="small" ghost  style="margin-right: 5px" @click="remove(index)">删除</Button>
                <Button type="success" size="small" ref="btn" ghost @click="publicize(index)">{{news[index].isPublic}}</Button>
            </template>
        </Table>
        <!-- 分页 -->
        <div>

        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: '按标题查询'
                    },
                    {
                        value: 'London',
                        label: '按作者查询'
                    }
                ],
                model: '',
                keywords:'',
                news: [
                    {
                        id:1,
                        name: 'John Brown',    // 新闻标题
                        type: '历史',         // 新闻类型
                        writer: 'lesley',            // 作者
                        date: 'New York No. 1 Lake Park',   //时间
                        isPublic:'发布',      // 是否发布
                        views:20,        // 浏览量
                        desc:'xxxx'      // 内容简介
                    },
                    {
                        id:2,
                        name: 'John Brown',    // 新闻标题
                        type: '历史',         // 新闻类型
                        writer: 'lesley',            // 作者
                        date: 'New York No. 1 Lake Park',   //时间
                        isPublic:'发布',     // 是否发布
                        views:20,
                        desc:'xxxx'
                    },
                    {
                        id:3,
                        name: 'John Brown',    // 新闻标题
                        type: '历史',         // 新闻类型
                        writer: 'lesley',            // 作者
                        date: 'New York No. 1 Lake Park',   //时间
                        isPublic:'发布',    // 是否发布
                        views:20,
                        desc:'xxxx'
                    },
                    {
                        id: 4,
                        name: 'John Brown',    // 新闻标题
                        type: '历史',         // 新闻类型
                        writer: 'lesley',            // 作者
                        date: 'New York No. 1 Lake Park',   //时间
                        isPublic:'发布',      // 是否发布
                        views:20,
                        desc:'xxxx'
                    }
                ],
                columns12: [
                    {
                        title: ' ',
                        slot: 'select',
                        width: 80,
                        align: 'center',
                    },
                    {
                        title: '新闻类别',
                        key: 'type',
                        align: 'center',
                        width: 150
                    },
                    {
                        title: '内容简介',
                        key: 'desc',
                        align: 'center',
                    },
                    {
                        title: '作者',
                        key: 'writer',
                        align: 'center',
                        width: 160
                    },
                    {
                        title: '时间',
                        key: 'date',
                        align: 'center',
                        width: 200
                    },
                    {
                        title: '浏览量',
                        key: 'views',
                        align: 'center',
                        width: 80
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 300,
                        align: 'center',
                    }
                ],
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.news[index].name}<br>Age：${this.news[index].age}<br>Address：${this.news[index].address}`
                })
            },
            remove (index) {
                this.news.splice(index, 1);
            },
            publicize (index) {
                this.news[index].isPublic==='发布' ? this.news[index].isPublic='取消' : this.news[index].isPublic ='发布'
                if(this.news[index].isPublic==='发布'){
                    // 发布新闻
                }else{
                    // 取消发布  
                }
            },
            select(index){
                console.log(index)
            }
        }
    }
</script>
<style lang="less" scoped>
.news{
    padding: 10px 10px;
    width: 100%;
    .search{
        margin-bottom: 10px;
        span{
            margin-right: 10px;
        }
        .ivu-input-wrapper{
            margin-left: 10px;
        }
        .ivu-btn-circle, .ivu-btn-circle-outline{
            margin-left: 10px;
        }
    }
}
</style>
