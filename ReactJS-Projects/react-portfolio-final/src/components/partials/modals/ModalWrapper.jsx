import React from "react";

const ModalWrapper = ({ children, position = "justify-end" }) => {
  return (
    <div
      className={`fixed top-0 left-0 flex size-full ${
        position === "center" ? "justify-center" : "justify-end"
      } items-center z-30`}
    >
      <div className="backdrop size-full bg-black/90 absolute top-0 right-0 -z-[10]" />
      {children}
    </div>
  );
};

export default ModalWrapper;
