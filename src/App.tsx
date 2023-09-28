import React from 'react'
import About from './components/About'
import { BrowserRouter as Router,
  Routes, 
  Route, 
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ContactMe from './components/ContactMe';
// import VanPage from './components/articles/VanPage';
import NavBar2 from './components/NavBar2';

function App() {

  return (
    <HelmetProvider>
      <Router>
        <NavBar2 />
        <div>
          <Routes>
            {/* <Route path="/" element={<VanPage />} /> */}
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
