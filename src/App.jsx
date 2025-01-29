import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Importa los componentes de las diferentes páginas
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigationbar from './components/Navbars/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;