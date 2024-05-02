import React from "react";
import { LiaChevronRightSolid, LiaTimesSolid } from "react-icons/lia";
import ModalWrapper from "../../../../partials/modals/ModalWrapper";
import SpinnerButton from "../../../../partials/spinners/SpinnerButton";

const ModalAddStaff = () => {
  return (
    <ModalWrapper>
      <div className="main-modal w-[300px] bg-secondary text-content h-full ">
        <div className="modal-header p-4 relative">
          <h2>Add New Staff</h2>
          <button className="absolute top-6 right-4">
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body px-4">
          <form
            action=""
            className="h-[calc(100vh-90px)] flex flex-col justify-between"
          >
            <div className="grow overflow-y-scroll">
              <div className="input-wrap">
                <label htmlFor="">Name</label>
                <input type="text" />
                <small className="error-msg">Required*</small>
              </div>
              <div className="input-wrap">
                <label htmlFor="">Position</label>
                <input type="text" />
                <small className="error-msg">Required*</small>
              </div>
              <div className="input-wrap">
                <label htmlFor="">Gender</label>
                <select>
                  <option value="Male" className="text-stone-900">
                    Male
                  </option>
                  <option value="Female" className="text-stone-900">
                    Female
                  </option>
                </select>
                <small className="error-msg">Required*</small>
              </div>
              <div className="input-wrap">
                <label htmlFor="">Age</label>
                <input type="number" />
                <small className="error-msg">Required*</small>
              </div>
            </div>
            <div className="form-action flex items-center justify-evenly">
              <button className="btn btn--form btn--accent ">
                Add <SpinnerButton />
              </button>
              <button className="btn btn--form btn--disable">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddStaff;
