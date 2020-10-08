<template>
    <div class="main-container">
        <el-container>
            <el-header>
                <div class="logo">
                    <h1>不得不住民宿</h1>
                </div>
                <div class="nav">
                    <el-menu
                            class="el-menu-demo"
                            mode="horizontal"
                            background-color="#4a69bd"
                            text-color="white"
                            active-text-color="gold"
                    >
                        <el-menu-item index="1">
                            <router-link to="/"> 首页</router-link>
                        </el-menu-item>
                        <el-submenu index="3">
                            <template slot="title">{{username}}</template>
                            <router-link to="/editPass">
                                <el-menu-item index="3-1" >修改密码</el-menu-item>
                            </router-link>
                            <el-menu-item index="3-2" @click="exitLogin">退出登录</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="4">
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-header>
            <el-container  class="main-con">
                <el-aside width="200px">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            background-color="#ffffff"
                            text-color="black"
                            active-text-color="#6c5ce7">
                        <el-submenu index="1">
                            <!--                            具名插槽-->
                            <template slot="title">
                                <i class="el-icon-s-fold"  style="color:black;"></i>
                                <span>分类管理</span>
                            </template>
                            <router-link to="/addCategory">
                                <el-menu-item index="1-1">分类添加</el-menu-item>
                            </router-link>
                            <router-link to="/showCategory">
                                <el-menu-item index="1-2">分类查看</el-menu-item>
                            </router-link>
                        </el-submenu>
                        <el-submenu index="2">
                            <!--                            具名插槽-->
                            <template slot="title">
                                <i class="el-icon-position" style="color:black;"></i>
                                <span>民宿管理</span>
                            </template>
                            <router-link to="/showhomestay">
                                <el-menu-item index="2-1">民宿列表</el-menu-item>
                            </router-link>
                            <router-link to="/addhomestay">
                                <el-menu-item index="2-2">民宿添加</el-menu-item>
                            </router-link>

                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-container >
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                    <!--                    <el-footer>Footer</el-footer>-->
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data(){
            return{
                username:''
            }
        },
        methods: {
            exitLogin() {
                console.log(this.$router)
                sessionStorage.removeItem('token');
                if (!sessionStorage.getItem('token')) {
                    this.$router.push({name: 'login'})
                }
            },
        },
        mounted() {
            this.username = this.$route.query.username;
        }
    };
</script>

<style>
    ::-webkit-scrollbar-thumb:horizontal { /*水平滚动条的样式*/
        width: 4px;
        background-color: #CCCCCC;
        -webkit-border-radius: 6px;
    }

    ::-webkit-scrollbar-track-piece {
        background-color: #F5FAFF; /*滚动条的背景颜色*/
        -webkit-border-radius: 0; /*滚动条的圆角宽度*/
    }
    ::-webkit-scrollbar {
        width: 9px; /*滚动条的宽度*/
        height: 5px; /*滚动条的高度*/
    }
    ::-webkit-scrollbar-thumb:vertical { /*垂直滚动条的样式*/
        height: 25px;
        background-color: #4A69BD;
        -webkit-border-radius: 4px;
        outline: 2px solid #fff;
        outline-offset: -2px;
        border: 2px solid #fff;
    }
    ::-webkit-scrollbar-thumb:hover { /*滚动条的hover样式*/
        height: 50px;
        background-color: gold;
        -webkit-border-radius: 4px;
    }
    @keyframes myfirst
    {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    @-moz-keyframes myfirst {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    @-webkit-keyframes  myfirst
    {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    @-o-keyframes myfirst
    {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    .el-notification{
        z-index: 99999999;
    }

    .w-e-text-container{
        z-index: 1;
    }
 .w-e-text-container{
        z-index: 1;
    }
</style>

<style scoped>
    .main-container{
        animation: myfirst 1.5s ease-in-out 0ms ;
        -webkit-animation: myfirst 1.5s ease-in-out 0ms;
        -o-animation: myfirst 1.5s ease-in-out 0ms ;
        -moz-animation:  myfirst 1.5s ease-in-out 0ms;
    }
    .el-header {
        background-color: #4a69bd;
        color:white;
        display: flex;
        justify-content: space-between;
        position: relative;
        width: 100%;
        height: 60px;

    }

    .el-header .nav {
        width: auto;
        height: 100%;
        background-color: red;
    }

    .el-aside {
        background-color:white;
        color: black;
        text-align: left;
        overflow: hidden;
        border-right: 2px solid rgba(74,105,189,0.5);
        display: block;
        position: absolute;
        left: 0;
        top: 60px;
        bottom: 0;
    }

    .el-main {
        background-color: #F5FAFF;
        color: #333;
        padding: 0;
        position: absolute;
        left: 200px;
        right: 0;
        top: 60px;
        bottom: 0;
        overflow-y: scroll;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-menu {
        width: 100%;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .logo {
        height: 60px;
        line-height: 60px;
    }
    .el-avatar{
        width: 50px;
        height: 50px;
    }
</style>