import React from "react";
import styles from "./Content.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.imperators}>
        <div className={styles.imp1}>
          <div className={styles.description}>
            <img
              height={300}
              width={200}
              src="/src/assets/img/раммка.png"
              alt="desc"
            />
          </div>
          <div className={styles.history}></div>
        </div>
        <div className={styles.imp2}></div>
        <div className={styles.imp3}></div>
        <div className={styles.imp4}></div>
        <div className={styles.imp5}></div>
        <div className={styles.imp6}></div>
        <div className={styles.imp7}></div>
        <div className={styles.imp8}></div>
        <div className={styles.imp9}></div>
        <div className={styles.imp10}></div>
      </div>
    </div>
  );
};

export default Content;
