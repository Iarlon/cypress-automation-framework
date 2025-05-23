const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
  projectId: "cq8bqy",
  specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 120000,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  env: {
    first_name: "Iarlon",
    webdriveruni_homepage: "https://www.webdriveruniversity.com",
    automationteststore_homepage: "https://www.automationteststore.com",
  },
  baseUrl: "https://www.webdriveruniversity.com",
  },
});
