const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://marketplace-alpha.tendaatacado.com.br/',
  },

  env: {
    MAILOSAUR_API_KEY: "SPHIF7vd31yvEme2Q3jznbd0oLj3KZ3L",
  },
});
