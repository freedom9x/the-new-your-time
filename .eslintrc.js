module.exports = {
    extends: "airbnb",
    env: {
        "browser": true,
        "node": true,
        "jest/globals": true
    },
    plugins: ["jest"],
    rules: {
        "react/jsx-filename-extension": [
            "error", {
                "extensions": [".js", ".jsx"]
            }
        ],
        "semi": ["error", "never"],
        "no-underscore-dangle": [0, { "allow": [] }],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        
    }

};