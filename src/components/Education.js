// components/Education.js

import React from 'react';
import styles from './styles/Education.module.css';

function Education() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Education</h2>
      <p className={styles.description}>
        <h3> Masters Course :- </h3> <b>Computer Science</b>
<h3>University :- </h3> <b>Saint Louis University, Missouri, Saint Louis, 2022 - Present</b></p>
<p className={styles.description}><h3> Bachelors Course :- </h3><b>Computer Engineering</b>
<h3>University :- </h3><b>University of Mumbai, 2016-2019</b>

</p>
    </div>
  );
}

export default Education;
