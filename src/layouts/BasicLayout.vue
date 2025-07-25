<template>
  <a-config-provider :locale="locale">
    <a-layout class="basic-layout">
      <GlobalHeader />
      <a-layout-content class="main-content">
        <router-view />
      </a-layout-content>
      <GlobalFooter />
    </a-layout>
  </a-config-provider>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import { ref } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

const locale = ref(zhCN)

</script>

<style scoped>
.basic-layout {
  min-height: 100vh;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 24px;
  margin-top: 64px;
  margin-bottom: 56px;
  min-height: 300px;
}

@media (max-width: 600px) {
  .main-content {
    padding: 8px;
    margin-top: 48px;
    margin-bottom: 48px;
  }
}
</style>
