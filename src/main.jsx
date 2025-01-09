import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme.js";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { RouterProvider } from "react-router-dom";
import Router from "./Views/Components/Routes.jsx";
import './i18n.js'
import ContextApi from "./Views/Components/ContextApi.jsx";

// Create RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextApi>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={Router} />
        </ThemeProvider>
      </CacheProvider>
    </ContextApi>
  </StrictMode>
);
