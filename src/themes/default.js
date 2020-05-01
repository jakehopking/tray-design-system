// styled-theme is plugin for styled-components
// Note: First time to try this tool. I think it's clever, but in hindsight I would prefer more manual control over the theme, through exported const object declarations and custom helper functions. See ./themeVariables for my prefered approach.
import {reversePalette} from "styled-theme/composer";

const theme = {};

theme.palette = {
  // Blue gradient map
  primary: ["#0d66e5", "#3a7dee", "#5994f5", "#77abfa", "#96c1ff"],
  danger: ["#d32f2f", "#f44336", "#f8877f", "#ffcdd2"],
  alert: ["#ffa000", "#ffc107", "#ffd761", "#ffecb3"],
  success: ["#388e3c", "#4caf50", "#7cc47f", "#c8e6c9"],
  white: ["#fff", "#fff", "#eee"],
  greyscale: [
    "#212121",
    "#414141",
    "#616161",
    "#9e9e9e",
    "#bdbdbd",
    "#e0e0e0",
    "#eeeeee",
    "#ffffff",
  ],
};

theme.reversePalette = reversePalette(theme.palette);

export default theme;
