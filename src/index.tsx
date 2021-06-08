import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import App from "./App";

const app = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
render(app, rootElement);
