import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline"; // Reseta o CSS para todos os navegadores
import { ThemeProvider } from "@material-ui/core/styles"; // Torna global o tema para toda aplicação
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
