// components/Projects.js

import React from 'react';
import styles from './styles/Projects.module.css';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Lived Religion",
      place: "Saint Louis University",
      duration: "February 2023 - Present",
      description: [
        "Working as a tech lead to create a mobile application using ReactJs and typescript.",
        "This application uses technologies such as photos, texts, and maps."
      ],
      url: "https://github.com/oss-slu/lrda_mobile"
    },
    {
      title: "Project TBE",
      place: "Saint Louis University",
      duration: "April 2023 - Present",
      description: [
        "Working as a tech lead to convert the existing technology in R to Python.",
        "This application will generate graphs and generates a csv of the raw data sent from various metrological sites all across the world."
      ],
      url: "https://github.com/oss-slu/python_tbe"
    },
    {
      title: "Tutor Mobile",
      place: "Saint Louis",
      duration: "March 2021 - Present",
      description: [
        "The intention of this project was to create an application which would help private tutors manage their students fees.",
        "This is just a personal project of mine which was aimed at creating an app for private tutors to regulate their year and how much fees has been paid by the student The languages used React js for front end and Firebase as backend."
      ],
      url: "https://github.com/yashb196/classes_mobile"
    },
    {
      title: "Shopping Cart Application",
      place: "Saint Louis University",
      duration: "August 2022 - November 2022",
      description: [
        "Built a shopping cart application with encapsulated data, a prototype consisting of Add to Cart, Add Items to Cart, and Purchase Item. • The technologies used while creating this project: - React Js, Java Spring Boot.",
        "While creating the application we followed Scrum Principles which consist of the TDD Approach.",
        "Had the opportunity to become Scrum Master and assign tasks for the sprint"
      ],
    },
    {
      title: "Search Engine Based on Semantic Web",
      place: "Mumbai University",
      duration: "January 2019 - June 2019",
      description: [
        "Developed a search engine which can provide information of any criteria using keywords.",
        "Used Dbpedia and SparQl Query to Search the data based on Keywords, Improved accuracy of search results by 30% and response time by 15% as compared to existing system.",
        "While making our project we also submitted a research paper on this topic."
      ],
      url: "https://www.ijsr.net/getabstract.php?paperid=ART20196648"
    },
  ];

  return (
    <motion.div
    className={styles.container}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
      {projects.map((project, index) => (
        <div className={`${styles.card} ${styles['wider-card']}`} key={index}>
          <h3>{project.title}</h3>
          <h4>{project.place} • {project.duration}</h4>
          <ul>
            {project.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {project.url && <p>The Url for this project is <a href={project.url}>{project.url}</a></p>}
        </div>
      ))}
    </motion.div>
  );
}

export default Projects;
