import { configure, addParameters } from "@storybook/react";
import { create } from "@storybook/theming";

import "../styles/tailwindcss.min.css";

const theme = create({
  base: "light",
  appContentBg: "#F3F3F3"

  // // Typography
  // fontBase: 'Inter, sans-serif',

  // brandTitle: 'Concert UI',
  // brandImage: 'https://concert.io/img/concert-logo.svg',
});

addParameters({
  options: {
    theme: theme
  }
});

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);
