import { createTheme } from "@mui/material/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import {jssPreset } from "@mui/styles";


const direction = 'rtl';
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: direction === 'rtl' ? 'Vazir, Arial' : 'Roboto, Arial',
  },
});
// console.log(theme);

// Configure JSS for RTL
const jss = create({ plugins: [...jssPreset().plugins, rtl] });

export { theme, jss };
