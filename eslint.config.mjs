// @ts-check
import vue from 'eslint-plugin-vue'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import prettier from 'eslint-config-prettier'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    ignores: ['node_modules', 'dist', '.nuxt', '.output', 'coverage', '.cache']
  },

  // Vue + TS support
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue']
      }
    },
    plugins: {
      vue,
      '@typescript-eslint': tsPlugin,
      '@stylistic': stylistic
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      // stylistic plugin rules
      '@stylistic/quotes': ['error', 'single']
    }
  },

  // Vue recommended rules (flat config safe)
  ...vue.configs['flat/recommended'],

  // Disable conflicts with Prettier
  prettier,

  {
    rules: {
      // reduce Vue noise
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-indent': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-self-closing': 'off'
    }
  }
]
