import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  // base url
  base: "/batch-11/",
  plugins: [tailwindcss()],
});
