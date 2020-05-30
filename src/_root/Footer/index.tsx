import React from "react";
import { footerLinks } from "constants/global";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => (
  <div className={styles.wrapper}>
    <img
      className={styles.adrenalin}
      src={process.env.PUBLIC_URL + "/assets/adrenalin.svg"}
      alt={"adrenalin"}
    />
    <div className={styles.footerLinks}>
      {footerLinks.map((text, idx) => (
        <span key={idx}>{text}</span>
      ))}
    </div>
  </div>
);

export default Footer;
