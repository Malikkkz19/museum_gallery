import React, { useState } from "react";
import styles from "./Content.module.scss";
import Modal from "../Modal/Modal";

const Content = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selected, setSelected] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleItemClick = (item, width) => {
    setSelected(item);
    setWidth(width);
    setModalActive(true);
  };

  return (
    <div className={styles.content}>
      <div className={styles.imperators}>
        <div className={styles.imp1}>
          <div className={styles.description}>
            <img
              id="Petr1"
              onClick={() =>
                handleItemClick(
                  {
                    name: "Петр I",
                    image: "/src/assets/img/museum2.png",
                  },
                  380
                )
              }
              className={styles.descImage}
              src="/src/assets/img/museum2.png"
              alt="desc"
            />
            <Modal active={modalActive} setActive={setModalActive}>
              <div className={styles.modal}>
                {selected && (
                  <img
                    className={`${styles.imgModal} ${
                      selected ? styles.imgModalActive : ""
                    }`}
                    src={selected?.image}
                    alt={selected?.name}
                    style={{ width: width }}
                  />
                )}
              </div>
              {console.log(width)}
            </Modal>
          </div>
          <div className={styles.historyPetr}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/УказПетра1.png",
                })
              }
              className={styles.imgDecree}
              height={150}
              width={180}
              src="/src/assets/img/УказПетра1.png"
              alt="decree"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Брюс.png",
                })
              }
              height={150}
              width={126}
              className={styles.imgBruce}
              src="/src/assets/img/Брюс.png"
              alt="Bruce"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Пушечно-линейныйДвор.png",
                })
              }
              className={styles.imgGun}
              src="/src/assets/img/Пушечно-линейныйДвор.png"
              alt="Пушечно-линейный двор"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/СухареваБашня.png",
                })
              }
              className={styles.imgTown}
              height={400}
              width={395}
              src="/src/assets/img/СухареваБашня.png"
              alt="Сухарева Башня на карте"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/УказОбУчреждении.png",
                })
              }
              className={styles.imgIng}
              src="/src/assets/img/УказОбУчреждении.png"
              alt="Указ об учреждении инженерной роты"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Миних.png",
                })
              }
              className={styles.imgMinih}
              src="/src/assets/img/Миних.png"
              alt="Миних"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/свейский.png",
                })
              }
              className={styles.imgSveyskiy}
              src="/src/assets/img/свейский.png"
              alt="Свейский"
            />
          </div>
        </div>
        <div className={styles.imp2}>
          <div className={styles.description}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Сенатский Указ.png",
                })
              }
              className={styles.descImage}
              src="/src/assets/img/Сенатский Указ.png"
              alt="Description about Ekaterina I"
            />
          </div>
          <div className={styles.historyEkaterinaI}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Карта.png",
                })
              }
              className={styles.imgMap}
              src="/src/assets/img/Карта.png"
              alt="Карта"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Текст.png",
                })
              }
              className={styles.imgText}
              src="/src/assets/img/Текст.png"
              alt="Text about Ekaterina I"
            />
            <div className={styles.blockLomonosov}>
              <img
                onClick={() =>
                  handleItemClick({
                    name: "",
                    image: "/src/assets/img/Ломоносов.png",
                  })
                }
                className={styles.imgLomonosov}
                src="/src/assets/img/Ломоносов.png"
                alt="Lomonosov"
              />
              <img
                onClick={() =>
                  handleItemClick({
                    name: "",
                    image: "/src/assets/img/LomonosovText.png",
                  })
                }
                className={styles.imgTextLomonosov}
                src="/src/assets/img/LomonosovText.png"
                alt="Text"
              />
            </div>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/описаниекарты.png",
                })
              }
              className={styles.imgDescMap}
              src="/src/assets/img/описаниекарты.png"
              alt="Desc for map"
            />
          </div>
        </div>
        <div className={styles.imp3}>
          <div className={styles.description}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/ШуваловОПис.png",
                })
              }
              className={styles.descImage}
              src="/src/assets/img/ШуваловОПис.png"
              alt="desc"
            />
          </div>
          <div className={styles.historyElizabeth}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/мордвинов.png",
                })
              }
              className={styles.imgMordvinov}
              src="/src/assets/img/мордвинов.png"
              alt="Mordvinov"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Кутузов.png",
                })
              }
              className={styles.imgKutuzov}
              src="/src/assets/img/Кутузов.png"
              alt="Kutuzov"
            />

            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/МихаилИлларионович.png",
                })
              }
              className={styles.imgMichaelDesc}
              src="/src/assets/img/МихаилИлларионович.png"
              alt="Desc Michael"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Шувалов.png",
                })
              }
              className={styles.imgShuvalovDesc}
              src="/src/assets/img/Шувалов.png"
              alt="Desc Shuvalov"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Вильбоа.png",
                })
              }
              className={styles.imgVilboa}
              src="/src/assets/img/Вильбоа.png"
              alt="Vilboa"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/ФормаОдежды.png",
                })
              }
              className={styles.imgSmoking}
              src="/src/assets/img/ФормаОдежды.png"
              alt="Smoking"
            />
          </div>
        </div>
        <div className={styles.imp4}>
          <div className={styles.description}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Orlov.png",
                })
              }
              className={styles.descImage1}
              src="/src/assets/img/Orlov.png"
              alt="Description Orlov"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Potemkin.png",
                })
              }
              className={styles.descImage2}
              src="/src/assets/img/Potemkin.png"
              alt="Description Orlov"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Zubov.png",
                })
              }
              className={styles.descImage3}
              src="/src/assets/img/Zubov.png"
              alt="Description Orlov"
            />
          </div>
          <div className={styles.historyEkaterinaII}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Melissino.png",
                })
              }
              className={styles.imgMelissino}
              src="/src/assets/img/Melissino.png"
              alt="Melissino"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/MelissinoDesc.png",
                })
              }
              className={styles.imgDescMelissino}
              src="/src/assets/img/MelissinoDesc.png"
              alt="Desc Melissino"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Arakcheev.png",
                })
              }
              className={styles.imgArakcheev}
              src="/src/assets/img/Arakcheev.png"
              alt="Arakcheev"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/ArakcheevDesc.png",
                })
              }
              className={styles.imgDescArakcheev}
              src="/src/assets/img/ArakcheevDesc.png"
              alt="Desc Arakcheev"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/SmokingPavelI.png",
                })
              }
              className={styles.imgSmoking}
              src="/src/assets/img/SmokingPavelI.png"
              alt="Smoking PavelI"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Cadets.png",
                })
              }
              className={styles.imgCadets}
              src="/src/assets/img/Cadets.png"
              alt="Cadets"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Greece.png",
                })
              }
              className={styles.imgGreece}
              src="/src/assets/img/Greece.png"
              alt="Greece"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Znamya.png",
                })
              }
              className={styles.imgZnamya}
              src="/src/assets/img/Znamya.png"
              alt="Znamya"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/GeneralPlan.png",
                })
              }
              className={styles.imgPlan}
              src="/src/assets/img/GeneralPlan.png"
              alt="General Plan"
            />
          </div>
        </div>
        <div className={styles.imp5}>
          <div className={styles.historyPavelI}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/plantown.png",
                })
              }
              className={styles.imgPlanTown}
              src="/src/assets/img/plantown.png"
              alt="Plan Town"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/EkaterinaDesc.png",
                })
              }
              className={styles.imgEkaterinaDesc}
              src="/src/assets/img/EkaterinaDesc.png"
              alt="Description Ekaterina"
            />
          </div>
        </div>
        <div className={styles.imp6}>
          <div className={styles.description}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Konovnicin.png",
                })
              }
              className={styles.imgDesc1}
              src="/src/assets/img/Konovnicin.png"
              alt="Konovnicin"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Golenischev.png",
                })
              }
              className={styles.imgDesc2}
              src="/src/assets/img/Golenischev.png"
              alt="Golenischev"
            />
          </div>
          <div className={styles.historyAlexanderI}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Zubov.png",
                })
              }
              className={styles.imgZubov}
              src="/src/assets/img/Zubov.png"
              alt="Zubov"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/KorpusPavel.png",
                })
              }
              className={styles.imgKorpus}
              src="/src/assets/img/KorpusPavel.png"
              alt="KorpusPavel"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/VolontKorpus.png",
                })
              }
              className={styles.imgVolont}
              src="/src/assets/img/VolontKorpus.png"
              alt="VolontKorpus"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Excercirgaus.png",
                })
              }
              className={styles.imgExcercirgaus}
              src="/src/assets/img/Excercirgaus.png"
              alt="Excercirgaus"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/ProjectStone.png",
                })
              }
              className={styles.imgProjectStone}
              src="/src/assets/img/ProjectStone.png"
              alt="ProjectStone"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/ProjectEkatII.png",
                })
              }
              className={styles.imgProjectEkaterinaII}
              src="/src/assets/img/ProjectEkatII.png"
              alt="ProjectEkaterinaII"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/SmokingAlexI.png",
                })
              }
              className={styles.imgSmokingAlexI}
              src="/src/assets/img/SmokingAlexI.png"
              alt="SmokingAlexI"
            />
          </div>
        </div>
        <div className={styles.imp7}>
          <div className={styles.description}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Znamya1862.png",
                })
              }
              className={styles.descImage}
              src="/src/assets/img/Znamya1862.png"
              alt="Знамя 1862 года"
            />
          </div>
          <div className={styles.historyNikolayI}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/SmokingNikolayI.png",
                })
              }
              className={styles.imgSmokingNikolayI}
              src="/src/assets/img/SmokingNikolayI.png"
              alt="Форма одежды при Николае I"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Desc2Cadet.png",
                })
              }
              className={styles.imgCadetKorpus}
              src="/src/assets/img/Desc2Cadet.png"
              alt="Description 2 Cadet "
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Mendeleev.png",
                })
              }
              className={styles.imgMendeleev}
              src="/src/assets/img/Mendeleev.png"
              alt="Mendeleev"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Dobrolyubov.png",
                })
              }
              className={styles.imgDobrolyubov}
              src="/src/assets/img/Dobrolyubov.png"
              alt="Dobrolyubov"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Chernishevskiy.png",
                })
              }
              className={styles.imgChernishevskiy}
              src="/src/assets/img/Chernishevskiy.png"
              alt="Chernishevskiy"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/GeneralPlan2.png",
                })
              }
              className={styles.imgGeneralPlan2}
              src="/src/assets/img/GeneralPlan2.png"
              alt="GeneralPlan2"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Znamya1844.png",
                })
              }
              className={styles.imgZnamya1844}
              src="/src/assets/img/Znamya1844.png"
              alt="Znamya1844"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/GeneralPlan1858.png",
                })
              }
              className={styles.imgGeneralPlan1858}
              src="/src/assets/img/GeneralPlan1858.png"
              alt="GeneralPlan1858"
            />
          </div>
        </div>
        <div className={styles.imp8}>
          <div className={styles.historyAlexanderII}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Attestat.png",
                })
              }
              className={styles.imgAttestat}
              src="/src/assets/img/Attestat.png"
              alt="Attestat"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/SmokingAlexanderII.png",
                })
              }
              className={styles.imgSmokingAlexII}
              src="/src/assets/img/SmokingAlexanderII.png"
              alt="SmokingAlexanderII"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Desc2.png",
                })
              }
              className={styles.img1863}
              src="/src/assets/img/Desc2.png"
              alt="Decs1863"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Cadets1887.png",
                })
              }
              className={styles.imgCadets1887}
              src="/src/assets/img/Cadets1887.png"
              alt="Cadets1887"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/DesctoPlan.png",
                })
              }
              className={styles.imgDesctoPlan}
              src="/src/assets/img/DesctoPlan.png"
              alt="DesctoPlan"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/ChurchNevskiy.png",
                })
              }
              className={styles.imgChurchNevskiy}
              src="/src/assets/img/ChurchNevskiy.png"
              alt="ChurchNevskiy"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Soyuzov.png",
                })
              }
              className={styles.imgSoyuzov}
              src="/src/assets/img/Soyuzov.png"
              alt="Soyuzov"
            />
          </div>
        </div>
        <div className={styles.imp9}>
          <div className={styles.historyAlexanderIII}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Mordovin.png",
                })
              }
              className={styles.imgMordovin}
              src="/src/assets/img/Mordovin.png"
              alt="Mordovin"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/AltarNevskiy.png",
                })
              }
              className={styles.imgAltarNevskiy}
              src="/src/assets/img/AltarNevskiy.png"
              alt="AltarNevskiy"
            />
          </div>
        </div>
        <div className={styles.imp10}>
          <div className={styles.historyNikolayII}>
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Moleben.png",
                })
              }
              className={styles.imgMoleben}
              src="/src/assets/img/Moleben.png"
              alt="Moleben"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/NikolayII.png",
                })
              }
              className={styles.imgNikolayII}
              src="/src/assets/img/NikolayII.png"
              alt="NikolayII"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/BirthdayCadet.png",
                })
              }
              className={styles.imgBirthdayCadet}
              src="/src/assets/img/BirthdayCadet.png"
              alt="BirthdayCadet"
            />
            <img
              onClick={() =>
                handleItemClick({
                  name: "",
                  image: "/src/assets/img/Gramota.png",
                })
              }
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
