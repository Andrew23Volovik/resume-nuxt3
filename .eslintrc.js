module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: true,
        tabWidth: 2,
        printWidth: 120,
        singleQuote: true,
        bracketSpacing: true,
        singleAttributePerLine: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/no-v-html': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
      },
    ],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/padding-line-between-blocks': ['error', 'always'],
  },
};
