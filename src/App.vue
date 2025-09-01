<template>
  <BasicLayout />
</template>


<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'

import { healthCheck } from '@/api/healthController.ts'

healthCheck().then((res) => {
  console.log(res)
})

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
console.log(dayjs().format('dddd')) // 输出应该是“星期四”而不是“Thursday”
</script>



<style scoped>

</style>
