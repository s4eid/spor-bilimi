import React from "react";
import { Formik, Field, Form } from "formik";
import { sehirlerItems } from "../../../data/citys.data";
import {
  addressSchema,
  initialValues,
} from "../../../validation/address.validation";
import address from "./address.module.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { actionCreators } from "../../../Redux/Actions/UserCourse/index";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
interface Props {
  setProgress: (progress: number) => void;
}
const Address = ({ setProgress }: Props) => {
  const dispatch = useDispatch();
  const { addAddressInfos } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className={address.mainContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={addressSchema}
        onSubmit={async (data) => {
          addAddressInfos({
            address: data.address,
            city: data.city,
            phone_number: data.phone_number,
            zip_code: data.zip_code,
          });
          if (data.address) {
            setProgress(2);
          }
        }}
      >
        {({ errors, touched, isValid, dirty, setFieldValue }) => (
          <Form className={address.fields}>
            <div className={address.inputsContainer}>
              <div className={address.holder}>
                <Autocomplete
                  disablePortal
                  id="city"
                  onChange={(e, value) => setFieldValue("city", value)}
                  options={sehirlerItems}
                  renderInput={(params) => (
                    <Field
                      name="city"
                      as={TextField}
                      // helperText={<ErrorMessage name="city" />}
                      {...params}
                      label="City"
                      className={address.fieldE}
                    />
                  )}
                />
                {errors.city && touched.city ? (
                  <div className={address.error}>
                    <p>{errors.city}</p>
                  </div>
                ) : (
                  <div className={address.errorC}>
                    <p>Plaese Enter Your City</p>
                  </div>
                )}
              </div>
              <div className={address.holder}>
                <Field
                  as={TextField}
                  label="Address"
                  variant="outlined"
                  className={address.fieldE}
                  name="address"
                  enterKeyHint="next"
                />
                {errors.address && touched.address ? (
                  <div className={address.error}>
                    <p>{errors.address}</p>
                  </div>
                ) : (
                  <div className={address.errorC}>
                    <p>Plaese Enter Your Address</p>
                  </div>
                )}
              </div>
            </div>
            <div className={address.inputsContainer}>
              <div className={address.holder}>
                <Field
                  as={TextField}
                  label="Zip Code"
                  variant="outlined"
                  type="text"
                  className={address.fieldE}
                  name="zip_code"
                  enterKeyHint="done"
                />
                {errors.zip_code && touched.zip_code ? (
                  <div className={address.error}>
                    <p>{errors.zip_code}</p>
                  </div>
                ) : (
                  <div className={address.errorC}>
                    <p>Plaese Enter Your Zip Code</p>
                  </div>
                )}
              </div>
              <div className={address.holder}>
                <Field
                  as={TextField}
                  label="Phone Number"
                  variant="outlined"
                  type="text"
                  className={address.fieldE}
                  name="phone_number"
                  enterKeyHint="done"
                />
                {errors.phone_number && touched.phone_number ? (
                  <div className={address.error}>
                    <p>{errors.phone_number}</p>
                  </div>
                ) : (
                  <div className={address.errorC}>
                    <p>Plaese Enter Your Phone Number</p>
                  </div>
                )}
              </div>
            </div>
            <div className={address.loginOr}>
              {/* {!loading ? ( */}
              <button
                type="submit"
                disabled={!isValid && dirty}
                className={!isValid ? address.loginBtnD : address.loginBtn}
              >
                Add Address
              </button>
              {/* ) : ( */}
              {/* <button disabled={true} className={login.button}>
                      <span className={login.buttonLoading}> </span>
                    </button> */}
              {/* )} */}
              {/* <div
                    type="button"
                    onClick={() => router.push("/register")}
                    className={login.orRegister}
                  >
                    Have no account?
                  </div> */}
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
  );
};

export default Address;
