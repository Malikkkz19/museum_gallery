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
              src="/src/assets/img/museum2.png"
              alt="desc"
            />
          </div>
          <div className={styles.historyPetr}>
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
              width={395}
              src="/src/assets/img/СухареваБашня.png"
              alt="Сухарева Башня на карте"
            />
            <img
              className={styles.imgIng}
              src="/src/assets/img/УказОбУчреждении.png"
              alt="Указ об учреждении инженерной роты"
            />
            <img
              className={styles.imgMinih}
              src="/src/assets/img/Миних.png"
              alt="Миних"
            />
            <img
              className={styles.imgSveyskiy}
              src="/src/assets/img/свейский.png"
              alt="Свейский"
            />
          </div>
        </div>
        <div className={styles.imp2}>
          <div className={styles.description}>
            <img
              className={styles.descImage}
              src="/src/assets/img/Сенатский Указ.png"
              alt="Description about Ekaterina I"
            />
          </div>
          <div className={styles.historyEkaterinaI}>
            <img
              className={styles.imgMap}
              src="/src/assets/img/Карта.png"
              alt="Карта"
            />
            <img
              className={styles.imgText}
              src="/src/assets/img/Текст.png"
              alt="Text about Ekaterina I"
            />
            <img src="/src/assets/img/" alt="" />
            <img src="/src/assets/img/" alt="" />
          </div>
        </div>
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
