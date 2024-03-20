import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import rawPlugin from 'vite-plugin-raw';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    rawPlugin({
      extensions: [".pdf"],
    }),
  ],
});
