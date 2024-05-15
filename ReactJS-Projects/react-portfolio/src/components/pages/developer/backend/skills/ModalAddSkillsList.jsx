import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { LiaTimesSolid } from "react-icons/lia";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import ModalWrapper from "../../../../partials/modals/ModalWrapper";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../helpers/queryData";

const ModalAddSkillsList = ({ itemEdit, onClose }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));

  const initVal = {
    skills_list: itemEdit ? itemEdit.skills_list : "",
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/skills/${itemEdit.skills_aid}` : `/v1/skills`,
        itemEdit ? "put" : "post",
        values
      ),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["queryKey"] });
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfuly updated.`));
        console.log("INSERTED DATA");
      } else {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        console.log("FAILED TO INSERT DATA");
      }
    },
  });

  const yupSchema = Yup.object({
    skills_list: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalWrapper>
        <div className="main-modal w-[300px] bg-secondary text-content h-full">
          <div className="modal-header p-4 relative">
            <h2>New Data</h2>
            <button
              onClick={handleClose}
              className="absolute top-[25px] right-4"
            >
              <LiaTimesSolid />
            </button>
          </div>
          <div className="modal-body p-4">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values) => {
                mutation.mutate(values);
              }}
            >
              {(props) => {
                return (
                  <Form className="flex flex-col h-[calc(100vh-110px)]">
                    <div className="grow overflow-y-auto">
                      <div className="input-wrap">
                        <InputTextArea
                          label="Paragraph List"
                          type="text"
                          name="skills_list"
                        />
                      </div>
                    </div>

                    <div className="form-action">
                      <button
                        className="btn btn-form btn--accent"
                        type="submit"
                      >
                        {mutation.isPending ? "Confirm" : "Confirm"}
                      </button>
                      <button
                        onClick={handleClose}
                        className="btn btn-form btn--cancel"
                        type="button"
                      >
                        Cancel
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddSkillsList;
