import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-bg min-h-screen selection:bg-accent-blue/30 selection:text-white">
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/case-study" element={<CaseStudy />} />
        </Routes>
      </div>
    </Router>
  );
}
