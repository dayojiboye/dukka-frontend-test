import React from "react";
import ReactDOM from "react-dom";

const backdrop = ({ open, clicked }) => {
  return ReactDOM.createPortal(
    <div className={`backdrop ${open ? "_show" : ""}`} onClick={clicked}></div>,
    document.body
  );
};

export default backdrop;
