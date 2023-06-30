// components/Skills.js

import React from 'react';
import styles from './styles/Skills.module.css';
import { motion } from 'framer-motion';
import jsIcon from './icons/js.png';
import htmlIcon from './icons/html-5.png';
import cssIcon from './icons/css-3.png';
import pythonIcon from './icons/python.png';
import reactIcon from './icons/react.png';
import nodeIcon from './icons/node-js.png';
import sqlIcon from './icons/database.png';
import mongodbIcon from './icons/mongodb.png';
import javaIcon from './icons/java.png';
import cppIcon from './icons/c-.png';
import kaliIcon from './icons/kalilinux.png';
import windowsIcon from './icons/windows.png';
import androidIcon from './icons/android.png';
import macIcon from './icons/mac.png';
import ubuntuIcon from './icons/ubuntu.png';
import linuxIcon from './icons/linux.png';
import nmapIcon from './icons/nmap.png';
import wiresharkIcon from './icons/wireshark-64.png';
import psqlIcon from './icons/postgre.png';
import mongoDBCompassIcon from './icons/mongodb.png';
import pgAdminIcon from './icons/postgre.png';
import springBootIcon from './icons/spring-boot.png';
import vscodeIcon from './icons/visual-studio-code.png';
import androidStudioIcon from './icons/android-studio-48.png';
import visualStudioIcon from './icons/visual-studio.png';
import anacondaIcon from './icons/anaconda-48.png';
import sublimeIcon from './icons/sublime.png';
import postgresIcon from './icons/postgre.png';

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
          <li>
            <img src={jsIcon} alt="JavaScript" className={styles.icon} />
            JavaScript
          </li>
          <li>
            <img src={htmlIcon} alt="HTML" className={styles.icon} />
            HTML
          </li>
          <li>
            <img src={cssIcon} alt="CSS" className={styles.icon} />
            CSS
          </li>
          <li>
            <img src={pythonIcon} alt="Python" className={styles.icon} />
            Python
          </li>
          <li>
            <img src={reactIcon} alt="React" className={styles.icon} />
            React Js
          </li>
          <li>
            <img src={nodeIcon} alt="Node.js" className={styles.icon} />
            Node Js
          </li>
          <li>
            <img src={sqlIcon} alt="SQL" className={styles.icon} />
            SQL
          </li>
          <li>
            <img src={mongodbIcon} alt="MongoDB" className={styles.icon} />
            MongoDB
          </li>
          <li>
            <img src={javaIcon} alt="Java" className={styles.icon} />
            Java
          </li>
          <li>
            <img src={cppIcon} alt="C/C++" className={styles.icon} />
            C/C++
          </li>
        </ul>
        <b>Operating Systems:</b>
        <ul>
          <li>
            <img src={kaliIcon} alt="Kali Linux" className={styles.icon} />
            Kali Linux
          </li>
          <li>
            <img src={windowsIcon} alt="Windows" className={styles.icon} />
            Windows
          </li>
          <li>
            <img src={androidIcon} alt="Android" className={styles.icon} />
            Android
          </li>
          <li>
            <img src={macIcon} alt="Mac OS" className={styles.icon} />
            Mac OS
          </li>
          <li>
            <img src={ubuntuIcon} alt="Ubuntu" className={styles.icon} />
            Ubuntu
          </li>
          <li>
            <img src={linuxIcon} alt="Linux" className={styles.icon} />
            Linux
          </li>
        </ul>
        <b>Tools:</b>
        <ul>
          <li>
            <img src={nmapIcon} alt="Nmap" className={styles.icon} />
            Nmap
          </li>
          <li>
            <img src={wiresharkIcon} alt="Wireshark" className={styles.icon} />
            Wireshark
          </li>
          <li>
            <img src={psqlIcon} alt="Psql" className={styles.icon} />
            Psql
          </li>
          <li>
            <img src={mongoDBCompassIcon} alt="MongoDB Compass" className={styles.icon} />
            MongoDB Compass
          </li>
          <li>
            <img src={pgAdminIcon} alt="PG Admin" className={styles.icon} />
            PG Admin
          </li>
          <li>
            <img src={springBootIcon} alt="Spring Boot" className={styles.icon} />
            Spring Boot
          </li>
          <li>
            <img src={vscodeIcon} alt="Visual Studio Code" className={styles.icon} />
            Visual Studio Code
          </li>
        </ul>
        <b>Softwares:</b>
        <ul>
          <li>
            <img src={androidStudioIcon} alt="Android Studio" className={styles.icon} />
            Android Studio
          </li>
          <li>
            <img src={visualStudioIcon} alt="Visual Studio" className={styles.icon} />
            Visual Studio
          </li>
          <li>
            <img src={anacondaIcon} alt="Anaconda" className={styles.icon} />
            Anaconda
          </li>
          <li>
            <img src={sublimeIcon} alt="Sublime" className={styles.icon} />
            Sublime
          </li>
          <li>
            <img src={postgresIcon} alt="Postgres Applications" className={styles.icon} />
            Postgres Applications
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Skills;
