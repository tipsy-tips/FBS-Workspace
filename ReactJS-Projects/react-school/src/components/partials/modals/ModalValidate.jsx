import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import ModalWrapper from "./ModalWrapper";
import { LuBadgeInfo } from "react-icons/lu";

const ModalValidate = ({ position }) => {
  return (
    <ModalWrapper position={position}>
      <div className="modal-main max-w-[400px] w-full">
        <div className="p-3 header bg-info text-white flex justify-between items-center rounded-t-lg">
          <div className="flex gap-2 items-center">
            <LuBadgeInfo className="text-2xl" />
            <h4 className="mb-0 text-white">Validate</h4>
          </div>
          <button>
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body p-4 rounded-b-lg bg-secondary text-center">
          <h2 className="mb-1 mt-5">Same Data Conflict</h2>
          <p className="mb-10">Record already exists!</p>
          <button className="btn btn--info btn--form mx-auto">Okay</button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalValidate;
