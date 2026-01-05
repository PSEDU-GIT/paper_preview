import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "prod";

  return {
    base: isProduction ? "/preview/" : "/",
    plugins: [react(), vanillaExtractPlugin()],
    server: {
      port: 5173,
      open: false,
    },
  };
});
