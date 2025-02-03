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
                I’ve been passionate about programming since I was 13. I started out reverse-engineering obfuscated code. Most of the systems were packed with complex networks, caches, and algorithms—but figuring them out taught me how these systems work and how to build them from scratch. It was a challenge I loved, and it’s what pushed me to dive deeper into programming.
              </p>
              <br />
              <br />
              <p>
                Today, I’m all about writing clean, efficient code and building software that’s secure, thread-safe, and optimized. Whether it’s improving performance or ensuring stability, I genuinely care about getting it right. Programming isn’t just something I do, it’s something I love, and I’m always working to get better at it. I’m ready to contribute however I can, even if it means starting at the bottom.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
