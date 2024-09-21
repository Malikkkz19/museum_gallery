import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import styles from "./Slider.module.scss"
const ImageSlider = ({ images, width, height }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div style={{ width: width, height: height, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 100 }}>
            <Slider {...settings}>
                {images.map((imageData, index) => (
                    <div key={index}>
                        <img
                            className={`${styles.imgModal} ${imageData ? styles.imgModalActive : ""}`}
                            src={imageData.image}
                            alt={imageData.name || 'image'}
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
