import type{App,Plugin} from "vue";// 导入vue的App和Plugin插件
import{each} from "lodash-es";// 导入lodash库的each遍历函数
type SFCWithInstall<T> =T & Plugin;// 定义一个类型SFCWithINstall，它是T的子类型，并且带有Plugin接
export function makeInstaller(components:Plugin[]){
    const installer =(app:App)=>each(components,(c)=>app.use(c))
    return installer as Plugin;
}// 定义一个makeInstaller函数，用于批量创建 Vue 组件的安装器，简化组件库的使用方式。
export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = (app: App) => {//添加install方法
        const name = (component as any).name;// 获取组件name属性
        app.component(name, component as Plugin);// 使用 Vue 的 API 注册组件
    };
    return component as SFCWithInstall<T>;//返回增强后的组件
};// 一个 “语法糖” 工具,给组件添加 install 方法，让组件既能作为普通组件使用，也能作为插件被全局注册。定义一个withInstall函数，用于给组件添加安装器，简化组件库的使用方式。

//组件库开发的 基础设施，它通过 插件化设计 和 批量注册机制，让组件库的使用更加便捷、灵活。