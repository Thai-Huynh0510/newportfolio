import React from 'react'
import { IoIosSchool } from "react-icons/io";
import { MdOutlineImportantDevices } from "react-icons/md";
import styles from "./About.module.css"
import { getImageUrl } from '../../ultis'
import AOS from 'aos'
import 'aos/dist/aos.css'
const About = () => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 3000
      })
  return (
    <section id="about" className={styles.container}> 
        <h2 className={styles.title}>About</h2>
        <div className={styles.content} >
        <img src={getImageUrl("astro2.gif")} className= {styles.image} data-aos="fade-right"/>
        <ul className={styles.aboutItems} >
            <li className={styles.aboutItem} data-aos="zoom-in-left" >
                <IoIosSchool size={50}/> 
                <div className={styles.text}>
                <h3>Associate of Art</h3>
                <p>Graduated from Borough of Manhattan College, Major in Computer Science</p>
                </div>
            </li>
            <li className={styles.aboutItem} data-aos="zoom-in-left">
                <IoIosSchool size={50}/> 
                <div className={styles.text}>
                <h3>Bachelor of Art</h3>
                <p>Graduated from Hunter College, Major in Computer Science</p>
                </div>
            </li>
            <li className={styles.aboutItem} data-aos="zoom-in-left">
                <MdOutlineImportantDevices size={50}/>
                <div className={styles.text}>
                <h3>Software Developer</h3>
                <p>Learning and improving front-end skill, back-end skill, and Python</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default About