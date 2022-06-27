import React from "react";

import GlobalStyle from "./components/GlobalStyle";

import { ThemeProvider } from "styled-components";
import counterStrike from "react95/dist/themes/counterStrike";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { Route, BrowserRouter, Routes } from 'react-router-dom'

import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Nav from './components/Nav'
import ContactMe from "./pages/ContactMe";

function App() {
  library.add(fab, fas)

  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={counterStrike}>

        <Nav />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />}>
            <Route path="/portfolio/:slug" element={<Portfolio />} /> 
          </Route>
          <Route path="/contact" element={<ContactMe />} />
        </Routes>

      </ThemeProvider>
    </div>
  );
}

export default App;

// todo
/**  
  • Explorar como é possível renderizar um componente do react em cima de outro
      https://stackoverflow.com/questions/59456903/react-route-to-be-render-inside-another-component
  • Verificar se o PortfolioDetail.js está ok
*/