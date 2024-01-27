import { resolve } from "path";
import { defineConfig } from "vite";

// This appears to solve the "Uncaught TypeError: Cannot read properties of undefined (reading 'from')" issue
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [nodePolyfills()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
