import React from "react";

import styles from "./Albert.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Albert Beaupre
        </h1>

        <h1 className={styles.description}>
          Software Engineer
        </h1>
      </div>
      <img
        src={getImageUrl("images/albert.png")}
        alt="Image of Albert Beaupre"
        className={styles.picture}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
