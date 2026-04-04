// import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Homepage sections (import each component directly)
import Home from './pages/Home'   // your hero slider
import State from './pages/State';          // stats band
import Solutions from './pages/Solutions';  // solutions grid
import Market from './pages/Market';       
import Services from './pages/Services';    
import About from './pages/About';

// Other full pages
import Contact from './pages/Contact';

function App() {
  // Homepage component – renders all sections in order
  const HomePage = () => {
    // Optional: if you need scroll animations, add useEffect here (like your reference code)
    // For now, it simply returns all sections stacked vertically.
    return (
      <>
        <Home />
        <About />
        <Solutions />
        <Services />
        <Market />
        <State />
      </>
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-black-deep flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/state" element={<State />} /> */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/market" element={<Market />} />
            {/* Redirect extra routes to home */}
            <Route path="/about" element={<HomePage />} />
            <Route path="/products" element={<HomePage />} />
            <Route path="/news" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;