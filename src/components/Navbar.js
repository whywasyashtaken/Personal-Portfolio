import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBook } from 'react-icons/fa';
import { BsX } from 'react-icons/bs'; // Import close icon
import styles from './styles/Navbar.module.css';
import { motion } from 'framer-motion';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [menuActive, setMenuActive] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  const handleSetActive = (section) => {
    setActiveSection(section);
    if (menuActive) {
      setMenuActive(false);
    }
  };

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
    setBookOpen(false); // Close the book when opening the menu
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${menuActive ? styles.active : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <button className={styles['menu-icon']} onClick={handleMenuClick}>
      📓
      </button>
      <ul className={`${styles['nav-links']} ${menuActive ? styles.active : ''}`}>
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className={styles.link}
            active={activeSection === 'home'}
            onClick={() => {
              handleSetActive('home');
              setBookOpen(false); // Close the book when selecting a section
            }}
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
            onClick={() => handleSetActive('about')}
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
            onClick={() => handleSetActive('skills')}
            
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
            onClick={() => handleSetActive('experience')}
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
            onClick={() => handleSetActive('education')}
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
            onClick={() => handleSetActive('projects')}
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
            onClick={() => handleSetActive('contact')}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
