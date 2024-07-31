import { defineConfig } from "tsup";

export default defineConfig({
  // The formats that we want our code to be compiled to
  format: ["cjs", "esm"],
  // The entry point of the application
  entry: ["./src/index.ts"],
  // Generate TypeScript declaration files
  // Output directory
  outDir: "dist",
  dts: true,
  // Include shims for Node.js built-ins like `Buffer`
  shims: true,
  // Skip bundling `node_modules`
  skipNodeModulesBundle: true,
  // Clean the output directory before each build
  clean: true,
});
