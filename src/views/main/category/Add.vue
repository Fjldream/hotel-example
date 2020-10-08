<template>
    <div class="cat-con">
        <loading :isshow="showLoading"></loading>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item  :to="{ path: '/showCategory' }">分类管理</el-breadcrumb-item>
            <el-breadcrumb-item >分类添加</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form :model="category" ref="category" :rules="categoryRules">
            <el-form-item label="分类名称" prop="cname">
                <el-input v-model="category.cname" placeholder="请输入分类名称" id="fresh-a"></el-input>
            </el-form-item>
            <el-form-item label="分类描述" prop="cdesc">
                <el-input v-model="category.cdesc" placeholder="请输入分类描述"></el-input>
            </el-form-item>
            <el-button type="primary" @click="handleSubmit('category')">提交</el-button>
        </el-form>
    </div>
</template>

<script>
    import axios from "axios";
    import {URL} from "@/lib/base";
    import {SUCCESS} from "../../../lib/base";
    import loading from "../../../components/loading/loading";
    let ele = document.querySelector('#fresh-a');
    export default {
        name: "AddCategory",
        components:{
            loading
        },
        data() {
            let validateCname = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("分类名称必填"));
                } else if (/[a-z0-9A-Z\u4e00-\u9fa5]+/.test(value)) {
                    if(value.length<9){
                        callback();
                    }else {
                        callback(new Error("必须输入汉字字母数字2-8位"));
                    }
                } else {
                    callback();
                }
            };
            return {
                category: {
                    cname: "",
                    cdesc: "",
                },
                categoryRules: {
                    cname: [{validator: validateCname, trigger: "blur"}],
                    cdesc: [
                        {required: true, message: "分类描述必填", trigger: "blur"},
                        {min: 3, max: 30, message: "长度在3到30位之间", trigger: "blur"},
                    ],
                },
                showLoading:false,
            };
        },
        methods: {
            handleSubmit(From) {

                this.$refs[From].validate(result => {
                    if (result) {
                        this.showLoading = true;
                        let url = URL + "/admin/Category/add";
                        //console.log(url);
                        let token = sessionStorage.getItem("token");
                        //console.log(token);
                        //console.log(this.category);
                        axios({
                            url,
                            data: this.category,
                            method: "POST",
                            headers: {
                                token: token,
                            },
                        }).then(res => {
                            console.log(res);
                            if(res.status===200&&res.data.code===SUCCESS){
                                setTimeout( ()=> {
                                    this.showLoading = false;
                                },200)
                                this.$notify({
                                    title:'提示',
                                    message:res.data.msg,
                                    showClose:false,
                                    type:'success'
                                })
                                this.category.cname='';
                                this.category.cdesc='';
                                ele.focus();
                            }else{
                                this.$notify({
                                    title:'提示',
                                    message:res.data.msg,
                                    duration:0,
                                    type:'warning'
                                })
                            }

                        }).catch(() => {

                            });
                    }
                });
            },
        },
    };


</script>

<style scoped>
    .cat-con {
        padding: 30px 300px;

    }
    .el-form{
        animation: myfirst 1.5s ease-in-out 0ms ;
        -webkit-animation: myfirst 1.5s ease-in-out 0ms;
        -o-animation: myfirst 1.5s ease-in-out 0ms ;
        -moz-animation:  myfirst 1.5s ease-in-out 0ms;
    }
</style>