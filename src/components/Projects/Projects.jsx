import React from 'react'
import projects from "../../../data/projects.json"
import styles from "./Projects.module.css"
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
        <h2 className={styles.title}>
            Projects
        </h2>
        <div className={styles.projects}>
            {
        projects.map((item, id) => { 
            return <ProjectCard key={id} item = {item}/>
        })
    }
        </div>
    </section>
  )
}

export default Projects