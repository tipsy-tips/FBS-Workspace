import React from "react";
import { LiaChevronRightSolid, LiaTimesSolid } from "react-icons/lia";
import ModalWrapper from "../../../../partials/modals/ModalWrapper";
import SpinnerButton from "../../../../partials/spinners/SpinnerButton";
import { InputText } from "../../../../helpers/FormInputs";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const ModalAddStudent = () => {
  const initVal = {
    student_name: "",
    student_class: "",
    student_age: "",
  };

  const yupSchema = Yup.object({
    student_name: Yup.string().required("Required ito"),
    student_class: Yup.string().required("Required ito"),
    student_age: Yup.number().required("Required ito"),
  });
  return (
    <ModalWrapper>
      <div className="main-modal w-[300px] bg-secondary text-content h-full ">
        <div className="modal-header p-4 relative">
          <h2>Add New Student</h2>
          <button className="absolute top-6 right-4">
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body px-4">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            <Form
              action=""
              className="h-[calc(100vh-90px)] flex flex-col justify-between"
            >
              <div className="grow overflow-y-scroll">
                <div className="input-wrap">
                  <InputText label="Name" type="text" name="student_name" />
                </div>
                <div className="input-wrap">
                  <InputText label="Class" type="text" name="student_class" />
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
                  <InputText label="Age" type="number" name="student_age" />
                </div>
              </div>
              <div className="form-action flex items-center justify-evenly">
                <button className="btn btn--form btn--accent" type="submit">
                  Add <SpinnerButton />
                </button>
                <button className="btn btn--form btn--disable">Cancel</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddStudent;
