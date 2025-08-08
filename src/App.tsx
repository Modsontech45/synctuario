import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;