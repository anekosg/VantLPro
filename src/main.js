import Vue from 'vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment' //时间格式化插件

//全局过滤器
Vue.filter('dateformat',function(dataStr,pattern='YYYY-MM-DD'){
    return moment(dataStr).format(pattern);
});

import app from './App.vue';
import router from './router.js'
import 'vant/lib/index.css';


import { 
    Toast, //提示
    Tabbar,//底部导航栏
    NavBar,//顶部Nav栏
    TabbarItem,
    Icon,   //指定图标
    Swipe,  //轮播图
    SwipeItem,
    Lazyload , //懒加载图片
    Grid, //九宫格
    GridItem,
    Image,
    List,
    Cell
} from 'vant';
Vue
.use(Tabbar)
.use(TabbarItem)
.use(NavBar)
.use(Icon)
.use(Toast)
.use(VueRouter)
.use(Swipe)
.use(SwipeItem)
.use(VueResource)
.use(Lazyload)
.use(Grid)
.use(GridItem)
.use(Image)
.use(List)
.use(Cell);


var vm = new Vue({
    el:"#app", 
    render:h=>h(app) ,
    router:router
})       