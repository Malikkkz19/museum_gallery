import React from "react";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.background}>
          <div className={styles.text}>
            <span>2467.</span>
            <p>
              Указ сей, начиная с пункта 3, писан Собственноручною Его Царского
              Величества рукою с Генваря 16 по 21 Февраля 1712... Генваря 16.
              Именный, в пунктах...{" "}
            </p>
            <span>17.</span>
            <p>Школу Инженерную умножить,</p>
            <p>а именно:</p>
            <p>
              сыскать мастера из Русских, который бы учил цифири, или на башню
              для сего учения посылать; и когда Арифметику окончить, учить
              Геометрию, сколько до Инженерства надлежит;
            </p>
            <p>а потом отдавать Инженеру учить</p>
            <p>
              Фортификацию и держать всегда полное число 100 человек, или 150 из
              которых чтоб две трети, или по нужде были из Дворянских детей»{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.content}></div>
    </div>
  );
};

export default Card;
