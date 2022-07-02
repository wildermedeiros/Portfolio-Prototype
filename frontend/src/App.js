import React from "react";

import GlobalStyle from "./components/GlobalStyle";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { Route, Routes , useLocation} from 'react-router-dom'

import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Nav from './components/Nav'
import ContactMe from "./pages/ContactMe";
import Admin from "./pages/Admin";
import { LoginForm, SignupForm } from "./components/auth/Authentication";

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
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
