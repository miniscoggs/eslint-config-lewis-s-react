"use strict";

module.exports = {
  root: true,
  extends: [
    "airbnb",
    "airbnb/hooks",
  ],
  plugins: ["react"],
  parserOptions: {
    emcaFeatures: {
      ecmaVersion: 6,
      jsx: true,
      impliedStrict: true
    }
  },
  rules: {
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    "comma-dangle": ["error", "only-multiline"],
    "max-len": ["error", { "code": 120 }],
    "no-else-return": ["error", { "allowElseIf": true }],
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "react/jsx-props-no-spreading": 0,
    "react/static-property-placement": ["error", "static public field"]
  }
};
