import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '@/views/Home.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  //我有这3个页面，默认页面跳转到money
  {
    path: '/',
    redirect: '/money'//我要跳转到/money路径
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',  //指定路径
    component: Labels  //指定内容，但是并没有告诉在那个位置显示
  },
  {
    path: '/statistics',
    component: Statistics
  },
];

const router = new VueRouter({
  routes
});

export default router;
