import React from "react";
import styles from "./Content.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.imperators}>
        <div className={styles.imp1}>
          <div className={styles.description}>
            <img
              className={styles.descImage}
              height={300}
              width={200}
              src="/src/assets/img/museum2.png"
              alt="desc"
            />
          </div>
          <div className={styles.history}>
            <img
              className={styles.imgDecree}
              height={150}
              width={180}
              src="/src/assets/img/УказПетра1.png"
              alt="decree"
            />
            <img
              height={150}
              width={126}
              className={styles.imgBruce}
              src="/src/assets/img/Брюс.png"
              alt="Bruce"
            />
            <img
              className={styles.imgGun}
              src="/src/assets/img/Пушечно-линейныйДвор.png"
              alt="Пушечно-линейный двор"
            />
            <img
              className={styles.imgTown}
              height={400}
              width={400}
              src="/src/assets/img/СухареваБашня.png"
              alt="Сухарева Башня на карте"
            />
          </div>
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
