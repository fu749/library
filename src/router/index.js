// src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './home.js'  // 引入路由配置

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
