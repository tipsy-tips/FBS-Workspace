import React from "react";
import { FaCheckCircle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../../store/StoreContext";
import { getUrlParam } from "../../../helpers/functions-general";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { InputText } from "../../../helpers/FormInputs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  setError,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { queryData } from "../../../helpers/queryData";
import ModalError from "../../../partials/modals/ModalError";

const ForgotPassword = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [verifySuccess, setVerifySuccess] = React.useState(false);

  const initVal = { item: "" };
  const yupSchema = Yup.object({
    item: Yup.string().required("Required").email("Invalid Email"),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v1/user/reset`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["queryKey"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        setVerifySuccess(true);
      }
    },
  });

  return (
    <>
      <div className="flex h-screen w-full  justify-center items-center">
        <div className="min-w-[300px] px-4 py-8 bg-white border border-accent rounded-lg">
          <h2 className="bold">Forgot Password</h2>
          {verifySuccess ? (
            <div className="text-center mb-5">
              <FaCheckCircle className="text-accent mx-auto block my-2 text-4xl" />
              <h3 className="mb-0">Reset Email Sent</h3>
              <p className="text-balance">
                Please check your email for the reset password instruction.
              </p>
            </div>
          ) : (
            <>
              <Formik
                initialValues={initVal}
                validationSchema={yupSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  mutation.mutate(values);
                }}
              >
                {(props) => {
                  return (
                    <Form className="w-full mt-5">
                      <div className="input-wrap text-gray-500 mb-8">
                        <InputText
                          label="Registered Email"
                          name="item"
                          type="email"
                        />
                      </div>

                      <button
                        className="btn btn--accent w-full mb-2 justify-center"
                        type="submit"
                      >
                        Reset Password
                      </button>
                      <Link to="/login">
                        <button className="btn btn--transparent w-full justify-center">
                          Return
                        </button>
                      </Link>
                    </Form>
                  );
                }}
              </Formik>
            </>
          )}
        </div>

        {store.error && <ModalError />}
      </div>
    </>
  );
};

export default ForgotPassword;
