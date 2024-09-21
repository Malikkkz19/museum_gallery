import React, { useState, useEffect } from "react";
import styles from "./Content.module.scss";
import Modal from "../Modal/Modal";
// import DescImage from "../DescImage/DescImage";
import ReactImageMagnify from "react-image-magnify";
import { personDescription } from "../../utils/data";

const Content = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selected, setSelected] = useState(null);
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState({ left: 0 });
  const [sizeModal, setSizeModal] = useState(0);
  const [heightModal, setHeightModal] = useState(0);
  const [positionImg, setPositionImg] = useState({ align: "", justify: "" });
  const [id, setId] = useState("");
  // const [content, setContent] = useState("");

  // const imageStyle = {
  //   transition: "all 250ms ease-in-out",
  //   transform: "scale(2.2)",
  //   width: "100px",
  // };


  const handleItemClick = (
    item,
    width,
    left,
    sizeModal,
    heightModal,
    positionImg,
    id
  ) => {
    setPosition(left);
    setSelected(item);
    setWidth(width);
    setModalActive(true);
    setSizeModal(sizeModal);
    setHeightModal(heightModal);
    setPositionImg(positionImg);
    setId(id);
  };

  return (
    <div className={styles.content}>
      <div className={styles.imperators}>
        <div className={styles.imp1}>
          <div className={styles.description}>
            <img
              id="Petr1"
              className={styles.descImage}
              src="/УказПетра.png"
              alt="desc"
            />

            {selected && (
              <Modal
                active={modalActive}
                setActive={setModalActive}
                position={position}
              >
                {selected.length < 2 &&
                  id !== "Kutuzov" &&
                  id !== "Arakcheev" &&
                  id !== "Melissino" &&
                  id !== "Konovnicin" &&
                  id !== "Golenischev" &&
                  id !== "Bruce" &&
                  id !== "Minikh" &&
                  id !== "Shuvalov" &&
                  id !== "Vilboa" &&
                  id !== "Orlov" &&
                  id !== "Meller" &&
                  id !== "Potemkin" &&
                  id !== "MikhailPavlovich" &&
                  id !== "Gessen" &&
                    id !== "Matveevich" &&
                    id !== "Lomonosov" &&
                    id !== "Repnin" &&
                    id !== "Chernishevskiy" &&
                    id !== "Dobrolyubov" &&
                    id !== "Mendeleev" &&
                    id !== "Zubov" &&
                    id !== "MikhailNikolaevich" &&
                    id !== "KonstantinPavlovich" &&
                    id !== "SmokingEkaterinaII" &&
                    id !== "SmokingAlexI" &&
                    id !== "SmokingNikolayI" &&
                    id !== "SmokingAlexII" &&
                    id !== "SmokingPavelI"
                     && (
                    <div
                      className={styles.modal}
                      style={{
                        width: sizeModal,
                        height: heightModal,
                        alignItems: positionImg.align,
                        justifyContent: positionImg.justify,
                      }}
                    >
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                  )}
                {selected.length > 1 && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      flexDirection: "column",
                      height: "1100px",
                      overflowY: "auto",
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModalMap} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{ width: width }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {id === "Kutuzov" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 36,
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3",
                              width: "610px",
                              WebkitTextStroke: "1px #000",
                              fontFamily: "'Dosis', sans-serif",
                              textAlign: "center",
                              padding: "10px"
                            }}
                          >
                            {personDescription[0].title}
                          </div>
                        </div>
                        <div>{personDescription[0].content}</div>
                      </div>
                      ))
                    </div>
                  </div>
                )}
                {id === "Arakcheev" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 36,
                              WebkitTextStroke:"1px #000",
                              fontFamily: "'Dosis', sans-serif",
                              textAlign: "center",
                              width: "610px",
                              padding: "10px",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[1].title}
                          </div>
                        </div>
                        <div>{personDescription[1].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Melissino" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 36,
                              WebkitTextStroke:"1px #000",
                              fontFamily: "'Dosis', sans-serif",
                              textAlign: "center",
                              width: "610px",
                              padding: "10px",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[2].title}
                          </div>
                        </div>
                        <div>{personDescription[2].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Konovnicin" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 36,
                              WebkitTextStroke:"1px #000",
                              fontFamily: "'Dosis', sans-serif",
                              textAlign: "center",
                              width: "610px",
                              padding: "10px",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[3].title}
                          </div>
                        </div>
                        <div>{personDescription[3].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Golenischev" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 28,
                              WebkitTextStroke:"1px #000",
                              fontFamily: "'Dosis', sans-serif",
                              textAlign: "center",
                              width: "610px",
                              padding: "10px",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[4].title}
                          </div>
                        </div>
                        <div>{personDescription[4].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Bruce" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 40,
                              width: "600px",
                              textAlign:"center",
                              fontWeight: "bold",
                              WebkitTextStroke: "1px #000",
                              fontFamily: "'Dosis', sans-serif",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              paddingInline: "20px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[5].title}
                          </div>
                        </div>
                        <div>{personDescription[5].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Minikh" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 40,
                              fontWeight: "bold",
                              WebkitTextStroke: "1px #000",
                              fontFamily: "'Dosis', sans-serif",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              paddingInline: "20px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[6].title}
                          </div>
                        </div>
                        <div>{personDescription[6].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Shuvalov" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 36,
                              WebkitTextStroke:"1px #000",
                              fontFamily: "'Dosis', sans-serif",
                              textAlign: "center",
                              width: "610px",
                              padding: "10px",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3",
                            }}
                          >
                            {personDescription[7].title}
                          </div>
                        </div>
                        <div>{personDescription[7].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Vilboa" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 38,
                              padding: "10px",
                              textAlign: "center",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[17].title}
                          </div>
                        </div>
                        <div>{personDescription[17].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Orlov" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 36,
                              WebkitTextStroke:"1px #000",
                              fontFamily: "'Dosis', sans-serif",
                              textAlign: "center",
                              width: "610px",
                              padding: "10px",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[9].title}
                          </div>
                        </div>
                        <div>{personDescription[9].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Meller" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 36,
                              WebkitTextStroke:"1px #000",
                              fontFamily: "'Dosis', sans-serif",
                              textAlign: "center",
                              width: "610px",
                              padding: "10px",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[10].title}
                          </div>
                        </div>
                        <div>{personDescription[10].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Potemkin" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 32,
                              WebkitTextStroke:"1px #000",
                              fontFamily: "'Dosis', sans-serif",
                              textAlign: "center",
                              width: "610px",
                              padding: "10px",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[11].title}
                          </div>
                        </div>
                        <div>{personDescription[11].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "MikhailPavlovich" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 34,
                              WebkitTextStroke:"1px #000",
                              fontFamily: "'Dosis', sans-serif",
                              textAlign: "center",
                              width: "610px",
                              padding: "10px",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[12].title}
                          </div>
                        </div>
                        <div>{personDescription[12].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Gessen" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                            marginLeft: "-20px",
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 34,
                              textAlign: "center",
                              fontWeight: "bold",
                              width: "610px",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[13].title}
                          </div>
                        </div>
                        <div>{personDescription[13].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Matveevich" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                            marginLeft: "-20px",
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 34,
                              textAlign: "center",
                              width: "610px",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[14].title}
                          </div>
                        </div>
                        <div>{personDescription[14].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Lomonosov" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                            marginLeft: "-20px",
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 38,
                              padding: "10px",
                              textAlign: "center",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[15].title}
                          </div>
                        </div>
                        <div>{personDescription[15].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Repnin" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                            marginLeft: "-20px",
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 38,
                              padding: "10px",
                              textAlign: "center",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[16].title}
                          </div>
                        </div>
                        <div>{personDescription[16].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Chernishevskiy" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                            marginLeft: "-20px",
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 38,
                              width: "610px",
                              padding: "10px",
                              textAlign: "center",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[18].title}
                          </div>
                        </div>
                        <div>{personDescription[18].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Dobrolyubov" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                            marginLeft: "-20px",
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 38,
                              width: "610px",
                              padding: "10px",
                              textAlign: "center",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[19].title}
                          </div>
                        </div>
                        <div>{personDescription[19].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Mendeleev" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                            marginLeft: "-20px",
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 38,
                              width: "610px",
                              padding: "10px",
                              textAlign: "center",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[20].title}
                          </div>
                        </div>
                        <div>{personDescription[20].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "Zubov" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                            marginLeft: "-20px",
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 38,
                              width: "610px",
                              padding: "10px",
                              textAlign: "center",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[21].title}
                          </div>
                        </div>
                        <div>{personDescription[21].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "MikhailNikolaevich" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                            marginLeft: "-20px",
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 38,
                              width: "610px",
                              padding: "10px",
                              textAlign: "center",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[22].title}
                          </div>
                        </div>
                        <div>{personDescription[22].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "KonstantinPavlovich" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >
                    <div className={styles.imageArray}>
                      {selected.map((imageData) => (
                        <img
                          className={`${styles.imgModal} ${
                            imageData ? styles.imgModalActive : ""
                          }`}
                          src={imageData.image}
                          alt="x"
                          style={{
                            width: width,
                            marginLeft: "-20px",
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 36,
                              width: "610px",
                              padding: "10px",
                              textAlign: "center",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[23].title}
                          </div>
                        </div>
                        <div>{personDescription[23].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "SmokingEkaterinaII" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >

                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 36,
                              width: "610px",
                              padding: "10px",
                              textAlign: "center",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3",
                            }}
                          >
                            {personDescription[24].title}
                          </div>
                        </div>
                        <div>{personDescription[24].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "SmokingAlexI" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >

                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 36,
                              width: "610px",
                              padding: "10px",
                              textAlign: "center",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[25].title}
                          </div>
                        </div>
                        <div>{personDescription[25].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "SmokingNikolayI" && (
                  <div
                    className={styles.modal}
                    style={{
                      width: sizeModal,
                      height: heightModal,
                      alignItems: positionImg.align,
                      justifyContent: positionImg.justify,
                    }}
                  >

                    <div className={styles.personDescription}>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              color: "#efc074",
                              fontSize: 36,
                              width: "610px",
                              padding: "10px",
                              textAlign: "center",
                              fontWeight: "bold",
                              border: "2px solid #000",
                              borderRadius: "15px",
                              marginTop: "10px",
                              backgroundColor: "#d8d3d3"
                            }}
                          >
                            {personDescription[26].title}
                          </div>
                        </div>
                        <div>{personDescription[26].content}</div>
                      </div>
                    </div>
                  </div>
                )}
                {id === "SmokingAlexII" && (
                    <div
                        className={styles.modal}
                        style={{
                          width: sizeModal,
                          height: heightModal,
                          alignItems: positionImg.align,
                          justifyContent: positionImg.justify,
                        }}
                    >
                      <div className={styles.imageArray}>
                        {selected.map((imageData) => (
                            <img
                                className={`${styles.imgModal} ${
                                    imageData ? styles.imgModalActive : ""
                                }`}
                                src={imageData.image}
                                alt="x"
                                style={{
                                  width: width,
                                  marginLeft: "-20px",
                                  marginTop: "-15px"
                                }}
                            />
                        ))}
                      </div>
                      <div className={styles.personDescription}>
                        <div>
                          <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                          >
                            <div
                                style={{
                                  color: "#efc074",
                                  fontSize: 36,
                                  width: "610px",
                                  padding: "10px",
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  border: "2px solid #000",
                                  borderRadius: "15px",
                                  marginTop: "10px",
                                  backgroundColor: "#d8d3d3"
                                }}
                            >
                              {personDescription[27].title}
                            </div>
                          </div>
                          <div>{personDescription[27].content}</div>
                        </div>
                      </div>
                    </div>
                )}
                {id === "SmokingPavelI" && (
                    <div
                        className={styles.modal}
                        style={{
                          width: sizeModal,
                          height: heightModal,
                          alignItems: positionImg.align,
                          justifyContent: positionImg.justify,
                        }}
                    >
                      <div className={styles.imageArray}>
                        {selected.map((imageData) => (
                            <img
                                className={`${styles.imgModal} ${
                                    imageData ? styles.imgModalActive : ""
                                }`}
                                src={imageData.image}
                                alt="x"
                                style={{
                                  width: width,
                                  marginLeft: "-20px",
                                }}
                            />
                        ))}
                      </div>
                      <div className={styles.personDescription}>
                        <div>
                          <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                          >
                            <div
                                style={{
                                  color: "#efc074",
                                  fontSize: 36,
                                  width: "610px",
                                  padding: "10px",
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  border: "2px solid #000",
                                  borderRadius: "15px",
                                  marginTop: "10px",
                                  backgroundColor: "#d8d3d3"
                                }}
                            >
                              {personDescription[28].title}
                            </div>
                          </div>
                          <div>{personDescription[28].content}</div>
                        </div>
                      </div>
                    </div>
                )}
              </Modal>
            )}
          </div>

          <div className={styles.historyPetr}>
            <div className={styles.Decree}>
              <span style={{ paddingLeft: "10px" }}>
                В <b>1701 году</b>
              </span>{" "}
              по указу Петра I в Москве организована Артиллерийская школа,
              которая состояла из трёх частей - школа «верхняя» - инженерная и
              две школы «нижних» - «цифирная» и «словесная». <br />
              <span style={{ paddingLeft: "10px" }}>Главный надзор</span> за
              Артиллерийской школой принадлежал Якову Вилимовичу Брюсу.
              <br />{" "}
              <span style={{ color: "#eac949", paddingInline: "10px" }}>
                <b>16 января 1712 года</b>
              </span>{" "}
              «верхняя» школа выделена из Артиллерийской, и переведена на новое
              место - к Сухаревой Башне в Немецкой слободе. Школа делилась на
              три класса: класс арифметики, класс геометрии и тригонометрии,
              класс фортификации. Учителями в инженерную школу были назначены
              пленный «свейский майор» и инженер Рейтер и полковник инженер
              Широк (Шток).
            </div>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Брюс.png",
                    },
                  ],
                  450,
                  -100,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "Bruce"
                )
              }
              height={150}
              width={126}
              className={styles.imgBruce}
              src="/Брюс.png"
              alt="Bruce"
            />
            <img
              className={styles.imgGun}
              src="/пуш.png"
              alt="Пушечно-линейный двор"
            />
            <img
              className={styles.imgTown}
              src="/КартаМСК.png"
              alt="Карта МСК"
            />
            <img

              className={styles.imgIng}
              src="/Указ1719.jpg"
              alt="Указ об учреждении инженерной роты"
            />
            <div className={styles.Ing}>
              <b style={{ textAlign: "center", paddingLeft: "15px" }}>
                Указ об учреждении инженерной роты{" "}
              </b>{" "}
              <br />
              <p style={{ textAlign: "justify" }}>
                <b style={{ paddingLeft: "10px" }}>7 марта 1719 года</b> в
                Санкт-Петербурге учреждена Инженерная рота. Именной указ,
                объявленный из Военной коллегии, гласил: «Великий Государь
                указал: учинить при Санкт-Петербурге Инженерную роту и быть ей
                под владением Полковника Инженера Кулона, а в тое роту взять с
                Москвы Инженерной школы учеников всех, сколько их в той школе
                ныне обретается и Инженера, который при той школе определен для
                учения школьников, с надлежащими их инструменты и со всем, что
                есть».
              </p>
            </div>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Minikh.jpg",
                    },
                  ],
                  470,
                  100,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "Minikh"
                )
              }
              className={styles.imgMinih}
              src="/Миних.png"
              alt="Миних"
            />
            <img
              className={styles.imgSuhareva}
              src="/Сухарева.png"
              alt="Suhareva"
            />
          </div>
        </div>
        <div className={styles.imp2}>
          <div className={styles.description}>
            <img
              className={styles.descImage}
              src="/СенатУказ.png"
              alt="Description about Ekaterina I"
            />
          </div>
          <div className={styles.historyEkaterinaI}>

            <img
              className={styles.imgMap1}
              src="/SPb_1756.jpg"
              alt="Карта"
            />
            <img
              className={styles.imgMap2}
              src="/SPb_1777.jpg"
              alt="Карта"
            />
            <img
              className={styles.imgMap3}
              src="/SPb_1840.jpg"
              alt="Карта"
            />
            <img
              className={styles.imgMap4}
              src="/spb_1868.jpg"
              alt="Карта"
            />

            <div className={styles.Text}>
              <b style={{ paddingLeft: "10px" }}>7 марта 1719 года</b> в
              Санкт-Петербурге учреждена инженерная рота. <br />
              <b style={{ paddingLeft: "10px" }}>В апреле 1719 года</b> ученики
              Московской инженерной школы переведены в Санкт-Петербург. Во главе
              Петербургской школы поставлен инженер-полковник Де-Кулон
              (De-Colong). <br />
              <b style={{ paddingLeft: "10px" }}>В июне 1728 года</b>
              именным указом Екатерины I Инженерная часть выделена из ведения
              Канцелярии Главной Артиллерии, и подчинена особой Инженерной
              конторе под руководством графа Фон-Миниха. <br />
              <b style={{ paddingLeft: "10px" }}>В 1733 году</b> Инженерная
              школа переведена в построенный для неё казеный деревянный дом на
              Петербургской стороне, на берегу реки Петровка (Ждановка).
            </div>
            <div className={styles.Text1}>
              <b style={{ paddingLeft: "10px" }}>В 1731 году</b> на Литейном
              дворе в Санкт-Петербурге граф Миних основал Артиллерийскую школу.
              <br /> <span style={{ paddingLeft: "10px" }}>
                Её основной
              </span>{" "}
              контингент составили незнатные дворяне и офицерские дети. <br />
              <span style={{ paddingLeft: "10px" }}>Директором школы</span>{" "}
              назначен капитан Гинтер. <br />{" "}
              <span style={{ paddingLeft: "10px" }}>
                Первоночально обучалось
              </span>{" "}
              60 учеников, вскоре их численость была доведена до 90.
            </div>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Репнин.png",
                    },
                  ],
                  500,
                  600,
                  1200,
                  900,
                  { align: "flex-end", justify: "flex-start" },
                  "Repnin"
                )
              }
              className={styles.imgRepnin}
              src="/Репнин.png"
              alt="Repnin"
            />
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Lomonosov1.jpg",
                    },
                  ],
                  500,
                  500,
                  1200,
                  900,
                  { align: "flex-end", justify: "flex-start" },
                  "Lomonosov"
                )
              }
              className={styles.imgLomonosov}
              src="/Ломоносов1.png"
              alt="Lomonosov"
            />
            <div className={styles.textLomonosov}>
              <span style={{ paddingLeft: "10px" }}>
                Михаил  Васильевич  Ломоносов
              </span>{" "}
              оказал существенное влияние на Петра Ивановича Шувалова в ходе
              реформирования Инженерной школы , при подготовке плана учреждения
              Кадетского корпуса. М.В. Ломоносов читал лекции ученикам
              Артиллерийской школы по физике и химии .
            </div>

            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Vilgelm.jpeg",
                    },
                  ],
                  500,
                  400,
                  1200,
                  800,
                  { align: "center", justify: "flex-start" },
                  "Gessen"
                )
              }
              className={styles.imgVilgelm}
              src="/Vilgelm.png"
              alt="Vilgelm"
            />
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Матвеевич.jpeg",
                    },
                  ],
                  500,
                  300,
                  1200,
                  800,
                  { align: "centerf", justify: "flex-start" },
                  "Matveevich"
                )
              }
              className={styles.imgMatveevich}
              src="/Гол-Кут.png"
              alt="Матвеевич"
            />
            <div className={styles.textMatveevich}>
              <span style={{ paddingLeft: "10px" }}>Светлейший князь</span>{" "}
              Илларион Матвеевич Голенищев-Кутузов. Генерал-поручик и сенатор.{" "}
              <span style={{ paddingLeft: "10px" }}>В 1737 году</span> Илларион
              Матвеевич блестяще окончил Инженерную школу.{" "}
              <span style={{ paddingLeft: "10px" }}>Илларион</span> Матвеевич
              после Абрама Петровича Ганнибала стал главным военным инженером
              России.
            </div>
            <img className={styles.imgKanal} src="/Канал.png" alt="Канал" />
          </div>
        </div>
        <div className={styles.imp3}>
          <div className={styles.description}>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Shuvalov.jpg",
                    },
                  ],
                  450,
                  800,
                  1200,
                  900,
                  { align: "flex-end", justify: "flex-start" },
                  "Shuvalov"
                )
              }
              className={styles.descImage}
              src="/Шувалов.png"
              alt="desc"
            />
          </div>
          <div className={styles.historyElizabeth}>
            <img
              className={styles.imgUchenik}
              src="/Uchenik.png"
              alt="Uchenik"
            />
            <div className={styles.textSuvorov}>
              <span style={{ paddingLeft: "10px" }}>Весной 1759 года</span> в
              Соединенную Артиллерийскую и Инженерную школу в возрасте 14 лет
              был принят Михаил Илларионович Кутузов.{" "}
              <span style={{ paddingLeft: "10px" }}>Будучи учеником </span>
              выпускного класса, решением графа П.И. Шувалова от 10 декабря 1759
              года, Михаил был привлечен к проведению занятий по арифметике и
              геометрии в Соединенной солдатской школе. Программу обучения
              способный юноша завершил к началу 1761 года.{" "}
              <span style={{ paddingLeft: "10px" }}>В первое офицерское</span>
              звание инженер-прапорщика Михаил был произведен 1 января 1761
              года. До марта 1762 года он служил в Инженерном корпусе, затем
              флигель-адъютантом Петербургского и Ревельского
              генерал-губернатора.{" "}
              <span style={{ paddingLeft: "10px" }}>21 августа 1762 года</span>,
              в возрасте17 лет, был произведен в капитаны и направлен в Старую
              Ладогу командиром роты в Астраханский пехотный полк, в котором
              семь месяцев служил под началом А.В. Суворова.
            </div>
            <div className={styles.textShuv}>
              <span style={{ paddingLeft: "10px" }}>В 1756 году</span> главным
              начальником обеих школ стал граф П.И. Шувалов.{" "}
              <span style={{ paddingLeft: "10px" }}>27 апреля</span> 1758 граф
              Шувалов представил Государыне Елизавете Петровне доклад с
              обоснованием и планом объединения Артиллерийской и Инженерной школ
              в Артиллерийский и Инженерный кадетский корпус.{" "}
              <span style={{ paddingLeft: "10px" }}>22 августа 1758</span>
              года по его указу Канцелярией Главной Артиллерии и Фортификации,
              было произведено соединение обеих школ в одну.{" "}
              <span style={{ paddingLeft: "10px" }}>Соединённая школа</span>
              была принята генералом-фельдцейхмейстером графом Шуваловым под
              личную «особенную» дирекцию.{" "}
              <span style={{ paddingLeft: "10px" }}>
                Командование соединённой школой
              </span>{" "}
              было возложено на инженер-капитана М. И. Мордвинова.{" "}
              <span style={{ paddingLeft: "10px" }}>На момент</span>
              объединения, Инженерная школа (как и Артиллеийская) находилась в
              ведении Канцелярии Главной Артиллерии и Фортификации, и
              подчинялась инженер-генерал-майору Абраму Петровичу Ганнибалу.{" "}
              <span style={{ paddingLeft: "10px" }}>С 1760 года</span>{" "}
              Артиллерийская и Инженерная дворянская школа получила право
              выпускать учеников в офицерских чинах.{" "}
              <span style={{ paddingLeft: "10px" }}>В школе</span> была
              оставлена Арифметическая и других наук школа (для солдатских
              детей), с которой в 1759 году была соединенна школа для детей
              инженерных служителей. В итоге была образована Соединённая
              солдатская школа.
            </div>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/kutuzov(1).jpg",
                    },
                  ],
                  450,
                  850,
                  1200,
                  800,
                  {
                    align: "flex-end",
                    justify: "flex-start",
                  },
                  "Kutuzov"
                )
              }
              className={styles.imgKutuzov}
              src="/Кутузов.png"
              alt="Kutuzov"
            />

            <div className={styles.textSchool}>
              <span style={{ paddingLeft: "10px" }}>При</span> Соединённой
              Артиллерийской и Инженерной шляхетной школе была оставлена школа
              для солдатских сыновей, обучавшихся до этого в Артиллерийской
              школе. К ней в 1759 году присоединили переведенную из
              Петропавловской крепости школу «для детей инженерных служителей».
              Новое учебное заведение стало называться Соединенной солдатской
              школой. Позднее было приказано из всех гарнизонных артиллерийских
              школ присылать сюда учеников, окончивших арифметику, для
              дальнейшего обучения геометрии. Школа готовила унтер-офицеров для
              армии, художников, чертежников и мастеров различного профиля.
              Численность школы составляла 150 человек. С образованием
              Артиллерийского и инженерного шляхетного кадетского корпусабыла
              создана Школа художеств, куда перевели из Солдатской школы
              171 человека. В ней воспитанники, получая общее образование,
              обучались еще литейному, чеканному делу, работам по дереву и
              камню. В ходе установления нового штата корпуса в 1784 году Школа
              художеств опять была переименована в Солдатскую роту.
            </div>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/вильбоа1.png",
                    },
                  ],
                  450,
                  1300,
                  1200,
                  900,
                  { align: "flex-end", justify: "flex-start" },
                  "Vilboa"
                )
              }
              className={styles.imgVilboa}
              src="/вильбоа1.png"
              alt="Vilboa"
            />
            <div className={styles.textVilboa}>
              <span style={{ paddingLeft: "10px" }}>25 октября 1762 года</span>{" "}
              Императрицей Екатериной II, по представлению
              генерал-фельдцейхмейстера А. Н. Вильбоа, был утверждён Устав
              Артиллерийского и Инженерного Шляхетного Кадетского корпуса, в
              основу которого был положен проект графа П.И. Шувалова. Директором
              корпуса был назначен подполковник Мордвинов М. И.{" "}
              <span style={{ paddingLeft: "10px" }}>В июне 1763 года</span>
              обе роты, составлявшие ранее Артиллерийскую и Инженерную школы
              были соединенны в одну в следующем составе:{" "}
              <span style={{ paddingLeft: "10px" }}>Сержант - 1,</span>
              каптенармус - 1, фурьер - 1, капрал - 8, бомбардир - 26, кадет -
              44. <span style={{ paddingLeft: "10px" }}>В 1764 году</span>
              директором корпуса был назначен подполковник Бегичев М. С.{" "}
              <span style={{ paddingLeft: "10px" }}>В 1765</span>
              году, возведённый в должность генерал-фельдцейхмейстера, граф Г.Г.
              Орлов вернул в корпус М. И. Мордвинова, который продолжил
              осуществление замыслов графа П. И. Шувалова.{" "}
              <span style={{ paddingLeft: "10px" }}>В 1783 году,</span> после
              смерти М. И. Мордвинова (1782 г.), в командование корпусом, по
              представлению князя Г. А. Потёмкина, вступил генерал-майор
              П. И. Мелиссино.
            </div>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/ФормаОдежды.png",
                    },
                  ],
                  450,
                  1500,
                  680,
                  900,
                  { align: "flex-end", justify: "flex-start" },
                  "SmokingEkaterinaII"
                )
              }
              className={styles.imgSmoking}
              src="/ФормаОдежды.png"
              alt="Smoking"
            />
          </div>
        </div>
        <div className={styles.imp4}>
          <div className={styles.description}>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Orlov.png",
                    },
                  ],
                  450,
                  1500,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "Orlov"
                )
              }
              className={styles.descImage1}
              src="/Орлов.png"
              alt="Description Orlov"
            />
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Potemkin.png",
                    },
                  ],
                  450,
                  2500,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "Potemkin"
                )
              }
              className={styles.descImage2}
              src="/Потемкин.png"
              alt="Description Orlov"
            />
          </div>
          <div className={styles.historyEkaterinaII}>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Melissino1.png",
                    },
                  ],
                  470,
                  2400,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "Melissino"
                )
              }
              className={styles.imgMelissino}
              src="/Мелиссино.png"
              alt="Melissino"
            />
            <div className={styles.descMelissino} alt="Desc Melissino">
              <span style={{ paddingLeft: "10px" }}>Пётр </span>Иванович
              Мелиссино - первый русский генерал от артиллерии, с 1783 по 1797
              год директор Артиллерийского и Инженерного шляхетного (кадетского
              с 1794) корпуса. <br />{" "}
              <span style={{ paddingLeft: "10px" }}>Автор</span> проекта
              реформирования Корпуса (1784). <br />
              <span style={{ paddingLeft: "10px" }}>В период</span> его
              руководства по проекту Демерцова построено здание кадетских
              классов (1795-1796 гг.). <br />
              <span style={{ paddingLeft: "10px" }}>Фигурой,</span> ростом и
              осанкой Мелиссино настолько напоминал Петра I, что скульптор
              Фальконе просил его позировать для фигуры "Медного всадника".{" "}
              <br />
              <span style={{ paddingLeft: "10px" }}>После</span>
              смерти П.И. Мелиссино, корпусом командовали А.И. Корсаков, А.А.
              Клеймихель.
            </div>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Форма.png",
                    },
                  ],
                  480,
                  2200,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "SmokingPavelI"
                )
              }
              className={styles.imgSmokingg}
              src="/Форма.png"
              alt="Forma"
            />
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Arakcheev1.png",
                    },
                  ],
                  480,
                  2800,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "Arakcheev"
                )
              }
              className={styles.imgArakcheev}
              src="/Аракчеев.png"
              alt="Arakcheev"
            />
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Meller.png",
                    },
                  ],
                  480,
                  1950,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "Meller"
                )
              }
              className={styles.imgMeller}
              src="/Meller.png"
              alt="Meller"
            />
            <div className={styles.descArakcheev} alt="Desc Arakcheev">
              <span style={{ paddingLeft: "10px" }}>Aракчеев</span> Алексей
              Андреевич - генерал от артиллерии, военный министр. В 1787 году
              закончил Артиллерийский и инженерный кадетский корпус в звании
              подпоручика и оставлен при корпусе, преподавал математику и
              артиллерию. <br />
              <span style={{ paddingLeft: "10px" }}>Председатель</span> комиссии
              по преобразованию артиллерии Русской армии с 1802 года. <br />
              <span style={{ paddingLeft: "10px" }}>Инспектор</span> всей
              артиллерии и командир лейб-гвардии артиллерийского батальона.
              Участник Аустерлицкого сражения (командир пехотной дивизии).{" "}
              <br />
              <span style={{ paddingLeft: "10px" }}>13</span>
              января 1808 года назначен военным министром Российской империи;{" "}
              <br />
              <span style={{ paddingLeft: "10px" }}>С</span> 1 января 1810
              председатель департамента военных дел в Государственном совете.{" "}
              <br />
              <span style={{ paddingLeft: "10px" }}>С</span> 14 июня 1812 -
              управляющий Канцелярией императора Александра I.
            </div>
            <img
              className={styles.imgMedalion}
              src="/Medalion.png"
              alt="Medalion"
            />
            <div className={styles.textMedalion}>
              <span style={{ paddingLeft: "10px" }}>Наибoлее</span>{" "}
              преуспевающие кадеты награждались серебряными, вызолоченными
              медалями, на одной стороне которой находился вензель императрицы
              Екатерины II, а на другой - надпись: «За прилежность и хорошее
              поведение».
              <br /> <span style={{ paddingLeft: "10px" }}>Медаль</span>{" "}
              носилась на позолоченной цепочке, в петлице. Количество кадетов,
              имевших медали, никогда не превышало 12. <br />
              <span style={{ paddingLeft: "10px" }}>Такой</span> медалью в
              августе 1786 года был награжден кадет Алексей Аракчеев.
            </div>
            <img className={styles.imgHorse} src="/Horse.png" alt="Horse" />
            <img
              className={styles.imgCadets}
              src="/Cadets.png"
              alt="Cadets"
            />
            <img

              className={styles.imgGreece}
              src="/Greece.png"
              alt="Greece"
            />
            <div className={styles.descCadets}>
              <span style={{ paddingLeft: "10px" }}>7 января</span> 1775 года
              организованна Греческая гимназия, которая в 1792 году
              преобразована в Корпус чужестранных единоверцев. <br />
              <span style={{ paddingLeft: "10px" }}>М.И. Мордвинову</span> было
              поручено «устроить помещение для греческих мальчиков на 200
              человек». 7 января 1775 года повелено было поместить эту школу
              рядом с Артиллерийским и инженерным шляхетным корпусом. Указ
              гласил: «...поручаем вам построить для них деревянный дом на
              пустом против Артиллерийского кадетского корпуса месте, на что и
              приказали отпустить вам из Кабинета двадцать тысяч рублей»
            </div>
            <img className={styles.imgZnamya} src="/Znamya.png" alt="Znamya" />
            <img
              className={styles.imgPlan}
              src="/Схема1.png"
              alt="General Plan"
            />
            <img
              className={styles.imgGeneralPlan2}
              src="/Схемa2.png"
              alt="GeneralPlan212312123234133123213"
            />
          </div>
        </div>
        <div className={styles.imp5}>
          <div className={styles.historyPavelI}>
            <img
              className={styles.descEk2}
              src="/descek2.png"
              alt="Desc Ekaterina 2"
            />
            <img className={styles.imgManeg} src="/maneg.png" alt="Maneg" />
            <img
              className={styles.imgPlanTown}
              src="/plantown.png"
              alt="Plan Town"
            />
          </div>
        </div>
        <div className={styles.imp6}>
          <div className={styles.description}>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/ВеликийКнязь.png",
                    },
                  ],
                  450,
                  3800,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "MikhailPavlovich"
                )
              }
              className={styles.imgDesc1}
              src="/МихаилПавлович.png"
              alt="МихаилПавлович"
            />
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/МихаилНиколаевич.png",
                    },
                  ],
                  500,
                  4500,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "MikhailNikolaevich"
                )
              }
              className={styles.imgDesc2}
              src="/Романов.png"
              alt="Romanov"
            />
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/GolenischevK.jpg",
                    },
                  ],
                  450,
                  3900,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "Golenischev"
                )
              }
              className={styles.imgDesc3}
              src="/Голенищев-Кутузов.png"
              alt="Golenischev"
            />
          </div>
          <div className={styles.historyAlexanderI}>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Зубов.png",
                    },
                  ],
                  450,
                  3300,
                  1200,
                  750,
                  { align: "flex-end", justify: "flex-start" },
                  "Zubov"
                )
              }
              className={styles.imgZub}
              src="/Зубов.png"
              alt="Zubov"
            />
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/ФормаАлек1.png",
                    },
                  ],
                  450,
                  3300,
                  680,
                  900,
                  { align: "flex-end", justify: "flex-start" },
                  "SmokingAlexI"
                )
              }
              className={styles.imgSmokingAlex1}
              src="/ФормаАлек1.png"
              alt="SmokingAlex1"
            />
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/КонстПавл.png",
                    },
                  ],
                  450,
                  3300,
                  1200,
                  750,
                  { align: "flex-end", justify: "flex-start" },
                  "KonstantinPavlovich"
                )
              }
              className={styles.imgKonst}
              src="/КонстПавл.png"
              alt="KOnstantin"
            />

            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Konovnicin1.jpg",
                    },
                  ],
                  450,
                  3750,
                  1200,
                  750,
                  { align: "flex-end", justify: "flex-start" },
                  "Konovnicin"
                )
              }
              className={styles.imgZubov}
              src="/Коновницын.png"
              alt="Zubov"
            />
            <div className={styles.descKorpus}>
              <span style={{ paddingLeft: "10px" }}>В 1800 году</span> по
              распоряжению Императора Павла 1, Корпус был переименован во Второй
              Кадетский корпус, и был отнесён к Первой группе учебных заведений,
              получив право из числа дворянских детей готовить непосредственно
              офицеров. Директором был назначен генерал от инфантерии В. А.
              Зубов. <br />
              <span style={{ paddingLeft: "10px" }}>В</span> 1803 году было
              завершено строительство правого фаса кадетских камер, и строения,
              выходящего на Большую Спасскую улицу (ныне улица Красного
              курсанта), а в 1805 году левого фаса. <br />
              <span style={{ paddingLeft: "10px" }}>После</span>
              смерти В. А. Зубова в 1804 году, корпус вновь возглавил генерал А.
              А. Клеймихель, командовавший корпусом до 1816 года. <br />
              <span style={{ paddingLeft: "10px" }}>2</span> апреля 1806 года
              воспитанники Второго КК разделены на 4 роты: одну гренадерскую и
              три мушкетерские. <br />
              <span style={{ paddingLeft: "10px" }}>С 1809 </span>по 1811 год по
              проекту исполняющего должность корпусного архитектора, учителя
              гражданской архитектуры капитана Кузнецова вместо деревянных
              манежа и конюшни, были построены новые каменные здания (манеж с
              принадлежащими ему квартирами и конюшней).
            </div>
            <div className={styles.descKorpus2}>
              <span style={{ paddingLeft: "10px" }}>14</span> марта 1807 года
              при Втором кадетском корпусе создан Волонтерский корпус. <br />
              <span style={{ paddingLeft: "10px" }}>В</span> 1809 году из
              дворян, обучавшихся в Первом и Втором кадетских корпусах, при
              Втором КК сформированы 1 и 2. Дворянские батальоны. <br />
              <span style={{ paddingLeft: "10px" }}>Волонтерский</span> корпус
              осуществлял ускоренную подготовку дворян не моложе 16 лет,
              желающих поступить на военную службу, чтобы те, «познав порядок
              воинской службы, были затем представлены в офицеры». Срок обучения
              составлял два года. <br />
              <span style={{ paddingLeft: "10px" }}>Своей</span>
              достаточной учебной базы Волонтерский корпус не имел. Часть
              занятий его воспитанниками посещалась совместно с кадетами Второго
              кадетского корпуса, а большинство педагогов еще и работало в обоих
              учебных заведениях одновременно. Общими стали административная
              часть, лазарет, столовая, и часть объектов учебно- материальной
              базы. <br />
              <span style={{ paddingLeft: "10px" }}>В</span> 1808 году это
              учебное заведение получило название Дворянского полка. <br />
              <span style={{ paddingLeft: "10px" }}>28</span> ноября 1811 года
              для дворян, приготовлявшихся к кавалерийской службе учреждён
              Дворянский кавалерийский эскадрон.
            </div>
            <div className={styles.descKorpus3}>
              <span style={{ paddingLeft: "10px" }}>С</span> 3 февраля 1806 года
              Второй Кадетский Корпус поступил под управление Великого Князя
              Константина Павловича. <br />
              <span style={{ paddingLeft: "10px" }}>В</span> 1819 году Второй
              кадетский Корпус перешёл в подчинение Главного директора
              Пажеского, кадетских корпусов и Дворянского полка генерала от
              инфантерии Коновницына Петра Петровича, оставаясь при этом под
              главным начальством Великого Князя Константина Павловича. <br />
              <span style={{ paddingLeft: "10px" }}>В</span> 1823 году на эту
              должность был назначен генерал от кавалерии Павел Васильевич
              Голенищев Кутузов. <br />
              <span style={{ paddingLeft: "10px" }}>В</span> 1824 году Великий
              Князь Михаил Павлович принял второй Кадетский Корпус под личное
              покровительство.
            </div>

            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Excercirgaus1.png",
                    },
                  ],
                  550,
                  3900,
                  800,
                  800,
                  {
                    align: "flex-start",
                    justify: "center",
                  },
                  "main"
                )
              }
              className={styles.imgExcercirgaus}
              src="/Excercirgaus1.png"
              alt="Excercirgaus"
            />
            <div className={styles.descExcercirgaus}>
              <span style={{ paddingLeft: "10px" }}>В</span> 1820 году по
              проекту архитектора Л. Руска специально для Дворянского полка был
              построен самый большой в Петербурге экзерциргауз, предназначенный
              для проведения экзерций строевой подготовки, ружейных приемов,
              верховой езды, фехтования, военно-прикладных упражнений.
              <br />
              <span style={{ paddingLeft: "10px" }}>Впоследствии</span> здание
              было перестроено по проекту архитектора Афанасьева.
            </div>
            <div className={styles.descShtat}>
              <span style={{ paddingLeft: "10px" }}>По</span> штатам 1817 года
              во Втором кадетском корпусе числилось 700 кадетов. В 1830 году
              количество рот было увеличено до четырёх, первая рота стала
              именоваться ротой Великого Князя Михаила Павловича, шефа Второго
              кадетского корпуса. Кадетский корпус непосредственно подчинялся
              Главному директору кадетских корпусов. Эту должность с 1819 по
              1823 год занимал генералот инфантерии Пётр Петрович Коновницын.{" "}
              <br />
              <span style={{ paddingLeft: "10px" }}>С</span> 1816 по 1831 год
              Вторым кадетским корпусом, Дворянским полком и Кавалерийским
              эскадроном (в составе Дворянского полка) командовал генерал- майор
              Д.Д. Курута, являвшийся одновременно начальником штаба при Великом
              Князе Константине Павловиче. <br />
              <span style={{ paddingLeft: "10px" }}>Во</span> время отсутствия в
              Корпусе А.А. Клеймихеля и Д.Д. Куруты (с 1804 по 1832 год ),
              руководство им осуществлял А.И. Маркевич, Сыном А.И. Маркевича,
              подполковником С.А. Маркевичем, инспектором классов Второго
              кадетского корпуса, был написан первый исторический рукописный
              труд «Краткая история Второго кадетского корпуса»
            </div>
          </div>
        </div>
        <div className={styles.imp7}>
          <div className={styles.description}>
            <img
              className={styles.descImage}
              src="/Знамя1862.png"
              alt="Знамя 1862 года"
            />
          </div>
          <div className={styles.historyNikolayI}>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/SmokingNikolayI.png",
                    },
                  ],
                  500,
                  4400,
                  680,
                  900,
                  { align: "flex-end", justify: "flex-start" },
                    "SmokingNikolayI"
                )
              }
              className={styles.imgSmokingNikolayI}
              src="/SmokingNikolayI.png"
              alt="Форма одежды при Николае I"
            />
            <img

              className={styles.imgOber}
              src="/Ober.png"
              alt="Ober"
            />
            <img

              className={styles.imgBaraban}
              src="/Baraban.png"
              alt="Baraban"
            />
            <div className={styles.descSenat}>
              <span style={{ paddingLeft: "10px" }}>В</span> событиях на
              Сенатской площади 14 декабря 1825 года, восстании Черниговского
              пехотного полка и выступлении Литовского пионерного батальона
              участвовали воспитанники Второго кадетского корпуса и Дворянского
              полка.
              <br /> <span style={{ paddingLeft: "10px" }}>36</span>{" "}
              воспитанников кадетского корпуса были привлечены к следствию по
              делу об участии в тайных обществах. <br />
              <span style={{ paddingLeft: "10px" }}>Среди</span> них:
              генерал-майоры Ф. Г. Кальм, И.К. Арнольди, Н. М. Попов; полковники
              И.Г. Бурцов и М.Ф. Митьков; подполковники Г.С. Батеньков и А.К.
              Берстель; майоры В.Ф. Раевский и Н.И.Лорер; капитаны Н.Н. Семичев
              и С.О. Розен; поручик Д. А. Нащокин и разжалованный из
              штабс-капитанов в рядовые Д. Грахольский. <br />
              <span style={{ paddingLeft: "10px" }}>Все</span> они, за
              исключением генералов И.К. Арнольди и Н.М. Попова, понесли
              наказание.
            </div>

            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Менделеев.png",
                    },
                  ],
                  500,
                  5400,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "Mendeleev"
                )
              }
              className={styles.imgMendeleev}
              src="/Менделеев.png"
              alt="Mendeleev"
            />
            <div className={styles.descMendeleev}>
              <span style={{ paddingLeft: "10px" }}>В</span> 1861 году
              «Физическую географию» и «Химию» преподавал 27-летний магистр
              физики и химии Дмитрий Иванович Менделеев, создавший учебных
              классах Корпуса самую первую в Санкт- Петербурге химическую
              лабораторию. Кадеты 2-го кадетского корпуса тоже стали первыми,
              кто познакомился с его знаменитой Периодической таблицей
              химических элементов.
            </div>
            <div className={styles.descReforma}>
              <span style={{ paddingLeft: "10px" }}>В</span> 1863 году в ходе
              проведения военной реформы, коснувшейся всей системы военного
              образования России, Корпус был преобразован во Вторую военную
              гимназию. <br />
              <span style={{ paddingLeft: "10px" }}>В</span> феврале 1865 года
              при Второй военной гимназии были открыты Высшие педагогические
              курсы для пополнения всех военных гимназий Империи педагогическими
              кадрами. <br />
              <span style={{ paddingLeft: "10px" }}>Большинство</span>
              воспитанников гимназии, успешно закончивших курс обучения,
              направлялись в военные училища для дальнейшей учёбы.
            </div>
            <div className={styles.descReforma1}>
              <span style={{ paddingLeft: "10px" }}>В</span> 1882 году Вторая
              военная гимназия была переименова во Второй кадетский корпус.
              Кадеты проходили обучение по семилетней программе с целью
              подготовки к учебе в военных училищах.
              <br /> <span style={{ paddingLeft: "10px" }}>Корпус</span>{" "}
              подчинялся главному начальнику военно-учебных заведений военного
              ведомства.
            </div>

            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Добролюбов1.png",
                    },
                  ],
                  500,
                  5100,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "Dobrolyubov"
                )
              }
              className={styles.imgDobrolyubov}
              src="/Добролюбов1.png"
              alt="Dobrolyubov"
            />
            <div className={styles.descDobrolyubov}>
              <span style={{ paddingLeft: "10px" }}>В</span> конце 1850-х годов
              «словесность» преподавал литературный критик, публицист Николай
              Александрович Добролюбов.
            </div>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/Чернышевск1.png",
                    },
                  ],
                  500,
                  5000,
                  1200,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "Chernishevskiy"
                )
              }
              className={styles.imgChernishevskiy}
              src="/Чернышевск1.png"
              alt="Chernishevskiy"
            />
            <div className={styles.descChernishevskiy}>
              <span style={{ paddingLeft: "10px" }}>В</span> течение трех
              месяцев 1850 года, нескольких месяцев 1853 года, а затем с 24
              января 1854 года по 14 ноября 1855 года в Корпусе работал в
              качестве учителя 3-го ранга по предмету «Русская словесность»
              титулярный советник Николай Григорьевич Чернышевский, уволенный с
              этой должности по «домашним обстоятельствам» (получив при
              увольнении отличную аттестацию).
            </div>
            <img
              className={styles.imgZnamya1844}
              src="/Знамя1844.png"
              alt="Znamya1844"
            />
            <img className={styles.imgZdan2} src="/Здание2.png" alt="Здание2" />
            <img className={styles.imgFlag} src="/Flag.png" alt="Flag" />
            <div className={styles.descFlag1}>
              <span style={{ paddingLeft: "10px" }}>В</span> 1836 году
              Императором Николаем 1 Второму Кадетскому Корпусу пожалованы:
              портрет Императора Петра Великого - основателя Инженерной школы;
              портрет Императрицы Екатерины II преобразовательницы Соединённой
              Артиллерийской и Инженерной Дворянской школы Артиллерийский и
              Инженерный Шляхетный кадетский корпус, а 1837 году пожалован
              портрет фельдмаршала, Светлейшего князя Голенищева - Кутузова
              Смоленского, как бывшего воспитанника учебного заведения.
            </div>
            <div className={styles.descFlag2}>
              <span style={{ paddingLeft: "10px" }}>25</span> июля 1838 года
              Указом Императора Николая 1 Второму кадетскому корпусу были
              пожалованы на знамена юбилейные знаки отличия орденская
              Андреевская лента и скоба на древко, как старейшему
              военно-учебному заведению. Торжественный ритуал прибивки знамени
              состоялся 11 сентября 1838 года в 19 часов в столовой зале
              Кадетского корпуса, в присутствии представителей императорской
              фамилии и генералитета Русской армии.
            </div>
          </div>
        </div>
        <div className={styles.imp8}>
          <div className={styles.historyAlexanderII}>
            <img
              onClick={() =>
                handleItemClick(
                  [
                    {
                      name: "",
                      image: "/SmokingAlexanderII.png",
                    },
                  ],
                  430,
                  5500,
                  1150,
                  800,
                  { align: "flex-end", justify: "flex-start" },
                  "SmokingAlexII"
                )
              }
              className={styles.imgSmokingAlexII}
              src="/SmokingAlexanderII.png"
              alt="SmokingAlexanderII"
            />

            <img
              className={styles.imgCadets1887}
              src="/Кадеты1887.png"
              alt="Cadets1887"
            />
            <img
              className={styles.imgCadets2}
              src="/Кадеты2.png"
              alt="Cadets1887"
            />
            <div className={styles.descMonah}>
              <div style={{ textAlign: "center" }}>
                СВЯЩЕННОМУЧЕНИК МИХАИЛ СОЮЗОВ ПРЕСВИТЕР 1869-1922 гг.
              </div>{" "}
              <img
                style={{ paddingLeft: "98px" }}
                src="/monah.png"
                alt="monah"
                height={200}
                width={140}
              />
              <div style={{ fontSize: "6px" }}>
                <span style={{ paddingLeft: "10px" }}>В</span> 1895 году по
                представлению святого Иоанна Кронштадтского отец Михаил был
                переведен на должности настоятеля Александро-Невской церкви во
                2-м Кадетском корпусе и законоучителя корпуса. Его усердное и
                безупречное многолетнее служение во 2-ом Кадетском корпусе было
                отмечено многими церковными и гражданскими наградами. <br />
                <span style={{ paddingLeft: "10px" }}>Во</span> время Первой
                мировой войны трудами, в том числе, отца Михаила в Кадетском
                корпусе были открыты лазарет для раненых воинов и приют для
                детей раненых и убитых офицеров. <br />
                <span style={{ paddingLeft: "10px" }}>30</span> июня 1918 года,
                после закрытия кадетского корпуса отец Михаил был переведен на
                освободившуюся священническую вакансию во Введенской церкви на
                Петроградской стороне, а 19 июля 1919 года определен настоятелем
                Князь Владимирского собора. <br />
                <span style={{ paddingLeft: "10px" }}>В</span> ходе развернутой
                властями кампании по изъятию церковных ценностей 19 апреля 1922
                года в Князь-Владимирском соборе произошли волнения. Вопреки
                призывам настоятеля, некоторыми прихожанами изъятию было оказано
                противодействие. 20 мая 1922 года протоиерей Михаил Союзов был
                арестован. <br />
                <span style={{ paddingLeft: "10px" }}>19</span> октября 1922
                года он скончался в тюремной больнице.
                <br />
                <span style={{ paddingLeft: "10px" }}>Михаил</span> Союзов
                канонизирован как священномученик решением Священного синода
                Русской православное церкви в 2022 году. <br />
                <span style={{ paddingLeft: "10px" }}>4</span>
                февраля мощи новопрославленного Санкт-Петербургского -«святого
                священноисповедника протоиерея Михаила Союзова были перенесены с
                места его захоронения, на Смоленском кладбище, в Князь
                Владимирсикй Собор.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imp9}>
          <div className={styles.historyAlexanderIII}>
            <img
              className={styles.imgMordovin}
              src="/Mordovin.png"
              alt="Mordovin"
            />
            <div className={styles.descNev}>
              <span style={{ paddingLeft: "10px" }}>Храм</span> во имя Святого
              Благоверного Князя Александра Невского построен по проекту
              академика Ф.И. Демерцова в 1803 году, освящен 24 мая 1804 года.
              <br />
              <span style={{ paddingLeft: "10px" }}>Изначально</span>
              действовали две церкви: во имя Святой Великомученицы Екатерины
              («нижняя», «тёплая» церковь, упраздненная в 1819 году) и во имя
              Святого Благоверного Князя Александра Невсого («верхняя»,
              «холодная») <br />
              <span style={{ paddingLeft: "10px" }}>Также</span> до 1899 года
              при Втором Кадетском корпусе существовали Католическая и
              Лютеранская церкви.
            </div>
            <img
              className={styles.imgAltarNevskiy}
              src="/AltarNevskiy.png"
              alt="AltarNevskiy"
            />
          </div>
        </div>
        <div className={styles.imp10}>
          <div className={styles.historyNikolayII}>
            <img
              className={styles.imgMoleben}
              src="/Moleben.png"
              alt="Moleben"
            />
            <img
              className={styles.imgNikolayII}
              src="/NikolayII.png"
              alt="NikolayII"
            />
            <div className={styles.descNik2}>
              <span style={{ paddingLeft: "10px" }}>31</span> января 1910,
              повелением императора Николая II, Второму кадетскому корпусу было
              отдано старшинство со дня образования Инженерной школы, Петром I,
              16 января 1712 года. <br />
              <span style={{ paddingLeft: "10px" }}>16</span> января 1712 года
              приказом по военному ведомству Второму кадетскому корпусу было
              присвоено имя Императора Петра Великого.
            </div>
            <img
              className={styles.imgBirthdayCadet}
              src="/BirthdayCadet.png"
              alt="BirthdayCadet"
            />
            <div className={styles.titleNik2}>
              ПРАЗДНОВАНИЕ 200-ЛЕТИЯ КОРПУСА
            </div>
            <div className={styles.mainSchool}>
              <div className={styles.mainSchoolTitle}>
                ГЛАВНАЯ ГИМНАСТИКО-ФЕХТОВАЛЬНАЯ ШКОЛА
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "150px",
                }}
              >
                <img
                  className={styles.imgMordovin}
                  src="/imgMordovin.png"
                  alt="Mordovin"
                />
                <div className={styles.mainSchoolText}>
                  <span style={{ paddingLeft: "10px" }}>17</span> мая 1909 года
                  Высочайшим повелением Императора Николая II учреждена Главная
                  гимнастическо-фехтовальная школа, которая размещалась в здании
                  экзерциргауза Дворянского полка.
                  <br />
                  <span style={{ paddingLeft: "10px" }}>Руководил</span> школой
                  полковник Мордовин А.П. Подчинялась она главнокомандующему
                  войсками гвардии Петербургского военного округа. <br />
                  <span style={{ paddingLeft: "10px" }}>Под</span> знаменами
                  школы был собран цвет армейского спорта тех. <br />
                  <span style={{ paddingLeft: "10px" }}>Спортсмены</span> школы
                  составляли по ряду видов спорта костяк национальных сборных.{" "}
                  <br />
                  <span style={{ paddingLeft: "10px" }}>На</span> первой
                  Всероссийской олимпиаде в Киеве в 1913 году школа завоевали
                  Тобщекомандное место. <br />
                  <span style={{ paddingLeft: "10px" }}>В</span>{" "}
                  послереволюционный период правопреемником школы стала
                  Советская военная Главная гимнастико-фехтовальная школа,
                  созданная в 1918 году в Петрограде (в настоящее время Военный
                  институт физической культуры).
                  <br /> <span style={{ paddingLeft: "10px" }}>Школа</span>
                  готовила преподавателей гимнастики и фехтования для войск и
                  самой шк занималась разработкой и внедрением методических
                  рекомендаций по проведени занятий гимнастикой и фехтованием.
                  войсках
                </div>
                <img className={styles.imgNagr} src="/imgNagr.png" alt="Nagr" />
              </div>
              <div className={styles.gallery}>
                <img
                  className={styles.galleryManeg}
                  src="/Манеж.png"
                  alt="Манеж"
                />

                <img
                  className={styles.galleryImg1}
                  src="/Дочери.png"
                  alt="Дочери"
                />
                <img
                  className={styles.galleryImg2}
                  src="/Занятия.png"
                  alt="Занятия"
                />
                <img
                  className={styles.galleryImg3}
                  src="/Занятия2.png"
                  alt="Занятия2"
                />
              </div>
            </div>
            <img
              className={styles.imgGramota}
              src="/Gramota.png"
              alt="Gramota"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
