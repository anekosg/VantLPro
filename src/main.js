import Vue from 'vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'



import app from './App.vue';
import router from './router.js'
import 'vant/lib/index.css';


import { 
    Toast,
    Tabbar,
    TabbarItem,
    NavBar,
    Icon,
    Swipe, 
    SwipeItem
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
.use(VueResource);


var vm = new Vue({
    el:"#app", 
    render:h=>h(app) ,
    router:router
})       