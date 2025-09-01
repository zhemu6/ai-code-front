import { createRouter, createWebHistory } from 'vue-router'

// 这个文件用于设置路由 定义每个路由 其中每个path需要对应一个component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // 懒加载 在实际打包部署的时候会分开打包加载 速度更快
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/user/login',
      name: '用户登录',
      component: () => import('@/pages/user/UserLoginPage.vue'),
    },
    {
      path: '/user/register',
      name: '用户注册',
      component: () => import('@/pages/user/UserRegisterPage.vue'),
    },
    {
      path: '/admin/userManager',
      name: '用户管理',
      component: () => import('@/pages/admin/UserManagerPage.vue'),
    },

  ],
})

export default router
