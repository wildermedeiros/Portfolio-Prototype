import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import counterStrike from "react95/dist/themes/counterStrike";

import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={counterStrike}>
         <AboutUs/>
      </ThemeProvider>
    </div>
  );
}

export default App;
