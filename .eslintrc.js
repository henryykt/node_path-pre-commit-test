module.exports = {
    env: {
        node: true,
        mocha: true,
        es6: true
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    globals: {},
    parserOptions: {
        ecmaVersion: 2015
    },
    plugins: ["prettier"],
    rules: {
        "no-unused-vars": ["error", { args: "none" }],
        "no-constant-condition": ["error", { checkLoops: false }],
        "no-prototype-builtins": "off",
        "max-len": ["error", { code: 80, ignoreComments: true }],
        "prettier/prettier": "error"
    }
};
