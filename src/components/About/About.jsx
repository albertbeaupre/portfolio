import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                I began programming in Java at the age of 13, which ignited my passion for software development. 
                Over time, I broadened my expertise by learning additional programming languages. 
                This early foundation allowed me to delve into the inner workings of computer components, 
                giving me a comprehensive understanding of how software interacts with hardware. 
                Throughout time, I have had the opportunity to collaborate on diverse projects, 
                gaining valuable experience in team environments while working with databases, networking, security, and software design. 
                Today, I possess a strong foundation in Software Engineering and remain dedicated to continuously expanding and refining my technical skills.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
