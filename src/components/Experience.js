// components/Skills.js

import React from 'react';
import styles from './styles/Experience.module.css';

function Experience() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Experience</h2>
      <p className={styles.description}>Currently working as a <p><b>Graduate Assistant</b> at <b>Saint Louis University</b> where i am working as a Tech Lead for open-source projects, Organizing Scrum Meetings and problem-solving sessions. Working with my team to build software from scratch while learning new technologies. Also Ensuring Quality and following Scrum Principles.</p>
The Links for my current projects are :- <p><a href="https://github.com/oss-slu/lrda_mobile"> LRDA</a> and <a href="https://github.com/oss-slu/python_tbe">Python TBE</a></p></p>
<p className={styles.description}>
My Previous Positions were as follows :- <p><b>Manager/Senior Engineer</b> at Eezee Business Machines Mumbai
• Working as a hardware manager assembling and troubleshooting computers /laptops and providing logical solutions to their issues. • Participated in Daily Meetings with employees and clients.
• Ensured Quality and Effectiveness of the product.
• Managed a team of developers to deliver on time, within budget & with high quality standards.

</p>
<p><b>Full Stack Developer</b> at 
HeadStrait Exceptional Software Mumbai
• To create a web-based software with TDD (Test Driven Development) approach, resulting in smoother and error-free software.
• Participated in weekly Scrum Meetings, addressing common issues to the application and working to provide an efficient solution. • Participated in following CICD Pipeline.n
</p>
</p>
    </div>
  );
}

export default Experience;
