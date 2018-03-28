module.exports = {
    extends: "airbnb",
    env: {
        "browser": true,
        "node": true
    },
    rules: {
        "react/jsx-filename-extension": [
            "error", {
                "extensions": [".js", ".jsx"]
            }
        ],
        "semi": ["error", "never"]
    }

};