import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "extension",
      fileName: (format) => "main.js",
      formats: ["umd"],
    },
  },
  plugins: [
    vue(),
    copy({
      verbose: true,
      hook: "writeBundle",
      targets: [{ src: "src/manifest.json", dest: "dist" }],
    }),
  ],
});
