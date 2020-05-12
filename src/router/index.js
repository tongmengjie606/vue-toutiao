import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import HmUser from '../pages/HmUser.vue';

//引入路由插件引入路由插件
Vue.use(VueRouter);
//实例路由
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/user', component: HmUser, name: 'user' }
  ]
});

export default router;
