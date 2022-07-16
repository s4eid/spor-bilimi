import React, { useState, useRef } from "react";
import register from "./registerForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Field, Form } from "formik";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import {
  initialValues,
  registerSchema,
} from "../../../validation/register.validation";
import TextField from "@mui/material/TextField";
import ReCAPTCHA from "react-google-recaptcha";
import { REGISTER } from "../../../graphql/users/mutation/register";
import { useMutation } from "@apollo/client";
import LoadingButton from "@mui/lab/LoadingButton";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [registerUser, { data, error, loading }] = useMutation(REGISTER);
  console.log(loading);
  const router = useRouter();
  const reRef = useRef<ReCAPTCHA | any>(null);
  console.log(data);
  return (
    <div className={register.mainContainer}>
      {error ? (
        <div className={register.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <></>
      )}
      <div className={register.title}>
        <h1>Register</h1>
      </div>
      <div className={register.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async (data) => {
            console.log(data);
            const token = await reRef.current.executeAsync();
            reRef.current.reset();
            data.email = data.email.toLowerCase();
            data.first_name = data.first_name.toLowerCase();
            data.last_name = data.last_name.toLowerCase();
            registerUser({
              variables: {
                registerInput: {
                  email: data.email,
                  password: data.password,
                  first_name: data.first_name,
                  last_name: data.first_name,
                  token: token,
                },
              },
              onError: (err) => setErrorMessage(err.message),
              onCompleted: () => {
                // router.push("/");
              },
            });
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className={register.fields}>
              <ReCAPTCHA
                sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                size="invisible"
                ref={reRef}
                className={register.reCaptcha}
              />
              <div className={register.inputsContainer}>
                <div className={register.holder}>
                  <Field
                    as={TextField}
                    label="First Name"
                    variant="outlined"
                    name="first_name"
                    className={register.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.first_name && touched.first_name ? (
                    <div className={register.error}>
                      <p>{errors.first_name}</p>
                    </div>
                  ) : (
                    <div className={register.errorC}>
                      <p>Plaese Enter Your First Name</p>
                    </div>
                  )}
                </div>
                <div className={register.holder}>
                  <Field
                    as={TextField}
                    label="Last Name"
                    variant="outlined"
                    name="last_name"
                    className={register.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.last_name && touched.last_name ? (
                    <div className={register.error}>
                      <p>{errors.last_name}</p>
                    </div>
                  ) : (
                    <div className={register.errorC}>
                      <p>Plaese Enter Your Last Name</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={register.inputsContainer}>
                <div className={register.holder}>
                  <Field
                    as={TextField}
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    className={register.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.email && touched.email ? (
                    <div className={register.error}>
                      <p>{errors.email}</p>
                    </div>
                  ) : (
                    <div className={register.errorC}>
                      <p>Plaese Enter Your Email</p>
                    </div>
                  )}
                </div>
                <div className={register.holder}>
                  <Field
                    as={TextField}
                    label="Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    className={register.fieldE}
                    name="password"
                    enterKeyHint="next"
                    required
                  />
                  {errors.password && touched.password ? (
                    <div className={register.error}>
                      <p>{errors.password}</p>
                    </div>
                  ) : (
                    <div className={register.errorC}>
                      <p>Plaese Enter Your Password</p>
                    </div>
                  )}
                  {!showPassword ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => setShowPassword(!showPassword)}
                      className={register.eyeIconO}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      onClick={() => setShowPassword(!showPassword)}
                      className={register.eyeIconO}
                    />
                  )}
                </div>
              </div>

              <div className={register.loginOr}>
                <LoadingButton
                  className={register.loginBtn}
                  size="large"
                  type="submit"
                  color="secondary"
                  disabled={!isValid && dirty}
                  loading={loading}
                  variant="contained"
                >
                  Register
                </LoadingButton>
                <div
                  onClick={() => router.push("/login")}
                  className={register.orRegister}
                >
                  Already Have Account?
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

export default RegisterForm;
