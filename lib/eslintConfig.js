module.exports = {
  root: true,
  env: {
    node: true,
    browser: false,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020
  },
  extends: [
    // use the recommended rule set for both plain javascript and vue
    'eslint:recommended',
  ],
  rules: {
    // we should always disable console logs and debugging in production
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-negated-in-lhs': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'block-scoped-var': 2,
    'no-div-regex': 1,
    'no-else-return': 2,
    'no-eval': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-self-compare': 2,
    'no-unused-expressions': [ 2, { allowShortCircuit: true } ],
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-warning-comments': 1,
    'radix': [ 2, 'as-needed' ],
    'vars-on-top': 2,
    'wrap-iife': [ 2, 'inside' ],
    'yoda': 2,
    'strict': [ 2, 'function' ],
  
    'node/global-require': 2,
    'node/handle-callback-err': 1,
    'node/no-new-require': 2,
    'node/no-mixed-requires': 1,
    'node/no-process-env': 2,
    'node/no-process-exit': 2,
    
    'consistent-this': [ 2, 'self' ],
    'func-style': [ 2, 'expression' ],
    'new-parens': 2,
    'newline-after-var': [ 2, 'always' ],
    'no-bitwise': 2,
    'no-continue': 2,
    'no-lonely-if': 2,
    'no-nested-ternary': 2,
    'no-spaced-func': 2,
    'no-unneeded-ternary': 2,
    'space-in-parens': 0,
    'space-infix-ops': 2,
    'space-unary-ops': [ 2, { words: true, nonwords: false } ],
    'arrow-spacing': 2,
    'no-confusing-arrow': 1,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'prefer-arrow-callback': 1,
    'prefer-template': 1,
    'require-yield': 2,
    // 'for-direction': 'off',
    // 'no-await-in-loop': 'off',
    // 'no-compare-neg-zero': 'error', // eslint:recommended
    'no-cond-assign': 'off', // eslint:recommended
    // 'no-constant-condition': 'error', // eslint:recommended
    // 'no-control-regex': 'error', // eslint:recommended
    // 'no-debugger': 'error', // eslint:recommended
    // 'no-dupe-args': 'error', // eslint:recommended
    // 'no-dupe-keys': 'error', // eslint:recommended
    // 'no-duplicate-case': 'error', // eslint:recommended
    // 'no-empty': 'error', // eslint:recommended
    // 'no-empty-character-class': 'error', // eslint:recommended
    // 'no-ex-assign': 'error', // eslint:recommended
    // 'no-extra-boolean-cast': 'error', // eslint:recommended
    // 'no-extra-parens': 'off',
    // 'no-extra-semi': 'error', // eslint:recommended
    // 'no-func-assign': 'error', // eslint:recommended
    // 'no-inner-declarations': 'error', // eslint:recommended
    // 'no-invalid-regexp': 'error', // eslint:recommended
    'no-irregular-whitespace': 'error', // eslint:recommended
    // 'no-obj-calls': 'error', // eslint:recommended
    // 'no-prototype-builtins': 'off',
    // 'no-regex-spaces': 'error', // eslint:recommended
    // 'no-sparse-arrays': 'error', // eslint:recommended
    // 'no-template-curly-in-string': 'off',
    'no-unexpected-multiline': 'error', // eslint:recommended
    // 'no-unreachable': 'error', // eslint:recommended
    // 'no-unsafe-finally': 'error', // eslint:recommended
    // 'no-unsafe-negation': 'off',
    // 'use-isnan': 'error' // eslint:recommended
    'valid-jsdoc': ['error', {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
      prefer: {returns: 'return'},
    }],
    // 'valid-typeof': 'error' // eslint:recommended
  
  
    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------
  
    'accessor-pairs': 2,
    'array-callback-return': 2,
    // 'block-scoped-var': 'off',
    // 'class-methods-use-this': 'off',
    // 'complexity': 'off',
    // 'consistent-return': 'off'
    // TODO(philipwalton): add an option to enforce braces with the
    // exception of simple, single-line if statements.
    'curly': ['error', 'multi-line'],
    'default-case': 2,
    'dot-location': [ 2, 'property' ],
    'dot-notation': 2,
    'eqeqeq': [ 2, 'smart' ],
    'guard-for-in': 'error',
    'no-alert': 1,
    'no-caller': 'error',
    'no-case-declarations': 2,
    // 'no-div-regex': 'off',
    // 'no-else-return': 'off',
    // 'no-empty-function': 'off',
    // 'no-empty-pattern': 'error', // eslint:recommended
    // 'no-eq-null': 'off',
    // 'no-eval': 'off',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    // 'no-extra-label': 'off',
    // 'no-fallthrough': 'error', // eslint:recommended
    // 'no-floating-decimal': 'off',
    // 'no-global-assign': 'off',
    // 'no-implicit-coercion': 'off',
    // 'no-implicit-globals': 'off',
    // 'no-implied-eval': 'off',
    'no-invalid-this': 'error',
    // 'no-iterator': 'off',
    // 'no-labels': 'off',
    // 'no-lone-blocks': 'off',
    // 'no-loop-func': 'off',
    // 'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    // 'no-new': 'off',
    // 'no-new-func': 'off',
    'no-new-wrappers': 'error',
    // 'no-octal': 'error', // eslint:recommended
    // 'no-octal-escape': 'off',
    // 'no-param-reassign': 'off',
    // 'no-proto': 'off',
    // 'no-redeclare': 'error', // eslint:recommended
    // 'no-restricted-properties': 'off',
    // 'no-return-assign': 'off',
    // 'no-script-url': 'off',
    // 'no-self-assign': 'error', // eslint:recommended
    // 'no-self-compare': 'off',
    // 'no-sequences': 'off',
    'no-throw-literal': 'error', // eslint:recommended
    // 'no-unmodified-loop-condition': 'off',
    // 'no-unused-expressions': 'off',
    // 'no-unused-labels': 'error', // eslint:recommended
    // 'no-useless-call': 'off',
    // 'no-useless-concat': 'off',
    // 'no-useless-escape': 'off',
    // 'no-void': 'off',
    // 'no-warning-comments': 'off',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    // 'radix': 'off',
    // 'require-await': 'off',
    // 'vars-on-top': 'off',
    // 'wrap-iife': 'off',
    // 'yoda': 'off',
  
    // Possibe Errors
    // http://eslint.org/docs/rules/#possible-errors
    // -----------------------------------------
    'no-dupe-else-if': 2, // eslint:recommended
    'no-dupe-keys': 2, // eslint:recommended
    'no-duplicate-case': 2, // eslint:recommended
    'no-console': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // @todo Up for debate
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-setter-return': 2, // eslint:recommended
    'no-import-assign': 2, // eslint:recommended
  
  
    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------
    // 'strict': 'off',
  
    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    // 'init-declarations': 'off',
    'no-catch-shadow': 2,
    'no-label-var': 1,
    'no-delete-var': 2, // eslint:recommended
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-undef-init': 2,
    'no-use-before-define': 2,
    'no-restricted-globals': 'off',
    'no-undef': 'error', // eslint:recommended
    'no-undefined': 'off',
    'no-unused-vars': ['error', {args: 'none'}], // eslint:recommended
  
    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    'array-bracket-newline': 'off', // eslint:recommended
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 'off', // eslint:recommended
    'block-spacing': ['error', 'never'],
    'brace-style': 'error',
    'camelcase': ['error', { properties: 'never' }],
    // 'capitalized-comments': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    // 'consistent-this': 'off',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    // 'func-name-matching': 'off',
    // 'func-names': 'off',
    // 'func-style': 'off',
    // 'id-blacklist': 'off',
    // 'id-length': 'off',
    // 'id-match': 'off',
    'indent': [
      'error', 2, {
        'CallExpression': {
          'arguments': 2,
        },
        'FunctionDeclaration': {
          'body': 1,
          'parameters': 2,
        },
        'FunctionExpression': {
          'body': 1,
          'parameters': 2,
        },
        'MemberExpression': 2,
        'ObjectExpression': 1,
        'SwitchCase': 1,
        'ignoredNodes': [
          'ConditionalExpression',
        ],
        },
    ],
    // 'jsx-quotes': 'off',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    // 'line-comment-position': 'off',
    'linebreak-style': 'error',
    // 'lines-around-comment': 'off',
    // 'max-depth': 'off',
    'max-len': ['error', {
      code: 110,
      tabWidth: 2,
      ignoreRegExpLiterals: true,
      ignoreUrls: true,
      ignorePattern: 'ncl\.(module|require)',
    }],
    // 'max-nested-callbacks': 'off',
    // 'max-params': 'off',
    // 'max-statements': 'off',
    // 'max-statements-per-line': 'off',
    // at the end of the line.
    // 'multiline-ternary': 'off',
    'new-cap': 'error',
    // 'new-parens': 'off',
    // 'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',
    // 'no-bitwise': 'off',
    // 'no-continue': 'off',
    // 'no-inline-comments': 'off',
    // 'no-lonely-if': 'off',
    // 'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'error', // eslint:recommended
    // 'no-multi-assign': 'off',
    'no-multiple-empty-lines': ['error', {max: 2}],
    // 'no-negated-condition': 'off',
    // 'no-nested-ternary': 'off',
    'no-new-object': 'error',
    // 'no-plusplus': 'off',
    // 'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    // 'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    // 'no-underscore-dangle': 'off',
    // 'no-unneeded-ternary': 'off',
    // 'no-whitespace-before-property': 'off',
    // 'nonblock-statement-body-position': 'off',
    // 'object-curly-newline': 'off',
    'object-curly-spacing': 'error',
    // 'object-property-newline': 'off',
    'one-var': ['error', {
      var: 'never',
      let: 'never',
      const: 'never',
    }],
    // 'one-var-declaration-per-line': 'off',
    // 'operator-assignment': 'off',
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    // 'padding-line-between-statements': 'off',
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', {allowTemplateLiterals: true}],
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
    'semi': 'error',
    'semi-spacing': 'error',
    // 'semi-style': 'off',
    // 'sort-keys': 'off',
    // 'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      asyncArrow: 'always',
      anonymous: 'never',
      named: 'never',
    }],
    // 'space-in-parens': 'off',
    // 'space-infix-ops': 'off',
    // 'space-unary-ops': 'off',
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    // 'template-tag-spacing': 'off',
    // 'unicode-bom': 'off',
    // 'wrap-regex': 'off',
  
    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------
    // 'arrow-body-style': 'off',
    // recommended. ESLint doesn't support a *consistent* setting so
    // "always" is used.
    'arrow-parens': ['error', 'always'],
    // 'arrow-spacing': 'off',
    'constructor-super': 'error', // eslint:recommended
    'generator-star-spacing': ['error', 'after'],
    // 'no-class-assign': 'off',
    // 'no-confusing-arrow': 'off',
    // 'no-const-assign': 'off', // eslint:recommended
    // 'no-dupe-class-members': 'off', // eslint:recommended
    // 'no-duplicate-imports': 'off',
    'no-new-symbol': 'error', // eslint:recommended
    // 'no-restricted-imports': 'off',
    'no-this-before-super': 'error', // eslint:recommended
    // 'no-useless-computed-key': 'off',
    // 'no-useless-constructor': 'off',
    // 'no-useless-rename': 'off',
    'no-var': 'error',
    // 'object-shorthand': 'off',
    // 'prefer-arrow-callback': 'off',
    'prefer-const': ['error', {destructuring: 'all'}],
    // 'prefer-destructuring': 'off',
    // 'prefer-numeric-literals': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    // 'prefer-template': 'off',
    // 'require-yield': 'error', // eslint:recommended
    'rest-spread-spacing': 'error',
    // 'sort-imports': 'off',
    // 'symbol-description': 'off',
    // 'template-curly-spacing': 'off',
    'yield-star-spacing': ['error', 'after'],
  }
};
