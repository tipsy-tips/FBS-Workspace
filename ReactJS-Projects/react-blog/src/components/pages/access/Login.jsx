import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  setCredentials,
  setError,
  setIsLogin,
  setMessage,
} from "../../../store/StoreAction";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { setStorageRoute } from "../../helpers/functions-general";
import { InputText } from "../../helpers/FormInputs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SpinnerButton from "../../partials/spinners/SpinnerButton";
import ModalError from "../../partials/modals/ModalError";
import useSystemLogin from "../../custom-hook/useSystemLogin";
import SpinnerWindow from "../../partials/spinners/SpinnerWindows";

import { StoreContext } from "../../../store/StoreContext";
import { useMutation, useQueryClient } from "react-query";
import { queryData } from "../../helpers/queryData";

const Login = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const navigation = useNavigate();
  const { loginLoading } = useSystemLogin();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v1/user/login`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["queryKey"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        if (store.isLogin) {
          delete data.data[0].user_password;

          dispatch(setCredentials(data.data[0]));
          setStorageRoute(data.data[1]);
          dispatch(setIsLogin(false));
          navigation("/database");
        }
      }
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const initVal = {
    user_email: "",
    password: "",
  };

  const yupSchema = Yup.object({
    user_email: Yup.string().required("Required").email("Invalid email"),
    password: Yup.string().required("Required"),
  });

  return (
    <>
      {loginLoading ? (
        <SpinnerWindow />
      ) : (
        <div className="flex h-screen w-full  justify-center items-center">
          <div className="min-w-[300px] px-4 py-8 bg-white border border-accent rounded-lg">
            <h2 className="bold">Login</h2>

            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                // mutate data
                mutation.mutate(values);
              }}
            >
              {(props) => {
                return (
                  <Form className="mt-5">
                    <div className="input-wrap text-gray-500">
                      <InputText label="Email" type="text" name="user_email" />
                    </div>

                    <div className="input-wrap text-gray-500">
                      <InputText
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        disabled={mutation.isPending}
                      />
                      {props.values.password && (
                        <span
                          className="absolute text-base cursor-pointer bottom-[6px] right-3"
                          onClick={togglePassword}
                        >
                          {showPassword ? (
                            <FaEyeSlash className="fill-gray-400" />
                          ) : (
                            <FaEye className="fill-gray-400" />
                          )}
                        </span>
                      )}
                    </div>

                    <Link
                      to="/forgot-password"
                      className="block text-right italic text-xs text-gray-500 mb-5 hover:underline"
                    >
                      Forgot Password
                    </Link>

                    <button
                      className="btn btn--accent w-full justify-center"
                      type="submit"
                    >
                      {mutation.isPending ? <SpinnerButton /> : "Sign-In"}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
          {store.error && <ModalError position="center" />}
        </div>
      )}
    </>
  );
};

export default Login;
