import React from "react";
import ModalWrapper from "./ModalWrapper";
import { LiaTimesSolid } from "react-icons/lia";
import { BiCheck, BiError } from "react-icons/bi";
import { PiSealCheckLight, PiTrash, PiTrashFill } from "react-icons/pi";

const ModalDelete = ({ position }) => {
  return (
    <ModalWrapper position={position}>
      <div className="modal-main max-w-[400px] w-full">
        <div className="p-3 header bg-alert text-white flex justify-between items-center rounded-t-lg">
          <div className="flex gap-2 items-center">
            <PiTrashFill className="text-2xl" />
            <h4 className="mb-0 text-white">Delete</h4>
          </div>
          <button>
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body p-4 rounded-b-lg bg-secondary text-center">
          <h2 className="mb-1 mt-5">Removing record</h2>
          <p className="mb-10">Are you sure you want to remove this record?</p>

          <div className="flex justify-end gap-2 w-1/2 mx-auto">
            <button className="btn btn--alert btn--form mx-auto">Okay</button>
            <button className="btn btn--cancel btn--form mx-auto">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalDelete;
