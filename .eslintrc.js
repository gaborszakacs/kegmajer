module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "jsx-a11y/img-has-alt": 0, // Definition for this rule was not found
  },
  "env": {
    "browser": true,
  }
};
