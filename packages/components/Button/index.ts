// 相对路径导入本地组件
import Button from '@toy-element/packages/components/Button/Button.vue';
// 使用路径别名导入工具函数
import { withInstall } from '@toy-element/packages/utils/install';
// 定义并导出具名常量ErButton
export const ErButton = withInstall(Button)// 同时提供默认导出

