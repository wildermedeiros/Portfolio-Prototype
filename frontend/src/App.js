import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import counterStrike from "react95/dist/themes/counterStrike";


import { Route, BrowserRouter, Routes } from 'react-router-dom'


import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={counterStrike}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} />

          </Routes>
        </BrowserRouter>

      </ThemeProvider>
    </div>
  );
}

export default App;
