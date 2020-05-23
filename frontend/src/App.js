import React from "react";

// Routes
import Routes from "./routes";

// Styles
import { ThemeProvider } from "styled-components";
import theme from "./theme";

// Global Styles
import GlobalStyles from "./theme/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
