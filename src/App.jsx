import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Details from './components/Details';
import Footer from './components/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  useScrollAnimation();
  return (
    <div className="app-container" style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills/>
        <Details />
      </main>
      <Footer />
    </div>
  );
}

export default App;