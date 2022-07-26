import React, { useRef, useState } from "react";
import login from "./loginForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Field, Form } from "formik";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import {
  initialValues,
  loginSchema,
} from "../../../validation/login.validation";
import TextField from "@mui/material/TextField";
import { LOGIN } from "../../../graphql/users/mutation/login";
import { useMutation } from "@apollo/client";
import ReCAPTCHA from "react-google-recaptcha";
import LoadingButton from "@mui/lab/LoadingButton";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loginUser, { data, error, loading }] = useMutation(LOGIN);
  const reRef = useRef<ReCAPTCHA | any>(null);
  const router = useRouter();
  return (
    <div className={login.mainContainer}>
      {error ? (
        <div className={login.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <></>
      )}
      <div className={login.title}>
        <h1>Login</h1>
      </div>
      <div className={login.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={async (data) => {
            const token = await reRef.current.executeAsync();
            reRef.current.reset();
            data.email = data.email.toLowerCase();
            loginUser({
              variables: {
                loginInput: {
                  email: data.email,
                  password: data.password,
                  token: token,
                },
              },
              onError: (err) => setErrorMessage(err.message),
              onCompleted: (result) => {
                Cookies.set("account", result.login.refresh, {
                  expires: 1,
                });
                router.push("/");
              },
            });
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className={login.fields}>
              <ReCAPTCHA
                sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                size="invisible"
                ref={reRef}
                className={login.reCaptcha}
              />
              <div className={login.inputsContainer}>
                <div className={login.holder}>
                  <Field
                    as={TextField}
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    className={login.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.email && touched.email ? (
                    <div className={login.error}>
                      <p>{errors.email}</p>
                    </div>
                  ) : (
                    <div className={login.errorC}>
                      <p>Plaese Enter Your Email</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={login.inputsContainer}>
                <div className={login.holder}>
                  <Field
                    as={TextField}
                    label="Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    className={login.fieldE}
                    name="password"
                    enterKeyHint="next"
                    required
                  />
                  {errors.password && touched.password ? (
                    <div className={login.error}>
                      <p>{errors.password}</p>
                    </div>
                  ) : (
                    <div className={login.errorC}>
                      <p>Plaese Enter Your Password</p>
                    </div>
                  )}
                  {!showPassword ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => setShowPassword(!showPassword)}
                      className={login.eyeIconO}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      onClick={() => setShowPassword(!showPassword)}
                      className={login.eyeIconO}
                    />
                  )}
                </div>
              </div>

              <div className={login.loginOr}>
                <LoadingButton
                  className={login.loginBtn}
                  size="large"
                  type="submit"
                  color="secondary"
                  disabled={!isValid && dirty}
                  loading={loading}
                  variant="contained"
                >
                  Login
                </LoadingButton>
                <div
                  onClick={() => router.push("/register")}
                  className={login.orRegister}
                >
                  Have no account?
                </div>
                {/* <div
                    type="button"
                    onClick={() => router.push("/change_password")}
                    className={login.resetPass}
                  >
                    Forgot Your Password?
                  </div> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
