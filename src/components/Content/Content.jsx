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
            <div className={styles.blockLomonosov}>
              <img
                className={styles.imgLomonosov}
                src="/src/assets/img/Ломоносов.png"
                alt="Lomonosov"
              />
              <img
                className={styles.imgTextLomonosov}
                src="/src/assets/img/LomonosovText.png"
                alt="Text"
              />
            </div>
            <img
              className={styles.imgDescMap}
              src="/src/assets/img/описаниекарты.png"
              alt="Desc for map"
            />
          </div>
        </div>
        <div className={styles.imp3}>
          <div className={styles.description}>
            <img
              className={styles.descImage}
              src="/src/assets/img/ШуваловОПис.png"
              alt="desc"
            />
          </div>
          <div className={styles.historyElizabeth}>
            <img
              className={styles.imgMordvinov}
              src="/src/assets/img/мордвинов.png"
              alt="Mordvinov"
            />
            <img
              className={styles.imgKutuzov}
              src="/src/assets/img/Кутузов.png"
              alt="Kutuzov"
            />
            <img
              className={styles.imgMichaelDesc}
              src="/src/assets/img/МихаилИлларионович.png"
              alt="Desc Michael"
            />
            <img
              className={styles.imgShuvalovDesc}
              src="/src/assets/img/Шувалов.png"
              alt="Desc Shuvalov"
            />
            <img
              className={styles.imgVilboa}
              src="/src/assets/img/Вильбоа.png"
              alt="Vilboa"
            />
            <img
              className={styles.imgSmoking}
              src="/src/assets/img/ФормаОдежды.png"
              alt="Smoking"
            />
          </div>
        </div>
        <div className={styles.imp4}>
          <div className={styles.description}>
            <img
              className={styles.descImage1}
              src="/src/assets/img/Orlov.png"
              alt="Description Orlov"
            />
            <img
              className={styles.descImage2}
              src="/src/assets/img/Potemkin.png"
              alt="Description Orlov"
            />
            <img
              className={styles.descImage3}
              src="/src/assets/img/Zubov.png"
              alt="Description Orlov"
            />
          </div>
          <div className={styles.historyEkaterinaII}>
            <img
              className={styles.imgMelissino}
              src="/src/assets/img/Melissino.png"
              alt="Melissino"
            />
            <img
              className={styles.imgDescMelissino}
              src="/src/assets/img/MelissinoDesc.png"
              alt="Desc Melissino"
            />
            {/* <img className={styles.} src="" alt="" />  */}
            {/* <img className={styles.} src="" alt="" />  */}
            {/* <img className={styles.} src="" alt="" />  */}
            {/* <img className={styles.} src="" alt="" />  */}
            {/* <img className={styles.} src="" alt="" />  */}
            {/* <img className={styles.} src="" alt="" />  */}
            {/* <img className={styles.} src="" alt="" />  */}
          </div>
        </div>
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
