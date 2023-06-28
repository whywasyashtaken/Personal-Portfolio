// components/Education.js

import React from 'react';
import styles from './styles/Education.module.css';
import { motion } from 'framer-motion';

function Education() {
  return (
    <motion.div
    className={styles.home} // Add the CSS module class here
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
>
    <div className={styles.container}>
      <p className={styles.description}>
       <p> <b> Masters Course :- </b> Computer Science</p>
<p><b>University :- </b> Saint Louis University, Missouri, Saint Louis, 2022 - Present</p>
<p> <b>Bachelors Course :- </b>Computer Engineering</p>
<p> <b>University :- </b> University of Mumbai, 2016-2019</p>
</p>
    </div>
    </motion.div>
  );
}

export default Education;
