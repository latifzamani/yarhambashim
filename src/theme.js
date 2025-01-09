import { createTheme } from "@mui/material/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import {jssPreset } from "@mui/styles";

const theme = createTheme({
  direction: "rtl",
});
// console.log(theme);

// Configure JSS for RTL
const jss = create({ plugins: [...jssPreset().plugins, rtl] });

export { theme, jss };
