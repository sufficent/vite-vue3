import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import path from "path";
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".vue", ".json", ".scss", "*"],
  },
  css: {
    // 引入 autoprefixer
    postcss: {
      plugins: [autoprefixer],
    },
    // 引入全局 scss
    preprocessorOptions: {
      scss: {
        additionalData: `
                         @import '@/assets/style/normalize.scss';
                         @import '@/assets/style/public.scss';
                         `,
      },
    },
  },
});
