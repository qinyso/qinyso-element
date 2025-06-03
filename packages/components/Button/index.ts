// 相对路径导入本地组件
import Button from './Button.vue';
// 使用路径别名导入工具函数
import { withInstall } from '../../utils/install';
// 定义并导出具名常量ErButton
export const ErButton = withInstall(Button)// 同时提供默认导出aa

