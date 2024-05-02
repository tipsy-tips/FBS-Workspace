import React from "react";
import ModalWrapper from "./ModalWrapper";
import { LiaTimesSolid } from "react-icons/lia";
import { BiError } from "react-icons/bi";

const ModalError = ({ position }) => {
  return (
    <ModalWrapper position={position}>
      <div className="modal-main max-w-[400px] w-full">
        <div className="p-3 header bg-alert text-white flex justify-between items-center rounded-t-lg">
          <div className="flex gap-2 items-center">
            <BiError className="text-2xl" />
            <h4 className="mb-0 text-white">Error</h4>
          </div>
          <button>
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body p-4 rounded-b-lg bg-secondary text-center">
          <h2 className="mb-1 mt-5">Server took to long to respond</h2>
          <p className="mb-10">Something went wrong!</p>
          <button className="btn btn--alert btn--form mx-auto">Okay</button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalError;
