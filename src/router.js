import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SettingContainer from './components/tabbar/SettingContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'

var router = new VueRouter({
    routes:[ //注意 routes 不是routers
        { path: '/home', component: HomeContainer },  //此处的path地址和 tabbar 中指定的地址保持一致； 
        { path: '/shopcar', component: ShopCarContainer },
        { path: '/member', component: MemberContainer },
        { path: '/setting', component: SettingContainer }
    ]
});
export default router;