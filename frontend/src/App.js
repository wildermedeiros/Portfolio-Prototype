import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import counterStrike from "react95/dist/themes/counterStrike";


import { Route, BrowserRouter, Routes } from 'react-router-dom'


import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Nav from './components/Nav'
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={counterStrike}>

        <Nav />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactMe />} />

        </Routes>

      </ThemeProvider>
    </div>
  );
}

export default App;
