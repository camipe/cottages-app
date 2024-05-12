import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': [
      'error',
      'type',
    ],
  },
  ignores: ['preset/aura/**/*'],
})
