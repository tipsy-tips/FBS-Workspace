import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { LiaTimesSolid } from "react-icons/lia";
import { InputFileUpload, InputText } from "../../../../helpers/FormInputs";
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
import useUploadPhoto from "../../../../custom-hook/useUploadPhoto";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

const ModalAddProjects = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    `/v1/upload/photo`,
    dispatch
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/projects/${itemEdit.projects_aid}` : `/v1/projects`,
        itemEdit ? "put" : "post",
        values
      ),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["queryKey"] });
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
    projects_image: itemEdit ? itemEdit.projects_image : "",
  };

  const yupSchema = Yup.object({
    // projects_image: Yup.string().required("Required"),
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
                uploadPhoto();
                mutation.mutate({
                  ...values,
                  projects_image:
                    (itemEdit && itemEdit.projects_image === "") || photo
                      ? photo === null
                        ? itemEdit.projects_image
                        : photo.name
                      : values.projects_image,
                });
              }}
            >
              {(props) => {
                return (
                  <Form className="flex flex-col h-[calc(100vh-110px)]">
                    <div className="grow overflow-y-auto">
                      <div className="input-wrap">
                        {photo ||
                        (itemEdit && itemEdit.projects_image !== "") ? (
                          <img
                            src={
                              photo
                                ? URL.createObjectURL(photo) // preview
                                : itemEdit.projects_image // check db
                                ? devBaseImgUrl + "/" + itemEdit.projects_image
                                : null
                            }
                            alt="Photo"
                            className="rounded-tr-md rounded-tl-md h-[200px] max-h-[200px] w-full object-cover object-center m-auto"
                          />
                        ) : (
                          <span className="min-h-20 text-xs flex text-center items-center justify-center">
                            <span className="text-accent mr-1">
                              Drag & Drop
                            </span>
                            photo here or
                            <span className="text-accent ml-1">Browse</span>
                          </span>
                        )}

                        {(photo !== null ||
                          (itemEdit && itemEdit.projects_image !== "")) && (
                          <span className="min-h-10 text-xs flex items-center justify-center">
                            <span className="text-accent mr-1">
                              Drag & Drop
                            </span>
                            photo here or
                            <span className="text-accent ml-1">Browse</span>
                          </span>
                        )}

                        {/* <FaUpload className="opacity-100 duration-200 group-hover:opacity-100 fill-dark/70 absolute top-0 right-0 bottom-0 left-0 min-w-[1.2rem] min-h-[1.2rem] max-w-[1.2rem] max-h-[1.2rem] m-auto cursor-pointer" /> */}
                        <InputFileUpload
                          label="Insert Image"
                          name="photo"
                          type="file"
                          id="myFile"
                          accept="image/*"
                          title="Upload photo"
                          onChange={(e) => handleChangePhoto(e)}
                          onDrop={(e) => handleChangePhoto(e)}
                          className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full "
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

export default ModalAddProjects;
