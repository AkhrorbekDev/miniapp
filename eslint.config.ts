import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pluginCypress from 'eslint-plugin-cypress/flat'
import pluginOxlint from 'eslint-plugin-oxlint'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    ...pluginCypress.configs.recommended,
    files: [
      'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
      'cypress/support/**/*.{js,ts,jsx,tsx}'
    ],
  },
  ...pluginOxlint.configs['flat/recommended'],
  {
    'rules': {
      'vue/no-v-model-argument': 0,
      '@typescript-eslint/no-empty-interface': 0,
      'vue/no-v-for-template-key': 'off',
      'no-lonely-if': 0,
      'no-console': 'off',
      'camelcase': 'off',
      'quotes': [
        'error',
        'single'
      ],
      'max-len': [
        'error',
        {
          'code': 150,
          'tabWidth': 2,
          'ignoreComments': true,
          'ignoreTrailingComments': true,
          'ignoreUrls': true,
          'ignorePattern': 'd="([\\s\\S]*?)"',
          'ignoreStrings': true,
          'ignoreTemplateLiterals': true,
          'ignoreRegExpLiterals': true
        }
      ],
      'vue/first-attribute-linebreak': ['error', {
        'singleline': 'ignore',
        'multiline': 'below'
      }],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          'singleline': 'never',
          'multiline': 'always',
          'selfClosingTag': {
            'singleline': 'never',
            'multiline': 'always'
          }
        }
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          'singleline': {
            'max': 10
          },
          'multiline': {
            'max': 1
          }
        }
      ],
      'no-use-before-define': [
        'error',
        {
          'functions': true,
          'classes': true,
          'variables': true,
          'allowNamedExports': false
        }
      ]
    }
  }
)
