<!--
 * @Author: your name
 * @Date: 2021-04-20 11:40:41
 * @LastEditTime: 2021-04-21 15:30:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reading-web-admin\src\components\AddNews.vue
-->
<template>
    <div class="main">
        
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="标题" prop="title">
                <Input v-model="formValidate.title" placeholder="Enter your name"/>
            </FormItem>
            <FormItem label="作者" prop="writer">
                <Input v-model="formValidate.writer" placeholder="Enter your e-mail"/>
            </FormItem>
            <FormItem label="类别" prop="type">
                <Select v-model="formValidate.type" placeholder="Select your city">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
            <FormItem label="日期">        
                <FormItem prop="date">
                    <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                </FormItem>
            </FormItem>        
            <FormItem label="简介" prop="desc">
                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."/>
            </FormItem>
            <div id="demo" style="padding-left: 30px"></div>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
            </FormItem>
        </Form>
        
    </div>
</template>

<script>
import E from 'wangeditor' 
export default {
    data () {
        return {
            uploadList: [
                {
                    id:1,
                    url:'',
                }
            ],
            formValidate: {
                title: '',
                writer: '',
                type: '',
                date: '',
                desc: '',
                text: '',
                
            },
            ruleValidate: {
                title: [
                    { required: true, message: '标题不能为空', trigger: 'blur' }
                ],
                writer: [
                    { required: true, message: '不能为空', trigger: 'blur' },
                ],
                type: [
                    { required: true, message: '请输入类型', trigger: 'change' }
                ],
                date: [
                    { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请输入简介', trigger: 'blur' },
                    { type: 'string', min: 20, message: '简介不少于10个字', trigger: 'blur' }
                ],
                text: [
                    { required: true, message: '请输入新闻内容', trigger: 'blur' },
                ]
            },
            editor: null
        }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        },
        setEditor() {
            const editor = new E(`#demo`)
            // 配置 onchange 回调函数，将数据同步到 vue 中
            editor.config.onchange = (newHtml) => {
            this.editorData = newHtml
            }
            // 创建编辑器
            editor.create()
            this.editor = editor
        },
    },
    mounted(){
        this.setEditor()
    }
}
</script>

<style lang="less" scoped>
.main{
    margin-top: 5%;
    display: flex;
    justify-content: center;
    .editor{
        width: 100px;
        height: 100px;
        border: 1px #eee solid;
    }
}
</style>