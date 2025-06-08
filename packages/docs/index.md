欢迎来到我的 qinyso-element 世界！
layout: home

hero:
name: "qinyso-element"
text: "纯新手手搓的 Vue3 组件库"
tagline: 代码写得超烂，但按钮会放 "粒子烟花"！求大佬带带我 哭哭
image:
src: /logo.png # 放在 docs/.vitepress/public 目录
alt: qinyso-element Logo
actions:

theme: brand
text: 看按钮演示
link: /components/button
theme: alt
text: 去 GitHub 笑我代码
link: https://github.com/qinyso/qinyso-element

features:

title: 我是纯纯新手
details: 写组件库像闯关！按钮的粒子效果改了 800 遍... 但最后做出来啦！
title: 按钮会 "放烟花"
details: 点 <er-button /> 能掉粒子！虽然实现时差点把自己绕晕，但效果超酷！
title: 求大佬指导 
本地体验步骤（无需发布到 NPM）
1. 克隆项目到本地

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
5. 访问演示页面
在浏览器中打开：http://localhost:5173
实际操作示例
以下是完整的命令行操作过程，你可以直接复制粘贴：

bash
# 克隆项目
git clone https://github.com/qinyso/qinyso-element.git
cd qinyso-element

# 安装依赖
pnpm install

# 进入演示项目
cd packages/play

# 启动开发服务器
pnpm run dev

启动成功后，你将看到类似以下输出：

plaintext
  VITE v5.4.19  ready in 622 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

此时打开浏览器访问 http://localhost:5173，即可看到 App.vue 中展示的组件效果。
修改组件实时预览
如果你想修改组件代码并实时预览效果，可以：

在编辑器中打开 packages/button 目录
修改组件源码（如 Button.vue）
保存文件后，浏览器会自动刷新，显示最新效果
我踩过的超蠢坑！
坑 1：路径写错
最开始我从错误的路径引入组件，卡了 2 小时...
正确做法：确保 packages/play/src/main.ts 中正确引入组件：

typescript
import { createApp } from 'vue'
import App from './App.vue'
import QinysoElement from 'qinyso-element' // 引入组件库
import 'qinyso-element/dist/style.css' // 引入样式

createApp(App)
  .use(QinysoElement) // 注册组件库
  .mount('#app')

# 核心技术栈  

- **框架基础**：基于 `Vue 3` 开发，深度利用 `Composition API` 优化逻辑复用，让组件代码更简洁、可维护；  
- **文档构建**：采用 `VitePress` 生成静态文档站点，支持 Markdown 快速编写示例，本地开发热更新秒级响应；  
- **包管理**：使用 `pnpm` 作为包管理器，结合 `Monorepo` 单体仓库架构，实现多包（组件库、文档、工具库）高效协同
坑 1：工作流配置
GitHub Actions 配了好多遍，权限问题真的坑！
避坑指南：本地开发阶段可以先忽略 CI/CD，专注于组件实现。
求大佬帮忙！
如果你在使用过程中遇到任何问题，或者有更酷的想法，欢迎提 issue 教我！
现在就去试试吧～ 要是觉得好玩，给我 GitHub 点个 star 🌟 吧！