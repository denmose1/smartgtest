import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Alerts from '@/components/Alerts.vue';
import Management from '@/components/Management.vue';
import RetailerStaff from '@/components/retailer_staff.vue';
import Products from '@/components/products.vue';
import Dashboard from '@/components/Dashboard.vue';
import EditAccount from '@/components/EditAccount.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/EditAccount',
      name: 'EditAccount',
      component: EditAccount,
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: Alerts,
    },
    {
      path: '/Management',
      name: 'Management',
      component: Management,
    },
    {
       path: "/staff",
       name: 'RetailerStaff',
      component: RetailerStaff,
    },
    {
       path: "/products",
       name: 'Products',
      component: Products,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
