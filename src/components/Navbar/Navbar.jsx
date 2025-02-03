import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div id="contact" className={styles.icon_container}>
        <a href="mailto:albert-beaupre@hotmail.com">
          <img className={styles.icon} src={getImageUrl("icons/outlook.png")} alt="Outlook" />
        </a>
        <a href="https://www.linkedin.com/in/albert-beaupre/">
          <img className={styles.icon} src={getImageUrl("icons/linkedin.png")} alt="LinkedIn" />
        </a>
        <a href="https://github.com/albertbeaupre">
          <img className={styles.icon} src={getImageUrl("icons/github.png")} alt="GitHub" />
        </a>
        <a href="https://wa.me/19038196176">
          <img className={styles.icon} src={getImageUrl("icons/whatsapp.png")} alt="WhatsApp" />
        </a>
        <a href="tel:+19038196176">
          <img className={styles.icon} src={getImageUrl("icons/phone.png")} alt="Phone" />
        </a>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
