import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles/Home.module.css'; // Import the CSS module
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <motion.div
      className={styles.home} // Add the CSS module class here
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.sectionContainer}>
        <h1>Welcome to my portfolio website!</h1>
        <p>
          My name is Yash Bhatia, I'm a Computer Science student at Saint Louis University, graduating in 2024. I have a diverse set of skills, ranging from Java, C/C++, JavaScript, HTML, CSS, Python, React Js, to Node Js and many more.
        </p>
        <p>Please navigate through the website to learn more about my education, skills, experience, projects, and how to get in touch with me.</p>
      </div>

      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>About</h2>
        <About />
      </div>

      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>Skills</h2>
        <Skills />
      </div>

      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>Experience</h2>
        <Experience />
      </div>

      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>Education</h2>
        <Education />
      </div>

      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>Projects</h2>
        <Projects />
      </div>

      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>Contact</h2>
        <Contact />
      </div>
    </motion.div>
  );
};

export default Home;
