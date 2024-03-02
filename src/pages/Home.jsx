import React from "react";
import styles from "./Home.module.scss";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;
