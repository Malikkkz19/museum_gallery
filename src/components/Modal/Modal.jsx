import React from "react";
import "./Modal.scss";
import { IoClose } from "react-icons/io5";

const Modal = ({ active, setActive, children, x, y }) => {
  if (!active) return null;

  // const modalStyle = {
  //   position: "absolute",
  //   top: `${y}px`,
  //   left: `${x}px`,
  // };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
      // style={modalStyle}
    >
      <div
        className={active ? "content active" : "content"}
        onClick={(e) => e.stopPropagation()}
      >
        <IoClose className="button_close" onClick={() => setActive(false)} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
