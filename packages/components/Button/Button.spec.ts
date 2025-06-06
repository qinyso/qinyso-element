// Button.spec.ts
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from './Button.vue';

// 描述 Button 组件测试
describe('Button Component', () => {
  // 1. 基础渲染测试
  it('should render slot content correctly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '测试按钮'
      }
    });
    // 验证按钮文本
    expect(wrapper.text()).toContain('测试按钮');
    // 验证基础类名
    expect(wrapper.classes()).toContain('neon-button');
  });

  // 2. 禁用状态测试
  it('should apply disabled state', () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    });
    // 验证 disabled 属性
    expect(wrapper.attributes('disabled')).toBe('');
    // 验证禁用类名
    expect(wrapper.classes()).toContain('neon-button--disabled');
  });

  // 3. 点击事件测试（非禁用时触发）
  it('should emit click event when enabled', async () => {
    const wrapper = mount(Button);
    // 模拟点击
    await wrapper.trigger('click');
    // 验证事件触发
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  // 4. 点击事件测试（禁用时不触发）
  it('should not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    });
    await wrapper.trigger('click');
    // 验证事件未触发
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  // 5. 加载状态测试
  it('should show loader when loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true }
    });
    // 验证加载动画存在
    expect(wrapper.find('.neon-button__loader').exists()).toBe(true);
  });

  // 6. 粒子效果测试（简化版，验证容器变化）
  it('should create particles on click', async () => {
    const wrapper = mount(Button);
    // 模拟点击前的粒子容器
    const particlesBefore = wrapper.find('.neon-button__particles').html();
    
    // 模拟点击
    await wrapper.trigger('click');
    
    // 模拟点击后的粒子容器
    const particlesAfter = wrapper.find('.neon-button__particles').html();
    
    // 验证粒子生成（简单判断内容变化）
    expect(particlesAfter).not.toEqual(particlesBefore);
  });

  // 7. 尺寸变体测试（xlarge）
  it('should apply xlarge size class', () => {
    const wrapper = mount(Button, {
      props: { size: 'xlarge' }
    });
    expect(wrapper.classes()).toContain('neon-button--xlarge');
  });

  // 8. 幽灵按钮样式测试
  it('should apply ghost variant class', () => {
    const wrapper = mount(Button, {
      props: { variant: 'ghost' }
    });
    expect(wrapper.classes()).toContain('neon-button--ghost');
  });

  // 9. 圆角样式测试
  it('should apply rounded class', () => {
    const wrapper = mount(Button, {
      props: { rounded: true }
    });
    expect(wrapper.classes()).toContain('neon-button--rounded');
  });
});