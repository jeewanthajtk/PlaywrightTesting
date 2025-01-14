module.exports = {
    default: {
        paths: [
            "./test/features/**/*.feature"
        ],
        require: [
            "./src/step_definitions/**/*.js",
            "./src/utils/hooks.js"
        ],
        format: [
            "allure-cucumberjs/reporter"
        ],
        formatOptions: {
            resultsDir: "allure-results",
        },
        timeout: 240000,
    },
  };