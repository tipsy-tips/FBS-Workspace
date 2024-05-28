import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { LiaTimesSolid } from "react-icons/lia";

import {
  InputFileUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import { StoreContext } from "../../../../store/StoreContext";
import ModalWrapper from "../../../partials/modals/ModalWrapper";
import { queryData } from "../../../helpers/queryData";

import useUploadPhoto from "../../../custom-hook/useUploadPhoto";
import { devBaseImgUrl } from "../../../helpers/functions-general";

import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import useQueryData from "../../../custom-hook/useQueryData";
import { useMutation, useQueryClient } from "react-query";
import { motion } from "framer-motion";

const ModalAddPost = ({ itemEdit, position }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    `/v1/upload/photo`,
    dispatch
  );

  const { data: category } = useQueryData(
    `/v1/category`, // endpoint
    "get", // method
    "categoryKey" // key
  );

  const { data: tag } = useQueryData(
    `/v1/tag`, // endpoint
    "get", // method
    "tagKey" // key
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/post/${itemEdit.post_aid}` : `/v1/post`,
        itemEdit ? "put" : "post",
        values
      ),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["postKey"] });

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

  function getFormattedDateTime() {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    const strTime = `${hours}:${minutes}:${seconds} ${ampm}`;

    return `${month}/${day}/${year} ${strTime}`;
  }

  const initVal = {
    post_title: itemEdit ? itemEdit.post_title : "",
    post_is_featured: itemEdit ? itemEdit.post_is_featured : 0,
    post_subtitle: itemEdit ? itemEdit.post_subtitle : "",
    post_image: itemEdit ? itemEdit.post_image : "",
    post_author: itemEdit ? itemEdit.post_author : "",
    post_category_id: itemEdit ? itemEdit.post_category_id : "",
    post_tag_id: itemEdit ? itemEdit.post_tag_id : "",
    post_article: itemEdit ? itemEdit.post_article : "",
    post_publish_date: itemEdit
      ? itemEdit.post_publish_date
      : getFormattedDateTime(),
  };

  const yupSchema = Yup.object({
    post_title: Yup.string().required("Required"),
    post_is_featured: Yup.string().required("Required"),
    post_subtitle: Yup.string().required("Required"),
    post_author: Yup.string().required("Required"),
    post_article: Yup.string().required("Required"),
    post_category_id: Yup.string().required("Required"),
    post_tag_id: Yup.string().required("Required"),
    post_publish_date: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalWrapper position={position}>
        <motion.div
          className="main-modal w-[900px] bg-secondary text-content rounded-lg"
          initial={{ opacity: 0, y: "50px" }}
          animate={{ opacity: 1, y: "0px" }}
          exit={{ opacity: 0, y: "50px" }}
        >
          <div className="modal-header p-4 relative">
            <h2>New Data</h2>
            <button
              onClick={handleClose}
              className="absolute top-[25px] right-4"
            >
              <LiaTimesSolid />
            </button>
          </div>
          <div className="modal-body p-4 max-h-[690px] overflow-y-auto">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values) => {
                uploadPhoto();
                mutation.mutate({
                  ...values,
                  post_image:
                    (itemEdit && itemEdit.post_image === "") || photo
                      ? photo === null
                        ? itemEdit.post_image
                        : photo.name
                      : values.post_image,
                  post_article: values.post_article.replace(/\\/g, ""),
                });
              }}
            >
              {(props) => {
                return (
                  <Form className="flex flex-col h-auto ">
                    <div className="grow overflow-y-auto">
                      <div className="input-wrap photo">
                        {photo || (itemEdit && itemEdit.post_image !== "") ? (
                          <img
                            src={
                              photo
                                ? URL.createObjectURL(photo) // preview
                                : itemEdit.post_image // check db
                                ? devBaseImgUrl + "/" + itemEdit.post_image
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
                          (itemEdit && itemEdit.post_image !== "")) && (
                          <span className="min-h-10 text-xs flex items-center justify-center">
                            <span className="text-accent mr-1">
                              Drag & Drop
                            </span>
                            photo here or
                            <span className="text-accent ml-1">Browse</span>
                          </span>
                        )}

                        <InputFileUpload
                          name="photo"
                          type="file"
                          id="myFile"
                          accept="image/*"
                          title="Upload photo"
                          onChange={(e) => handleChangePhoto(e)}
                          onDrop={(e) => handleChangePhoto(e)}
                          className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full"
                        />
                      </div>

                      <div className="input-wrap">
                        <InputSelect
                          label="Is Featured"
                          type="text"
                          name="post_is_featured"
                        >
                          <option hidden>Select</option>
                          <option value="1">Yes</option>
                          <option value="0">No</option>
                        </InputSelect>
                      </div>

                      <div className="input-wrap">
                        <InputText
                          label="Post Title"
                          type="text"
                          name="post_title"
                        />
                      </div>
                      <div className="input-wrap">
                        <InputText
                          label="Post Subtitle"
                          type="text"
                          name="post_subtitle"
                        />
                      </div>

                      <div className="grid grid-cols-[1fr_2fr] gap-10">
                        <div className="left">
                          <div className="input-wrap">
                            <InputText
                              label="Post Author"
                              type="text"
                              name="post_author"
                            />
                          </div>

                          <div className="input-wrap">
                            <InputSelect
                              label="Category"
                              type="text"
                              name="post_category_id"
                            >
                              {category?.data.map((item, key) => (
                                <React.Fragment key={key}>
                                  <option hidden>Select</option>
                                  <option value={item.category_aid}>
                                    {item.category_title}
                                  </option>
                                </React.Fragment>
                              ))}
                            </InputSelect>
                          </div>

                          <div className="input-wrap">
                            <InputSelect
                              label="Tag"
                              type="text"
                              name="post_tag_id"
                            >
                              {tag?.data.map((item, key) => (
                                <React.Fragment key={key}>
                                  <option hidden>Select</option>
                                  <option value={item.tag_aid}>
                                    {item.tag_title}
                                  </option>
                                </React.Fragment>
                              ))}
                            </InputSelect>
                          </div>

                          <div className="input-wrap">
                            <InputText
                              disabled
                              label="Post Publish Date"
                              type="text" // changed to text to match the desired format
                              name="post_publish_date"
                              value={initVal.post_publish_date}
                            />
                          </div>
                        </div>

                        <div className="right">
                          <div className="input-wrap">
                            <InputTextArea
                              label="Post Article"
                              type="text"
                              name="post_article"
                              className="h-[275px] resize-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-action max-w-[150px] ml-auto w-full">
                      <motion.button
                        className="btn btn-form btn--accent"
                        whileTap={{ scale: 0.9 }}
                        type="submit"
                      >
                        {mutation.isPending ? "Confirm" : "Confirm"}
                      </motion.button>
                      <motion.button
                        onClick={handleClose}
                        className="btn btn-form btn--cancel"
                        whileTap={{ scale: 0.9 }}
                        type="button"
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </motion.div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddPost;
