import Vue from 'vue';
import App from './App.vue';

/* 引入路由  vue-router */
import VueRouter from 'vue-router';
/** 使用 路由 */
Vue.use(VueRouter);


/** 引入 element-ui  饿了么的组件库 */
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


/** 引入 axios */
import axios from 'axios';
Vue.prototype.$ajax = axios;


/* 时间格式 */
import Moment from 'moment';
Vue.prototype.moment = Moment;

/** 引入组件 */
import Home from './page/Home.vue';
import Article from './page/Article.vue';
import ArticleAdd from './page/ArticleAdd.vue';
import Login from './page/Login.vue';
import Edit from './page/Edit.vue';

import Collection from './page/Collection.vue';
import Data from './page/Data.vue';

import Test from './page/Test.vue';
import Demo from './page/Demo.vue';
import Show from './page/Show.vue';

/** 定义路由 */
const routelist = [
    {
        path:'/home',
        component:Home
    },{
        path:'/article',
        component:Article
    },{
        path:'/articleAdd',
        component:ArticleAdd
    },{
        path:'/login',
        component:Login
    },{
        path:'/test',
        component:Test
    },{
        path:'/edit',
        component:Edit
    },{
        path:'/demo',
        component:Demo
    },{
        path:'/collection',
        component:Collection
    },{
        path:'/data',
        component:Data
    },{
        path:'/show',
        component:Show
    }
];

const router = new VueRouter({
    mode:'history',
    routes:routelist
});


/* 使用饿了么组件库 */
Vue.use(Element);

new Vue({
    el:'#app',
    router,
    render:h=>h(App)
});
