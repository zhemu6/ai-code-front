import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'

// 这个文件用于设置路由 定义每个路由 其中每个path需要对应一个component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // 懒加载 在实际打包部署的时候会分开打包加载 速度更快
      component: () => import('@/pages/HomeView.vue'),
    },
  ],
})

export default router
