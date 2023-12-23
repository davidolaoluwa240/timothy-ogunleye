// Modules
import { defineConfig } from "vite";

// Plugins
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
});
