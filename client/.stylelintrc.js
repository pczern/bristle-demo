module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'no-missing-end-of-source-newline': false,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'value',
          'at-root',
          'mixin',
          'include',
          'function',
          'if',
          'else',
          'return',
        ],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
  },
}
