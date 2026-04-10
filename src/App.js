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
import Projects from './pages/Projects';
import CTA from './pages/CTA';
import PyramidGroup from './about/PyramidGroup';
// Other full pages
import Contact from './pages/Contact';
import GuidingPrinciples from './about/GuidingPrinciples';
import History from './about/History';
import Management from './about/Management';
import Leadership from './about/Leadership';  
import Markets from './about/Markets';
import OilGas from './products/OilGas';
import Midstream from './products/Midstream'; 
import Biochemical from './products/BioChemicals';
import SyngasDerivatives from './products/SyngasDerivatives';
import Decarbonization from './products/Decarbonization';
import Digitalization from './products/Digitalization';
import Research from './services/research';
import Project from './services/project-development';
import Epcm from './services/epcm-services';
import Modular from './services/modular';
import EPC from './services/epc';
import ScrollToTop from './components/ScrollToTop';
import Career from './career';
import News from './components/news';
import NewsDetail from './components/NewsDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import GDPRPolicy from './components/GDPRPolicy';
import Certifications from './about/Certifications';



function App() {
  
  const HomePage = () => {
    return (
      <>
        <Home />
        <About />
        <Solutions />
        <Services />
        <Market />
        <Projects />
        <State />
        <CTA />
      </>
    );
  };

  return (
    <Router>
      <ScrollToTop/>
      <div>
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/market" element={<Market />} />
            <Route path="/about/pyramid-e-c-group" element={<PyramidGroup />} />
            <Route path="/about/guiding-principles" element={<GuidingPrinciples />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/management-team" element={<Management />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/markets" element={<Markets />} />

            <Route path="/products/oilgas" element={<OilGas />} />
            <Route path="/products/midstream"element={<Midstream />} />
            <Route path="/products/biochemicals"element={<Biochemical />} />
            <Route path="/products/syngas"element={<SyngasDerivatives />} />
            <Route path="/products/decarbonization"element={<Decarbonization />} />
            <Route path="/products/digitalization"element={<Digitalization />} />

            <Route path='/services/research-and-development'element={<Research />}/>
            <Route path='/services/project-development'element={<Project/>} />
            <Route path='/services/epcm-services'element={<Epcm/>}/>
            <Route path='/services/epc'element={<EPC/>}/>
            <Route path='/services/modular'element={<Modular/>}/>

            <Route path="/career" element={<Career />} />
            
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/gdpr-policy" element={<GDPRPolicy />} />
            <Route path="/about/certifications" element={<Certifications />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;