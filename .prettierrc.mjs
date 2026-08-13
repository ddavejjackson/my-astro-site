import { createRequire } from "module";
const require = createRequire(import.meta.url);

/** @type {import("prettier").Config} */
export default {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: true,
  singleQuote: true,
};
