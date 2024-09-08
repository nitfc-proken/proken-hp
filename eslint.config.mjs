import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin"
import js from "@eslint/js"

export default [
  js.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "@stylistic": stylistic,
    }
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@stylistic/indent": ["error", 2]
    }
  }
];