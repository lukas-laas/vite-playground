import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-playground",
  build: {
    target: "esnext", //browsers can handle the latest ES features
  },
});
