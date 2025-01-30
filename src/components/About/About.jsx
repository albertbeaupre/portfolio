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
                Software Developer and Army Veteran with a strong foundation in programming cultivated from early exposure to the programming community at the age of 13 beginning with reverse engineering of obfuscated code. Collaborated with multiple teams to contribute to the development and deployment of software servers, gaining valuable insights into programming, server infrastructure, and network communication. Transitioned into game development, acquiring extensive knowledge of client/server architecture and network communication protocols. Adept at authoring code derived from designing, building, and maintaining software and content creation tools.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
