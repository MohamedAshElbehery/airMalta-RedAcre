const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    defaultCommandTimeout: 10000,

    pageLoadTimeout: 20000,

    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        console.log(launchOptions.args);
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });
    },
    
  },
});
