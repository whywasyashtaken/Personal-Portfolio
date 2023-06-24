// components/Navbar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles/Navbar.module.css';


function Navbar() {
    const location = useLocation();
    return (
      <nav className={styles.navbar}>
        <Link className={location.pathname === "/" ? `${styles.active}` : ""} to="/">Home</Link>
        <Link className={location.pathname === "/about" ? `${styles.active}` : ""} to="/about">About</Link>
        <Link className={location.pathname === "/skills" ? `${styles.active}` : ""} to="/skills">Skills</Link>
        <Link className={location.pathname === "/experience" ? `${styles.active}` : ""} to="/experience">Experience</Link>
        <Link className={location.pathname === "/education" ? `${styles.active}` : ""} to="/education">Education</Link>
        <Link className={location.pathname === "/projects" ? `${styles.active}` : ""} to="/projects">Projects</Link>
        <Link className={location.pathname === "/contact" ? `${styles.active}` : ""} to="/contact">Contact</Link>
      </nav>
    );
  }
  

export default Navbar;
