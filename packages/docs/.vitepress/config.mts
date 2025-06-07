import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "qinyso-element",
  description: "小白手搓的基础组件库",
  base: "/qinyso-element/",
  
  // 新增：忽略死链接检查（因为构建时本地服务器未运行）
  ignoreDeadLinks: true,
  
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '组件文档', link: '/components/button' }, // 指向实际组件页面
      { text: '示例', link: '/markdown-examples' }
    ],

    // 侧边栏配置
    sidebar: [
      {
        text: '组件文档',
        items: [
          { text: '按钮组件', link: '/components/button' }, // 实际组件路径
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'API 示例', link: '/api-examples' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/qinyso/qinyso-element' }
    ]
  },
  
  // 新增：修复 CSS 选择器转换问题
  vite: {
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    }
  }
})