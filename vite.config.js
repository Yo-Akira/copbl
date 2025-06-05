import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // 可根据需要添加配置，例如端口、更改公开路径等
});
