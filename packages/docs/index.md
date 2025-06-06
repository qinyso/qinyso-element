# 欢迎来到我的 qinyso-element 世界！

layout: home

hero:
  name: "qinyso-element"
  text: "纯新手手搓的 Vue3 组件库"
  tagline: 代码写得超烂，但按钮会放"粒子烟花"！求大佬带带我 哭哭
  image:
    src: /logo.png # 放在 docs/.vitepress/public 目录
    alt: qinyso-element Logo
  actions:
    - theme: brand
      text: 直接看按钮怎么用
      link: /markdown-examples
    - theme: alt
      text: 去 GitHub 笑我代码
      link: <https://github.com/qinyso/qinyso-element>

features:
  - title: 我是纯纯新手
    details: 写组件库像闯关！按钮的粒子效果改了800遍...但最后做出来啦！
  - title: 按钮会"放烟花"
    details: 点 `<er-button />` 能掉粒子！虽然实现时差点把自己绕晕，但效果超酷！
  - title: 求大佬指导
    details: 代码肯定有一堆bug，欢迎提issue骂醒我（轻点儿骂 害怕.jpg）

## 先看最炫的按钮组件！



![按钮示例](/button-demo.png) <!-- 放在 docs/.vitepress/public 目录 -->

### 怎么用？看我真实踩坑经历！

#### 1. 引入组件
```vue
<script setup lang="ts">
import { ErButton } from 'qinyso-element';
</script>

<template>
  <!-- 小按钮 -->
  <er-button size="small">点我变小！</er-button>
  
  <!-- 幽灵按钮 -->
  <er-button variant="ghost" size="xlarge">幽灵来咯</er-button>
  
  <!-- 点我掉粒子！ -->
  <er-button variant="primary" size="xlarge" @click="test">点我放烟花</er-button>
</template>

<script setup>
import { ErButton } from 'qinyso-element';

const test = () => {
  alert('粒子特效触发！');
};
</script>
我踩过的超蠢坑！
坑 1：路径写错
最开始我从错误的路径引入组件，卡了 2 小时...
坑 2：工作流配置
GitHub Actions 配了 5 遍才成功，权限问题真的坑！
最后求帮忙！
如果你用 <er-button /> 遇到问题，或者有更酷的想法，欢迎提 issue 教我！
现在就去试试吧！要是觉得好玩，给我 GitHub 点个 star 吧～
复制






