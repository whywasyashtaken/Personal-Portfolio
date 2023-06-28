// components/Navbar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import { motion } from 'framer-motion';

function Navbar() {
  const location = useLocation();

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Link to="/" className={location.pathname === "/" ? `${styles.active}` : ""}>
        Home
      </Link>
      <Link to="/about" className={location.pathname === "/about" ? `${styles.active}` : ""}>
        About
      </Link>
      <Link to="/skills" className={location.pathname === "/skills" ? `${styles.active}` : ""}>
        Skills
      </Link>
      <Link
        to="/experience"
        className={location.pathname === "/experience" ? `${styles.active}` : ""}
      >
        Experience
      </Link>
      <Link
        to="/education"
        className={location.pathname === "/education" ? `${styles.active}` : ""}
      >
        Education
      </Link>
      <Link
        to="/projects"
        className={location.pathname === "/projects" ? `${styles.active}` : ""}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className={location.pathname === "/contact" ? `${styles.active}` : ""}
      >
        Contact
      </Link>
    </motion.nav>
  );
}

export default Navbar;
