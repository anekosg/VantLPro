import Vue from 'vue';
import app from './App.vue';
import 'vant/lib/index.css';

import { 
    Toast,
    Tabbar,
    TabbarItem,
    NavBar,
    Icon
} from 'vant';
Vue
.use(Tabbar)
.use(TabbarItem)
.use(NavBar)
.use(Icon)
.use(Toast);


var vm = new Vue({
    el:"#app", 
    render:h=>h(app) 
})       