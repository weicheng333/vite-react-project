import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  javascript: true,
  typescript: {
    overrides: {
      'ts/no-empty-object-type': 'off',
      'unicorn/prefer-node-protocol': 'off',
    },
  },
  formatters: {
    html: true,
  },

}, {
  rules: {
    'no-console': 'off',
  },
})
