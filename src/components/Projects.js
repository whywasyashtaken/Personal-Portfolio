// components/Skills.js

import React from 'react';
import styles from './styles/Projects.module.css';

function Projects() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Skills</h2>
      <p className={styles.description}><h3>Language: </h3> Java, C/C++, JavaScript, HTML, CSS, Python, React Js, Node Js Operating Systems: Kali Linux, Windows, Android, Ubuntu</p>
      <p className={styles.description}><h3>Tools: </h3> Nmap, Wireshark, Psql </p>
      <p className={styles.description}><h3>Software: </h3> Android Studio, Visual Studio, Anaconda, Sublime, PgAdmin
</p>
    </div>
  );
}

export default Projects;
