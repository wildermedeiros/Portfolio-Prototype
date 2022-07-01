import React from "react";

import GlobalStyle from "./components/GlobalStyle";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { Route, Routes , useLocation, useNavigate} from 'react-router-dom'

import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Nav from './components/Nav'
import ContactMe from "./pages/ContactMe";
import Admin from "./pages/Admin";

function App() {
  const location = useLocation()
  library.add(fab, fas)

  return (
    <div className="App">
      <GlobalStyle /> 

      {location.pathname !== '/admin' && <Nav />}

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />}>
          <Route path="/portfolio/:slug" element={<Portfolio />} /> 
        </Route>
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
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