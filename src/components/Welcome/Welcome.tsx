import React from "react";
import styles from "./welcome.module.css";
import fondo from "../../img/fondo.jpg";

import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div style={{backgroundImage: `url(${fondo})`}} className={styles.containerWelcome}>
      <div className={styles.Welcome}>
        
        <h1 className={styles.logoWelcome}>Fast<span className={styles.title2}>Recipes</span></h1>
        <Link className={styles.btnWelcome} to="/home">Hacer click aqui para ir</Link>
      </div>
    </div>
  );
};

export default Welcome;