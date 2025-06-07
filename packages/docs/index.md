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




根据这个md写
欢迎来到我的 qinyso-element 世界！
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
link: /components/button
- theme: alt
text: 去 GitHub 笑我代码
link: https://github.com/qinyso/qinyso-element

features:

title: 我是纯纯新手
details: 写组件库像闯关！按钮的粒子效果改了800遍...但最后做出来啦！
title: 按钮会"放烟花"
details: 点 <er-button /> 能掉粒子！虽然实现时差点把自己绕晕，但效果超酷！
title: 求大佬指导
details: 代码肯定有一堆bug，欢迎提issue骂醒我（轻点儿骂 害怕.jpg）
先看最炫的按钮组件！

按钮示例
image
怎么用？看我真实踩坑经历！
1. 引入组件
vue
<script setup lang="ts">
import { ErButton } from 'qinyso-element';
</script>

<template>
  <!-- 小按钮 -->
  <er-button size="small">点我变小！</er-button>
  
  <!-- 幽灵按钮 -->
  <er-button variant="ghost" size="xlarge">幽灵来咯</er-button>
  
  <!-- 点我掉粒子！ -->
  <er-button variant="primary" size="xlarge" @click="triggerParticles">点我放烟花</er-button>
</template>

<script setup lang="ts">
const triggerParticles = () => {
  // 粒子特效逻辑
  alert('粒子特效触发！快去看动画～');
};
</script>
我踩过的超蠢坑！
坑 1：路径写错
最开始我从错误的路径引入组件，卡了 2 小时...
正确做法：确保 package.json 中 main 字段指向正确的入口文件，且组件导出路径与引入路径一致。
坑 2：工作流配置
GitHub Actions 配了 5 遍才成功，权限问题真的坑！
避坑指南：检查 Actions 配置中的 NODE_AUTH_TOKEN 是否正确，以及打包命令是否包含必要的构建步骤。
最后求帮忙！
如果你用 <er-button /> 遇到问题，或者有更酷的想法，欢迎提 issue 教我！
现在就去试试吧～ 要是觉得好玩，给我 GitHub 点个 star 🌟 吧！

bash
# 安装体验
pnpm add qinyso-element
# 或
npm install qinyso-element

请注意我还没有发布到nvm
欢迎来到我的 qinyso-element 世界！
layout: home

hero:
name: "qinyso-element"
text: "纯新手手搓的 Vue3 组件库（开发中，未发布到 NPM）"
tagline: 代码写得超烂，但按钮会放 "粒子烟花"！求大佬带带我 哭哭
image:
src: /logo.png # 放在 docs/.vitepress/public 目录
alt: qinyso-element Logo
actions:

theme: brand
text: 本地体验按钮
link: /components/button
theme: alt
text: 去 GitHub 克隆代码
link: https://github.com/qinyso/qinyso-element

features:

title: 我是纯纯新手
details: 写组件库像闯关！按钮的粒子效果改了 800 遍... 但最后做出来啦！
title: 按钮会 "放烟花"
details: 点 <er-button /> 能掉粒子！虽然实现时差点把自己绕晕，但效果超酷！
title: 求大佬指导
details: 代码肯定有一堆 bug，欢迎提 issue 骂醒我（轻点儿骂 害怕.jpg），也可直接 PR 帮我改！
先看最炫的按钮组件！

按钮示例
image
本地体验方式（未发布到 NPM，需手动引入）
1. 从 GitHub 克隆项目
bash
# 克隆仓库
git clone https://github.com/qinyso/qinyso-element.git
cd qinyso-element

# 安装依赖
pnpm install

# 编译组件库
pnpm run build
2. 在你的项目中引用（两种方式）
方式一：通过 npm link 本地链接（开发调试用）
bash
# 在 qinyso-element 根目录执行
pnpm link

# 在你的项目中执行
pnpm link qinyso-element
方式二：直接依赖 GitHub 仓库（生产环境建议）
bash
# 在你的项目中安装
pnpm add git+https://github.com/qinyso/qinyso-element.git#main
3. 在项目中使用组件
1. 克隆项目到本地
bash
git clone https://github.com/qinyso/qinyso-element.git
cd qinyso-element

2. 安装依赖
bash
pnpm install

3. 进入演示项目目录
bash
cd packages/play

4. 启动开发服务器
bash
pnpm run dev

我踩过的超蠢坑！
坑 1：路径写错
最开始我从错误的路径引入组件，卡了 2 小时...
正确做法：本地开发时确保 package.json 的 main 指向编译后的入口文件（如 dist/index.js），且通过 pnpm link 后路径会自动解析。
坑 2：工作流配置
GitHub Actions 配了 5 遍才成功，权限问题真的坑！
避坑指南：本地调试时可先忽略 Actions，优先用 pnpm run build 确认组件编译正常，发布前再配置 CI/CD。
求大佬帮忙！（超重要）
因为还没发布到 NPM，目前只能通过 GitHub 安装，如果你遇到：

安装报错 ❌
组件功能 bug 🐛
想添加新功能 ✨

欢迎直接在 GitHub 提 issue 教我！也可以直接 fork 后提 PR 帮我改代码～

现在就去克隆仓库试试吧～ 要是觉得好玩，给我 GitHub 点个 star 🌟 吧！

bash
# 克隆仓库命令（再贴一次方便复制）
git clone https://github.com/qinyso/qinyso-element.git