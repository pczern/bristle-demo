module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
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
