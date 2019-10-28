import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SettingContainer from './components/tabbar/SettingContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'

import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

var router = new VueRouter({
    routes:[ //注意 routes 不是routers
        {path:'/',redirect:'/home'}, //路由匹配，默认home页
        { path: '/home', component: HomeContainer },  //此处的path地址和 tabbar 中指定的地址保持一致； 
        { path: '/shopcar', component: ShopCarContainer },
        { path: '/member', component: MemberContainer },
        { path: '/setting', component: SettingContainer },
        { path: '/home/NewsList', component: NewsList },
        { path: '/home/NewsInfo/:id', component: NewsInfo }
    ]
});
export default router;