import React from "react";

import { LiaTimesSolid } from "react-icons/lia";
import { Formik, Form } from "formik";

import * as Yup from "yup";
import { StoreContext } from "../../../../store/StoreContext";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { useMutation, useQueryClient } from "react-query";
import { queryData } from "../../../helpers/queryData";
import ModalWrapper from "../../../partials/modals/ModalWrapper";
import { InputText } from "../../../helpers/FormInputs";
import SpinnerButton from "../../../partials/spinners/SpinnerButton";

import { motion } from "framer-motion";

const ModalAddTag = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/tag/${itemEdit.tag_aid}` : `/v1/tag`,
        itemEdit ? "put" : "post",
        values
      ),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tagKey"] });

      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfuly updated.`));
      } else {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    tag_title: itemEdit ? itemEdit.tag_title : "",
  };

  const yupSchema = Yup.object({
    tag_title: Yup.string().required("Required"),
  });
  return (
    <ModalWrapper>
      <motion.div
        initial={{ opacity: 0, y: "50px" }}
        animate={{ opacity: 1, y: "0px" }}
        exit={{ opacity: 0, y: "50px" }}
        className="main-modal w-[400px] bg-secondary text-content h-screen"
      >
        <div className="modal-header p-4 relative">
          <h2>New tag</h2>
          <button className="absolute top-[25px] right-4" onClick={handleClose}>
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
                <Form className="flex flex-col">
                  <div className="grow overflow-y-auto mb-5 h-[82vh]">
                    <div className="input-wrap">
                      <InputText label="Title" type="text" name="tag_title" />
                    </div>
                  </div>

                  <div className="form-action max-w-[400px] ml-auto w-full">
                    <button className="btn btn-form btn--accent" type="submit">
                      {" "}
                      {mutation.isPending ? <SpinnerButton /> : "Add"}
                    </button>
                    <button
                      className="btn btn-form btn--cancel"
                      type="button"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </motion.div>
    </ModalWrapper>
  );
};

export default ModalAddTag;
