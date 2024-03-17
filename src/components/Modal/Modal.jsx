import React from "react";
import "./Modal.scss";
import { IoClose } from "react-icons/io5";

const Modal = ({ active, setActive, children, position }) => {
  if (!active) return null;

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
      style={{
        left: position + "px",
      }}
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
