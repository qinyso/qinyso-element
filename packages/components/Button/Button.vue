<template>
  <button
    ref="buttonRef"
    class="neon-button"
    :class="[
      `neon-button--${variant}`,
      `neon-button--${size}`,
      { 'neon-button--loading': loading },
      { 'neon-button--disabled': disabled || loading },
      { 'neon-button--rounded': rounded }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <span v-if="loading" class="neon-button__loader">
      <span class="neon-button__loader-dot"></span>
      <span class="neon-button__loader-dot"></span>
      <span class="neon-button__loader-dot"></span>
    </span>
    <span v-else class="neon-button__content">
      <slot />
    </span>
    <div class="neon-button__particles" ref="particlesRef"></div>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (val: string) => ['primary', 'secondary', 'accent', 'ghost', 'outline'].includes(val)
  },
  size: {
    type: String,
    default: 'xlarge', // 默认超大尺寸
    validator: (val: string) => ['small', 'medium', 'large', 'xlarge', 'jumbo'].includes(val)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

const buttonRef = ref<HTMLButtonElement | null>(null);
const particlesRef = ref<HTMLDivElement | null>(null);
const gradientPosition = ref('50% 50%');

// 点击处理和粒子效果保持不变...
const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
    createParticles(event);
  }
};

// 幽灵按钮渐变效果...
const handleMouseMove = (event: MouseEvent) => { /* ... */ };
const handleMouseLeave = () => { /* ... */ };

// 创建点击粒子效果
const createParticles = (event: MouseEvent) => {
  if (!buttonRef.value || !particlesRef.value) return;
  
  const rect = buttonRef.value.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  // 创建更多粒子（12个）
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.classList.add('neon-button__particle');
    
    // 随机大小和颜色（更深的蓝色）
    const size = Math.random() * 5 + 3;
    const hue = 200 + Math.random() * 40; // 浅蓝色范围
    const lightness = 30 + Math.random() * 20; // 更深的颜色
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = `hsl(${hue}, 90%, ${lightness}%)`;
    
    // 初始位置
    const startX = event.clientX - rect.left - size / 2;
    const startY = event.clientY - rect.top - size / 2;
    
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    particlesRef.value.appendChild(particle);
    
    // 动画
    const startTime = performance.now();
    const duration = 800 + Math.random() * 400;
    
    const animateParticle = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // 缓动函数
      
      // 计算粒子位置（向外扩散）
      const angle = (i / 12) * Math.PI * 2;
      const distance = (rect.width / 3) * easeProgress;
      const x = startX + Math.cos(angle) * distance;
      const y = startY + Math.sin(angle) * distance;
      
      // 计算透明度和大小
      const opacity = 1 - progress;
      const scale = 1 - (progress * 0.7);
      
      particle.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      particle.style.opacity = `${opacity}`;
      
      if (progress < 1) {
        requestAnimationFrame(animateParticle);
      } else {
        if (particlesRef.value && particle.parentNode === particlesRef.value) {
          particlesRef.value.removeChild(particle);
        }
      }
    };
    
    requestAnimationFrame(animateParticle);
  }
};
</script>

<script lang="ts">
export default {
  name: 'ErButton',
};
</script>

<style scoped>
/* 基础按钮样式（更大尺寸） */
.neon-button {
  margin:20px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease;
  overflow: hidden;
  user-select: none;
  white-space: nowrap;
  padding: 1rem 3rem; /* 更大的内边距 */
  font-size: 1.25rem; /* 更大的字体 */
  line-height: 1.5;
  border-radius: 0.75rem; /* 更大的圆角 */
  font-weight: 500;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 4px 12px rgba(144, 202, 249, 0.4);
}

/* 尺寸调整（新增 jumbo 超大型） */
.neon-button--small { padding: 0.75rem 1.5rem; font-size: 1rem; }
.neon-button--medium { padding: 1rem 2rem; font-size: 1.25rem; }
.neon-button--large { padding: 1.25rem 2.5rem; font-size: 1.375rem; }
.neon-button--xlarge { padding: 1.5rem 3rem; font-size: 1.5rem; }
.neon-button--jumbo { padding: 1.75rem 3.5rem; font-size: 1.75rem; border-radius: 1rem; }

.neon-button--rounded { border-radius: 9999px; }

/* 主色调（保持更浅的蓝色） */
.neon-button--primary {
  color: #ffffff;
  background: linear-gradient(135deg, #BBDEFB, #90CAF9); /* 更浅的蓝色渐变 */
}

.neon-button--primary:hover {
  background: linear-gradient(135deg, #90CAF9, #64B5F6);
  box-shadow: 0 8px 20px rgba(144, 202, 249, 0.5);
  transform: translateY(-3px); /* 更大的上浮效果 */
}

.neon-button--primary:active {
  background: linear-gradient(135deg, #64B5F6, #42A5F5);
  box-shadow: 0 3px 8px rgba(144, 202, 249, 0.4);
  transform: translateY(0);
}

/* 幽灵按钮 */
.neon-button--ghost {
  color: #64B5F6;
  background-color: transparent;
  border: 2px solid #E3F2FD; /* 更浅的边框 */
  background-image: radial-gradient(circle, #E3F2FD 0%, transparent 50%);
  background-size: 300% 300%;
  background-position: var(--bg-pos, 50% 50%);
  transition: background-position 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.neon-button--ghost:hover {
  color: #42A5F5;
  border-color: #BBDEFB;
}

.neon-button--ghost:active {
  color: #2196F3;
  border-color: #90CAF9;
}

/* 其他变体 */
.neon-button--secondary { background: linear-gradient(135deg, #E3F2FD, #BBDEFB); }
.neon-button--accent { background: linear-gradient(135deg, #B3E5FC, #81D4FA); }
.neon-button--outline { color: #64B5F6; border: 2px solid #64B5F6; }

/* 禁用状态 */
.neon-button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

/* 加载动画 */
.neon-button__loader {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.neon-button__loader-dot {
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background-color: currentColor;
  animation: loader-bounce 0.6s infinite alternate;
}

/* 粒子容器 */
.neon-button__particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

/* 粒子样式 */
.neon-button__particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transform-origin: center;
  transition: all 0.2s ease-out;
}

@keyframes loader-bounce {
  from { transform: translateY(0); opacity: 0.6; }
  to { transform: translateY(-0.625rem); opacity: 1; }
}
</style>