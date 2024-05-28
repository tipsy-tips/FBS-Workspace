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

const CreatePassword = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [verifySuccess, setVerifySuccess] = React.useState(false);
  const [isPasswordNew, setIsPasswordNew] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);

  const paramKey = getUrlParam().get("key");

  const initVal = { new_password: "", confirm_password: "", key: paramKey };
  const yupSchema = Yup.object({
    new_password: Yup.string().required("Required"),
    confirm_password: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("new_password"), null], "Passwords does not match."),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData("/v1/user/password", "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["queryKey"] });

      console.log(verifySuccess);

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
          {verifySuccess ? (
            <div className="text-center mb-5">
              <FaCheckCircle className="text-accent mx-auto block my-2 text-4xl" />
              <h3 className="mb-0">New Password Set!</h3>
              <p className="text-balance">
                Please click the link below to return to login.
              </p>
              <Link to="/login">
                <button className="btn btn--transparent w-full mb-2 justify-center">
                  Back to Login
                </button>
              </Link>
            </div>
          ) : (
            <>
              <h2 className="bold">Create Password</h2>
              <Formik
                initialValues={initVal}
                validationSchema={yupSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  mutation.mutate(values);
                }}
              >
                {(props) => {
                  return (
                    <Form className="w-full">
                      <div className="input-wrap text-gray-500 mb-8">
                        <InputText
                          label="Password"
                          type={isPasswordNew ? "password" : "text"}
                          name="new_password"
                          //   onKeyUp={(e) => handleChange(e.target.value)}
                          disabled={mutation.isPending}
                        />
                        {props.values.new_password && (
                          <button
                            onClick={() => setIsPasswordNew(!isPasswordNew)}
                            className="absolute top-[35px] right-3"
                            type="button"
                          >
                            {isPasswordNew ? <FaRegEye /> : <FaRegEyeSlash />}
                          </button>
                        )}
                      </div>
                      <div className="input-wrap text-gray-500 mb-8">
                        <InputText
                          label="Confirm Password"
                          type={isPasswordConfirm ? "password" : "text"}
                          name="confirm_password"
                          disabled={mutation.isPending}
                        />
                        {props.values.confirm_password && (
                          <button
                            onClick={() =>
                              setIsPasswordConfirm(!isPasswordConfirm)
                            }
                            className="absolute top-[35px] right-3"
                            type="button"
                          >
                            {isPasswordConfirm ? (
                              <FaRegEye />
                            ) : (
                              <FaRegEyeSlash />
                            )}
                          </button>
                        )}
                      </div>

                      <button className="btn btn--accent w-full mb-2 justify-center">
                        Set Password
                      </button>
                      <button className="btn btn--transparent w-full justify-center">
                        Return
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CreatePassword;
