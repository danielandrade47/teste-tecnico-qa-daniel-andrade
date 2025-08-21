const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.automationtesting.in",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});