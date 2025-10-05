import { cloudflare } from "@cloudflare/vite-plugin";
import path from "path";
import { defineConfig } from "vite";
import ssrPlugin from "vite-ssr-components/plugin";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [cloudflare(), ssrPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
