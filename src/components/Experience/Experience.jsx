import React from "react";

import styles from "./Experience.module.css";
import languages from "../../data/languages.json";
import tools from "../../data/tools.json";
import frameworks from "../../data/frameworks.json";
import platforms from "../../data/platforms.json";
import certifications from "../../data/certifications.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">

      <h2 className={styles.title}>
        Skills
      </h2>

      <h1 className={styles.title_2}>
        Programming Languages
      </h1>
      <div className={styles.content}>
        <div className={styles.skills}>

          {languages.map((lang, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(lang.imageSrc)} alt={lang.title} />
                </div>
                <p>{lang.title}</p>
              </div>
            );
          })}
        </div>
      </div>


      <h1 className={styles.title_2}>
        Tools
      </h1>
      <div className={styles.content}>
        <div className={styles.skills}>

          {tools.map((tool, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(tool.imageSrc)} alt={tool.title} />
                </div>
                <p>{tool.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <h1 className={styles.title_2}>
        Frameworks and Libraries
      </h1>

      <div className={styles.content}>
        <div className={styles.skills}>
          {frameworks.map((lib, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(lib.imageSrc)} alt={lib.title} />
                </div>
                <p>{lib.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <h1 className={styles.title_2}>
        Platforms
      </h1>

      <div className={styles.content}>
        <div className={styles.skills}>
          {platforms.map((plat, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(plat.imageSrc)} alt={plat.title} />
                </div>
                <p>{plat.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <h1 className={styles.title_2}>
        Certifications
      </h1>

      <div className={styles.content}>
        <ul className={styles.history}>
          {certifications.map((cert, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(cert.imageSrc)}
                  alt={`${cert.organization} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${cert.name}`}</h3>
                  <h2>{`${cert.organization}`}</h2>
                  <p>{`${cert.date}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section >
  );
};