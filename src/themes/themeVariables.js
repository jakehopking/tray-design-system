import {px} from "./cssUtilities";

// Set default global spacing unit in px
const _GLOBAL_SPACING_UNIT = 20;

// Fonts
export const FONT = {
  primary: "'Nunito Sans', sans-serif",
  code: "Consolas, Liberation Mono, Menlo, Courier, monospace",
};

// Spacing units
export const SPACING = {
  quarter: px(_GLOBAL_SPACING_UNIT, 0.25),
  half: px(_GLOBAL_SPACING_UNIT, 0.5),
  compact: px(_GLOBAL_SPACING_UNIT, 0.75),
  default: px(_GLOBAL_SPACING_UNIT),
  double: px(_GLOBAL_SPACING_UNIT, 2),
  X3: px(_GLOBAL_SPACING_UNIT, 3),
};

// UI
export const UI = {
  borderRadius: "4px",
  transition: {
    default: "all 250ms ease-out",
  },
};
