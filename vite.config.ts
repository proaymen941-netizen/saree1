import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async () => {
  const plugins = [
    react(),
    runtimeErrorOverlay(),
  ];

  // Add cartographer plugin only in development on Replit
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
      // تعطيل manualChunks تماماً - هذا هو الحل الأضمن
      chunkSizeWarningLimit: 1500,
    },
    server: {
      host: "0.0.0.0",
      port: 5000,
      strictPort: false,
      allowedHosts: true,
      hmr: process.env.REPL_ID
        ? {
            clientPort: 443,
            protocol: 'wss',
          }
        : true,
      fs: {
        strict: false,
      },
    },
  };
});
