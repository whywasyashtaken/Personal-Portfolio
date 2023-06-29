import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './styles/Navbar.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  const handleSetInactive = () => {
    setActiveSection('');
  };

  const [homeRef, homeInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [aboutRef, aboutInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [skillsRef, skillsInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [experienceRef, experienceInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [educationRef, educationInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [projectsRef, projectsInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [contactRef, contactInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        className={styles.link}
        active={activeSection === 'home'}
        onSetActive={handleSetActive}
        onSetInactive={handleSetInactive}
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className={styles.link}
        active={activeSection === 'about'}
        onSetActive={handleSetActive}
        onSetInactive={handleSetInactive}
      >
        About
      </ScrollLink>
      <ScrollLink
        to="skills"
        smooth={true}
        duration={500}
        className={styles.link}
        active={activeSection === 'skills'}
        onSetActive={handleSetActive}
        onSetInactive={handleSetInactive}
      >
        Skills
      </ScrollLink>
      <ScrollLink
        to="experience"
        smooth={true}
        duration={500}
        className={styles.link}
        active={activeSection === 'experience'}
        onSetActive={handleSetActive}
        onSetInactive={handleSetInactive}
      >
        Experience
      </ScrollLink>
      <ScrollLink
        to="education"
        smooth={true}
        duration={500}
        className={styles.link}
        active={activeSection === 'education'}
        onSetActive={handleSetActive}
        onSetInactive={handleSetInactive}
      >
        Education
      </ScrollLink>
      <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        className={styles.link}
        active={activeSection === 'projects'}
        onSetActive={handleSetActive}
        onSetInactive={handleSetInactive}
      >
        Projects
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        className={styles.link}
        active={activeSection === 'contact'}
        onSetActive={handleSetActive}
        onSetInactive={handleSetInactive}
      >
        Contact
      </ScrollLink>
    </motion.nav>
  );
}

export default Navbar;
