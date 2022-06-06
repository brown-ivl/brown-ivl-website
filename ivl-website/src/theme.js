import { createTheme } from "@mui/material/styles";

const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 1000,
  lg: 1100,
  xl: 1536,
};

const breakpointsValues = {
  breakpoints: {
    values: BREAKPOINTS,
  },
};

// to add on custom theming along with this:
// https://stackoverflow.com/questions/62728216/materialui-custom-breakpoints-not-applied

export const theme = createTheme(breakpointsValues);
