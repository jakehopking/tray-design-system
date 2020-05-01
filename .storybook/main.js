// https://storybook.js.org/addons/
module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
};
