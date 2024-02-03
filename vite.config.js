import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import ViteReactPlugin from "vite-plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-petslove",
  plugins: [react()],

  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
// ViteReactPlugin()
