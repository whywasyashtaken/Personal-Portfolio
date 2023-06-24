// components/About.js

import React from 'react';
import styles from './styles/About.module.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
            className={styles.home} // Add the CSS module class here
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
    <div className={styles.aboutContainer}>
      <h2 className={styles.header}>About Me</h2>
      <p className={styles.description}>I am a graduate assistant at Saint Louis University, working as a Tech Lead for open-source projects. I build software from scratch while learning new technologies and ensuring quality by following Scrum principles.</p>
    </div>
    </motion.div>
  );
}

export default About;
