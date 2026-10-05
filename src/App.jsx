import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import AllProjects from './components/AllProjects';
import Footer from './components/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';
import About from './components/About';
import Skills from './components/Skills';
import Details from './components/Details';

function App() {
  const location = useLocation();
  useScrollAnimation(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const mainContent = (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Details />
    </>
  );

  return (
    <div className="app-container" style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={mainContent} />
          <Route path="/all" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
