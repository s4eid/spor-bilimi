import React, { useState } from "react";
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

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div className={register.mainContainer}>
      {/* {error ? (
        <div className={login.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <></>
      )} */}
      <div className={register.title}>
        <h1>Register</h1>
      </div>
      <div className={register.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async (data) => {
            //     const token = await reRef.current.executeAsync();
            //     reRef.current.reset();
            //     data.email = await data.email.toLowerCase();
            //     loginUser({
            //       variables: {
            //         email: data.email,
            //         password: data.password,
            //         token: token,
            //       },
            //       onError: (err) => setErrorMessage(err.message),
            //       onCompleted: () => {
            //         dispatch(getUserInfo());
            //         router.push("/");
            //       },
            //     });
            console.log(data);
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className={register.fields}>
              {/* <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                size="invisible"
                ref={reRef}
                className={login.reCaptcha}
              /> */}
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
                {/* {!loading ? ( */}
                <button
                  type="submit"
                  disabled={!isValid && dirty}
                  className={!isValid ? register.loginBtnD : register.loginBtn}
                >
                  Register
                </button>
                {/* ) : ( */}
                {/* <button disabled={true} className={login.button}>
                      <span className={login.buttonLoading}> </span>
                    </button> */}
                {/* )} */}
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
