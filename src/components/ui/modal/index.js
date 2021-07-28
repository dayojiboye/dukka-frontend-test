import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

const Modal = ({ children, click, open }) => {
  return ReactDOM.createPortal(
    <div className={`modal ${open ? "show" : ""}`} onClick={click}>
      <div className="modal-body">
        {children}

        <div className="close-modal" onClick={click}>
          <button>Close</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
