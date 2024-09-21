import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";

const ImageCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const images = ["SPb_1756.jpg", "SPb_1777.jpg", "SPb_1840.jpg", "spb_1868"];

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Gallery"
      >
        <button onClick={closeModal}>Close</button>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </Slider>
      </Modal>
    </div>
  );
};

export default ImageCard;
