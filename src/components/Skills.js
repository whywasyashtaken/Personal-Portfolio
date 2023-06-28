// components/Skills.js

import React from 'react';
import styles from './styles/Skills.module.css';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <motion.div
      className={styles.skillsContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.skillsContent}>
        <b>Languages:</b>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>React Js</li>
          <li>Node Js</li>
          <li>SQL</li>
          <li>Mongo DB</li>
          <li>Java</li>
          <li>C/C++</li>
        </ul>
        <b>Operating Systems:</b>
        <ul>
          <li>Kali Linux</li>
          <li>Windows</li>
          <li>Android</li>
          <li>Mac OS</li>
          <li>Ubuntu</li>
          <li>Linux</li>
        </ul>
        <b>Tools:</b>
        <ul>
          <li>Nmap</li>
          <li>Wireshark</li>
          <li>Psql</li>
          <li>Mongo DB Compass</li>
          <li>PG Admin</li>
          <li>Spring Boot</li>
          <li>Visual Studio Code</li>
        </ul>
        <b>Softwares:</b>
        <ul>
          <li>Android Studio</li>
          <li>Visual Studio</li>
          <li>Anaconda</li>
          <li>Sublime</li>
          <li>Postgres Applications</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Skills;
