module.exports = {
  // говорим, что это главный конфиг для всего проекта
  root: true,

  // парсер, который понимает TypeScript
  parser: "@typescript-eslint/parser",

  // подключаем плагин с правилами для TypeScript
  plugins: ["@typescript-eslint"],

  // базовые наборы правил
  extends: [
    "eslint:recommended", // стандартные правила ESLint
    "plugin:@typescript-eslint/recommended", // правила для TypeScript
    "prettier" // чтобы не конфликтовал с Prettier
  ],

  // указываем окружения, где может выполняться код
  env: {
    es2020: true, // современный JavaScript
    node: true,   // поддержка Node.js
    browser: true // поддержка браузера
  }
};
