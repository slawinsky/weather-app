export const env = {
  browser: true,
  es2020: true,
};
export const extends = [
  "eslint:recommended",
  "airbnb-base",
  "plugin:react/recommended",
];
export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 11,
  sourceType: "module",
};
export const plugins = ["react"];
export const rules = {};
