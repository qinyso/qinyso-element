<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container">
<er-button size="small">这是一个小按钮</er-button>
<br>
<er-button size="medium">这是一个中等按钮</er-button>
<br>
<er-button size="large">这是一个大按钮</er-button>
<h2>点击效果测试</h2>
<erButton variant="primary" size="xlarge">点击有粒子</erButton>
<erButton variant="ghost" size="xlarge">幽灵按钮</erButton>
<h2>圆角按钮</h2>
  <erButton variant="primary" rounded size="jumbo">圆角巨型按钮</erButton>
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
