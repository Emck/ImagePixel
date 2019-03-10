module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['eslint:recommended'],
    ecmaFeatures: {
        defaultParams: true //  
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-redeclare': 2, //               disallow variable redeclaration
        'no-param-reassign': 2, //          Disallow Reassignment of Function Parameters
        'no-use-before-define': 2, //       Disallow Early Use
        'block-scoped-var': 0, //           Treat var as Block Scoped
        'comma-spacing': [2, { before: false, after: true }], // Enforces spacing around commas
        quotes: ['error', 'single'], //     enforce the consistent use of either backticks, double, or single quotes
        semi: ['error', 'always'], //       require or disallow semicolons instead of ASI
        'spaced-comment': 2, //             Requires or disallows a whitespace (space or tab) beginning a comment 
    }
};
