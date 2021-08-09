import React from "react";
import ReactDom from "react-dom";
import CloseIcon from "@material-ui/icons/Close";
import "./modal.css";

export const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div />
      <div className="modal-style">
        <CloseIcon
          style={{
            color: "white",
            fontSize: "30px",
          }}
          onClick={onClose}
        ></CloseIcon>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
