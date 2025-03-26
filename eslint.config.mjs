import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    // Custom Rules Add Here
    rules: {
      "react/no-unescaped-entities": 1, // 1 = "warn", 2 = "error"
    },
  },
];

export default eslintConfig;
