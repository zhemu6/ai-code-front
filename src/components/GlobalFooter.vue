<template>
  <a-layout-footer class="global-footer">
    <span>
      智码 AI 零代码应用生成平台 by
      <a href="https://github.com/zhemu6" target="_blank" rel="noopener">ShihaoLu</a>
    </span>
  </a-layout-footer>
</template>

<script setup lang="ts">
// 无需逻辑
</script>

<style scoped>
.global-footer {
  text-align: center;
  color: #888;
  background: #f5f5f5;
  padding: 16px 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  font-size: 14px;
}
.global-footer a {
  color: #1677ff;
  text-decoration: none;
  margin-left: 4px;
}
</style>