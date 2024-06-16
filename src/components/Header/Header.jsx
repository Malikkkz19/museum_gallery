import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.Sveyskiy}>
          <img
            className={styles.imgSveyskiy}
            src="/public/Sveyskiy.png"
            alt="Sveyskiy"
          />
        </div>
        <div className={styles.descSveyskiy}>
          Командовал
          <br /> с 1712 года
          <br /> по 1724 год
        </div>
        <div className={styles.Mordvinov}>
          <img
            className={styles.imgMordvinov}
            src="/public/Mordvinov1.png"
            alt=""
          />
        </div>
        <div className={styles.descMordvinov}>
          Командовал
          <br /> в 1749 году
        </div>
        <div className={styles.bottomLine}></div>
      </div>
      <div className={styles.headerBottom}></div>
    </div>
  );
};

export default Header;
