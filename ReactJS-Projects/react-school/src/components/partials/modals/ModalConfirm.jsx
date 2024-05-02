import React from "react";
import ModalWrapper from "./ModalWrapper";
import { LiaTimesSolid } from "react-icons/lia";
import { BiCheck, BiError } from "react-icons/bi";
import {
  PiSealCheckLight,
  PiSealWarningFill,
  PiTrash,
  PiTrashFill,
} from "react-icons/pi";
import { MdWarning } from "react-icons/md";
import { FaArchive } from "react-icons/fa";

const ModalConfirm = ({ position }) => {
  return (
    <ModalWrapper position={position}>
      <div className="modal-main max-w-[400px] w-full">
        <div className="p-3 header bg-warning text-white flex justify-between items-center rounded-t-lg">
          <div className="flex gap-2 items-center">
            <PiSealWarningFill className="text-2xl" />
            <h4 className="mb-0 text-white">Confirm</h4>
          </div>
          <button>
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body p-4 rounded-b-lg bg-secondary text-center">
          <h2 className="mb-1 mt-5">Archiving Record</h2>
          <p className="mb-10">Are you sure you want to archive this record?</p>

          <div className="flex justify-end gap-2 w-1/2 mx-auto">
            <button className="btn btn--warning btn--form mx-auto">
              Confirm
            </button>
            <button className="btn btn--cancel btn--form mx-auto">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalConfirm;
