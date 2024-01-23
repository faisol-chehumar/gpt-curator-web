/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
