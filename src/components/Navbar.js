import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './styles/Navbar.module.css';
import { motion } from 'framer-motion';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [menuActive, setMenuActive] = useState(false);

  const handleSetActive = (section) => {
    setActiveSection(section);
    setMenuActive(false); /* Change here */
  };

  const handleSetInactive = () => {
    setActiveSection('');
  };

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };


  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <button className={styles['menu-icon']} onClick={handleMenuClick}>
        🍔
      </button>
      <ul className={`${styles['nav-links']} ${menuActive ? styles.active : ''}`}>
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className={styles.link}
            active={activeSection === 'home'}
            onSetActive={() => handleSetActive('home')}
            onSetInactive={handleSetInactive}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={styles.link}
            active={activeSection === 'about'}
            onSetActive={() => handleSetActive('about')}
            onSetInactive={handleSetInactive}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className={styles.link}
            active={activeSection === 'skills'}
            onSetActive={() => handleSetActive('skills')}
            onSetInactive={handleSetInactive}
          >
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className={styles.link}
            active={activeSection === 'experience'}
            onSetActive={() => handleSetActive('experience')}
            onSetInactive={handleSetInactive}
          >
            Experience
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="education"
            smooth={true}
            duration={500}
            className={styles.link}
            active={activeSection === 'education'}
            onSetActive={() => handleSetActive('education')}
            onSetInactive={handleSetInactive}
          >
            Education
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className={styles.link}
            active={activeSection === 'projects'}
            onSetActive={() => handleSetActive('projects')}
            onSetInactive={handleSetInactive}
          >
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={styles.link}
            active={activeSection === 'contact'}
            onSetActive={() => handleSetActive('contact')}
            onSetInactive={handleSetInactive}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
