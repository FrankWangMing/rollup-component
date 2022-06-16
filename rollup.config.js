// rollup.config.js
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
export default {
  // 核心选项
  input: "./src/index.tsx", // 必须
  output: {
    file: "./lib/bundle.js",
    format: "cjs",
  },
  plugins: [
    babel(),
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
    }),
    terser({
      compress: true,
    }),
  ],
  external: [
    "react",
    "framer-motion",
    "rc-queue-anim",
    "@emotion/babel-preset-css-prop",
  ],
};
