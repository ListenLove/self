import Vue from 'vue'
import VueRouter from 'vue-router'
import Description from "@/views/Description";
import Dashboard from "@/views/Dashboard";
Vue.use(VueRouter)

const routes = [
  /*{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
  {
    path: '/',
    redirect: '/description',
  },
  {
    path:'/description',
    name: 'Description',
    component: Description,
  },
  {
    path:'/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  /*{
    path: '/register',
    name: 'Register',
    component: () => import('@/components/Register.vue'),
  }*/

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
