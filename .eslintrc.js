module.exports = {
  root: true,
  extends: ['eslint-config-jklasd2001s'],
  // .js 확장자를 가진 파일은 rules 아래의 규칙을 끄도록 설정합니다.
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn', // or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'import/namespace': 'off',
  },
}
