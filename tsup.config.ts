import { defineConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  clean: true,
  dts: true,
  entryPoints: {
    index: "src/index.ts",
    types: "src/types.ts",
  },
  format: ["cjs", "esm"],
  minify: isProduction,
  sourcemap: true,
  splitting: false,
  target: "node16",
});
