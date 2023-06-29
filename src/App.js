// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './components/styles/Slide.module.css'; // Import the CSS module
import "./App.css"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/yashb196/" element={<Home />} />
        <Route path="/yashb196/about" element={<About />} />
        <Route path="/yashb196/skills" element={<Skills />} />
        <Route path="/yashb196/experience" element={<Experience />} />
        <Route path="/yashb196/education" element={<Education />} />
        <Route path="/yashb196/projects" element={<Projects />} />
        <Route path="/yashb196/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
