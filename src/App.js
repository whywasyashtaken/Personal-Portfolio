// App.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import './components/styles/Slide.module.css'; // Import the CSS module
import "./App.css"

// Component to handle dynamic title updates
function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const getPageTitle = (pathname) => {
      switch (pathname) {
        case '/yashb196/':
          return 'Yash Bhatia - Full-Stack Developer Portfolio';
        case '/yashb196/about':
          return 'About - Yash Bhatia Portfolio';
        case '/yashb196/skills':
          return 'Skills - Yash Bhatia Portfolio';
        case '/yashb196/experience':
          return 'Experience - Yash Bhatia Portfolio';
        case '/yashb196/education':
          return 'Education - Yash Bhatia Portfolio';
                case '/yashb196/projects':
                  return 'Projects - Yash Bhatia Portfolio';
                case '/yashb196/research':
                  return 'Research - Yash Bhatia Portfolio';
                case '/yashb196/contact':
                  return 'Contact - Yash Bhatia Portfolio';
        default:
          return 'Yash Bhatia - Full-Stack Developer Portfolio';
      }
    };

    document.title = getPageTitle(location.pathname);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <TitleUpdater />
      <Navbar />
      <Routes>
        <Route path="/yashb196/" element={<Home />} />
        <Route path="/yashb196/about" element={<About />} />
        <Route path="/yashb196/skills" element={<Skills />} />
        <Route path="/yashb196/experience" element={<Experience />} />
        <Route path="/yashb196/education" element={<Education />} />
                <Route path="/yashb196/projects" element={<Projects />} />
                <Route path="/yashb196/research" element={<Research />} />
                <Route path="/yashb196/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
