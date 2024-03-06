import React, { useState } from "react";
import styles from "./Content.module.scss";
import Modal from "../Modal/Modal";

const Content = () => {
  const [modalActive, setModalActive] = useState(false);
  const [position, setPosition] = useState();
  return (
    <div className={styles.content}>
      <div className={styles.imperators}>
        <div className={styles.imp1}>
          <div className={styles.description}>
            <img
              onClick={() => setModalActive(true)}
              className={styles.descImage}
              src="/src/assets/img/museum2.png"
              alt="desc"
            />
            <Modal active={modalActive} setActive={setModalActive}>
              <div className={styles.modal}>
                <img
                  className={styles.imgModal}
                  src="/src/assets/img/Ramka.png"
                  alt="modal ramka"
                />
                <div className={styles.textModal}></div>
              </div>
            </Modal>
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
            <img
              className={styles.imgArakcheev}
              src="/src/assets/img/Arakcheev.png"
              alt="Arakcheev"
            />
            <img
              className={styles.imgDescArakcheev}
              src="/src/assets/img/ArakcheevDesc.png"
              alt="Desc Arakcheev"
            />
            <img
              className={styles.imgSmoking}
              src="/src/assets/img/SmokingPavelI.png"
              alt="Smoking PavelI"
            />
            <img
              className={styles.imgCadets}
              src="/src/assets/img/Cadets.png"
              alt="Cadets"
            />
            <img
              className={styles.imgGreece}
              src="/src/assets/img/Greece.png"
              alt="Greece"
            />
            <img
              className={styles.imgZnamya}
              src="/src/assets/img/Znamya.png"
              alt="Znamya"
            />
            <img
              className={styles.imgPlan}
              src="/src/assets/img/GeneralPlan.png"
              alt="General Plan"
            />
          </div>
        </div>
        <div className={styles.imp5}>
          <div className={styles.historyPavelI}>
            <img
              className={styles.imgPlanTown}
              src="/src/assets/img/plantown.png"
              alt="Plan Town"
            />
            <img
              className={styles.imgEkaterinaDesc}
              src="/src/assets/img/EkaterinaDesc.png"
              alt="Description Ekaterina"
            />
          </div>
        </div>
        <div className={styles.imp6}>
          <div className={styles.description}>
            <img
              className={styles.imgDesc1}
              src="/src/assets/img/Konovnicin.png"
              alt="Konovnicin"
            />
            <img
              className={styles.imgDesc2}
              src="/src/assets/img/Golenischev.png"
              alt="Golenischev"
            />
          </div>
          <div className={styles.historyAlexanderI}>
            <img
              className={styles.imgZubov}
              src="/src/assets/img/Zubov.png"
              alt="Zubov"
            />
            <img
              className={styles.imgKorpus}
              src="/src/assets/img/KorpusPavel.png"
              alt="KorpusPavel"
            />
            <img
              className={styles.imgVolont}
              src="/src/assets/img/VolontKorpus.png"
              alt="VolontKorpus"
            />
            <img
              className={styles.imgExcercirgaus}
              src="/src/assets/img/Excercirgaus.png"
              alt="Excercirgaus"
            />
            <img
              className={styles.imgProjectStone}
              src="/src/assets/img/ProjectStone.png"
              alt="ProjectStone"
            />
            <img
              className={styles.imgProjectEkaterinaII}
              src="/src/assets/img/ProjectEkatII.png"
              alt="ProjectEkaterinaII"
            />
            <img
              className={styles.imgSmokingAlexI}
              src="/src/assets/img/SmokingAlexI.png"
              alt="SmokingAlexI"
            />
          </div>
        </div>
        <div className={styles.imp7}>
          <div className={styles.description}>
            <img
              className={styles.descImage}
              src="/src/assets/img/Znamya1862.png"
              alt="Знамя 1862 года"
            />
          </div>
          <div className={styles.historyNikolayI}>
            <img
              className={styles.imgSmokingNikolayI}
              src="/src/assets/img/SmokingNikolayI.png"
              alt="Форма одежды при Николае I"
            />
            <img
              className={styles.imgCadetKorpus}
              src="/src/assets/img/Desc2Cadet.png"
              alt="Description 2 Cadet "
            />
            <img
              className={styles.imgMendeleev}
              src="/src/assets/img/Mendeleev.png"
              alt="Mendeleev"
            />
            <img
              className={styles.imgDobrolyubov}
              src="/src/assets/img/Dobrolyubov.png"
              alt="Dobrolyubov"
            />
            <img
              className={styles.imgChernishevskiy}
              src="/src/assets/img/Chernishevskiy.png"
              alt="Chernishevskiy"
            />
            <img
              className={styles.imgGeneralPlan2}
              src="/src/assets/img/GeneralPlan2.png"
              alt="GeneralPlan2"
            />
            <img
              className={styles.imgZnamya1844}
              src="/src/assets/img/Znamya1844.png"
              alt="Znamya1844"
            />
            <img
              className={styles.imgGeneralPlan1858}
              src="/src/assets/img/GeneralPlan1858.png"
              alt="GeneralPlan1858"
            />
          </div>
        </div>
        <div className={styles.imp8}>
          <div className={styles.historyAlexanderII}>
            <img
              className={styles.imgAttestat}
              src="/src/assets/img/Attestat.png"
              alt="Attestat"
            />
            <img
              className={styles.imgSmokingAlexII}
              src="/src/assets/img/SmokingAlexanderII.png"
              alt="SmokingAlexanderII"
            />
            <img
              className={styles.img1863}
              src="/src/assets/img/Desc2.png"
              alt="Decs1863"
            />
            <img
              className={styles.imgCadets1887}
              src="/src/assets/img/Cadets1887.png"
              alt="Cadets1887"
            />
            <img
              className={styles.imgDesctoPlan}
              src="/src/assets/img/DesctoPlan.png"
              alt="DesctoPlan"
            />
            <img
              className={styles.imgChurchNevskiy}
              src="/src/assets/img/ChurchNevskiy.png"
              alt="ChurchNevskiy"
            />
            <img
              className={styles.imgSoyuzov}
              src="/src/assets/img/Soyuzov.png"
              alt="Soyuzov"
            />
          </div>
        </div>
        <div className={styles.imp9}>
          <div className={styles.historyAlexanderIII}>
            <img
              className={styles.imgMordovin}
              src="/src/assets/img/Mordovin.png"
              alt="Mordovin"
            />
            <img
              className={styles.imgAltarNevskiy}
              src="/src/assets/img/AltarNevskiy.png"
              alt="AltarNevskiy"
            />
          </div>
        </div>
        <div className={styles.imp10}>
          <div className={styles.historyNikolayII}>
            <img
              className={styles.imgMoleben}
              src="/src/assets/img/Moleben.png"
              alt="Moleben"
            />
            <img
              className={styles.imgNikolayII}
              src="/src/assets/img/NikolayII.png"
              alt="NikolayII"
            />
            <img
              className={styles.imgBirthdayCadet}
              src="/src/assets/img/BirthdayCadet.png"
              alt="BirthdayCadet"
            />
            <img
              className={styles.imgGramota}
              src="/src/assets/img/Gramota.png"
              alt="Gramota"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
