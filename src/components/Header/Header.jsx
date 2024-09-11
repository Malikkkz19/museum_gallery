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
        <div className={styles.Mordvinov1}>
          <img
            className={styles.imgMordvinov1}
            src="/public/Mordvinov1.png"
            alt=""
          />
        </div>
        <div className={styles.descMordvinov1}>
          Командовал
          <br /> в 1749 году
        </div>
        <div className={styles.Begichev}>
          <img
            className={styles.imgBegichev}
            src="/public/Begichev.png"
            alt=""
          />
        </div>
        <div className={styles.descBegichev}>
          Командовал
          <br /> с 1764 года
          <br /> по 1771 год
        </div>
        <div className={styles.Mordvinov}>
          <img
            className={styles.imgMordinov}
            src="/public/Мордвинов.jpg"
            alt=""
          />
        </div>
        <div className={styles.descMordvinov}>
          Командовал
          <br /> с 1781 года
          <br /> по 1783 год
        </div>
        <div className={styles.Melissino}>
          <img
            className={styles.imgMelissino}
            src="/public/Melissino.jpg"
            alt=""
          />
        </div>
        <div className={styles.descMelissino}>
          Командовал
          <br /> с 1783 года <br />
          по 1797 год
        </div>
        <div className={styles.Korsakov}>
          <img
            className={styles.imgKorsakov}
            src="/public/Korsakov.jpg"
            alt=""
          />
        </div>
        <div className={styles.descKorsakov}>
          Командовал
          <br /> с 1797 года <br />
          по 1799 год
        </div>
        <div className={styles.Kleymichel}>
          <img
            className={styles.imgKleymichel}
            src="/public/Kleymichel.png"
            alt=""
          />
        </div>
        <div className={styles.descKleymichel}>
          Командовал
          <br /> с 1799 года
          <br /> по 1800 год
        </div>
        <div className={styles.Zubov}>
          <img className={styles.imgZubov} src="/public/Zubov.jpg" alt="" />
        </div>
        <div className={styles.descZubov}>
          Командовал
          <br /> с 1800 года <br /> по 1804 год
        </div>
        <div className={styles.Kleymichel1}>
          <img
            className={styles.imgKleymichel1}
            src="/public/Kleymichel.png"
            alt=""
          />
        </div>
        <div className={styles.descKleymichel1}>
          Командовал
          <br /> с 1804 года
          <br /> по 1816 год
        </div>
        <div className={styles.Kuruta}>
          <img className={styles.imgKuruta} src="/public/Kuruta.jpg" alt="" />
        </div>
        <div className={styles.descKuruta}>
          Командовал
          <br /> с 1816 года
          <br /> по 1831 год
        </div>
        <div className={styles.Bibikov}>
          <img className={styles.imgBibikov} src="/public/Bibikov.png" alt="" />
        </div>
        <div className={styles.descBibikov}>
          Командовал <br /> с 1841 года <br /> по 1849 год
        </div>
        <div className={styles.Putyata}>
          <img className={styles.imgPutyata} src="/public/Putyata.jpg" alt="" />
        </div>
        <div className={styles.descPutyata}>
          Командовал
          <br /> с 1849 года
          <br /> по 1855 год
        </div>
        <div className={styles.Stepanov}>
          <img
            className={styles.imgStepanov}
            src="/public/Stepanov.jpeg"
            alt=""
          />
        </div>
        <div className={styles.descStepanov}>
          Командовал
          <br /> с 1855 года
          <br /> по 1863 год
        </div>
        <div className={styles.Danilovich}>
          <img
            className={styles.imgDanilovich}
            src="/public/Danilovich.png"
            alt=""
          />
        </div>
        <div className={styles.descDanilovich}>
          Командовал
          <br /> с 1863 года <br />
          по 1877 год
        </div>
        <div className={styles.Makarov}>
          <img className={styles.imgMakarov} src="/public/Makarov.png" alt="" />
        </div>
        <div className={styles.descMakarov}>
          Командовал
          <br /> с 1878 года
          <br /> по 1891 год
        </div>
        <div className={styles.Durop}>
          <img className={styles.imgDurop} src="/public/Durop.png" alt="" />
        </div>
        <div className={styles.descDurop}>
          Командовал
          <br /> с 1895 года
          <br /> по 1900 год
        </div>
        <div className={styles.Sumarokov}>
          <img
            className={styles.imgSumarokov}
            src="/public/Sumarokov.png"
            alt=""
          />
        </div>
        <div className={styles.descSumarokov}>
          Командовал
          <br /> с 1900 года
          <br /> по 1906 год
        </div>
        <div className={styles.Lidenberg}>
          <img
            className={styles.imgLidenberg}
            src="/public/Lidenberg.jpg"
            alt=""
          />
        </div>
        <div className={styles.descLidenberg}>
          Командовал
          <br /> с 1906 года <br />
          по 1917 год
        </div>
        <div className={styles.bottomLine}>
          <div className={styles.dateOne}>1712</div>
          <div className={styles.dateTwo}>1731</div>
          <div className={styles.dateThree}>1758</div>
          <div className={styles.dateFour}>1762</div>
          <div className={styles.dateFive}>1800</div>
          <div className={styles.dateSix}>1863</div>
          <div className={styles.dateSeven}>1882</div>
          <div className={styles.dateEight}>1918</div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.goldenLine1}></div>
        <div className={styles.goldenLine2}></div>
        <div className={styles.goldenLine3}></div>
        <div className={styles.goldenLine4}></div>
        <div className={styles.goldenLine5}></div>
        <div className={styles.goldenLine6}></div>
        <div className={styles.goldenLine7}></div>
        <div className={styles.goldenLine8}></div>
      </div>
    </div>
  );
};

export default Header;
