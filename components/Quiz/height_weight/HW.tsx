import React from "react";
import hw from "./hW.module.scss";
import { hWSchema, initialValues } from "../../../validation/hW.validation";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../Redux/Actions/Quiz";

const HW = () => {
  const dispatch = useDispatch();
  const { addHeightWeight } = bindActionCreators(actionCreators, dispatch);
  const router = useRouter();
  return (
    <div className={hw.mainContainer}>
      <div className={hw.quizContainer}>
        <h2>What Is Your Weight And Height (kg-cm) ?</h2>
        <div className={hw.container}>
          <Formik
            initialValues={initialValues}
            validationSchema={hWSchema}
            onSubmit={async (data) => {
              console.log(typeof data.weight);
              const _weight = parseInt(data.weight);
              const _height = parseInt(data.height);
              const _target_weight = parseInt(data.targetWeight);
              const _age = parseInt(data.age);
              addHeightWeight(_height, _weight, _target_weight, _age);
              router.push("/quiz/years");
            }}
          >
            {({ errors, touched, isValid, dirty }) => (
              <Form className={hw.fields}>
                <div className={hw.inputsContainer}>
                  <div className={hw.holder}>
                    <Field
                      as={TextField}
                      type="text"
                      label="Height"
                      name="height"
                      color="primary"
                      className={hw.field}
                      enterKeyHint="next"
                      numeric
                      required
                    />
                    {errors.height && touched.height ? (
                      <div className={hw.error}>
                        <p>{errors.height}</p>
                      </div>
                    ) : (
                      <div className={hw.errorC}>
                        <p>Plaese Enter Your Height(cm)</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className={hw.inputsContainer}>
                  <div className={hw.holder}>
                    <Field
                      as={TextField}
                      type="text"
                      label="Weight"
                      name="weight"
                      className={hw.field}
                      enterKeyHint="next"
                      numeric
                      required
                    />
                    {errors.weight && touched.weight ? (
                      <div className={hw.error}>
                        <p>{errors.weight}</p>
                      </div>
                    ) : (
                      <div className={hw.errorC}>
                        <p>Plaese Enter Your Weight (kg)</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className={hw.inputsContainer}>
                  <div className={hw.holder}>
                    <Field
                      as={TextField}
                      type="text"
                      name="targetWeight"
                      label="Target Weight"
                      className={hw.field}
                      enterKeyHint="next"
                      numeric
                      required
                    />
                    {errors.targetWeight && touched.targetWeight ? (
                      <div className={hw.error}>
                        <p>{errors.targetWeight}</p>
                      </div>
                    ) : (
                      <div className={hw.errorC}>
                        <p>Plaese Enter Your Target Weight (kg)</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className={hw.inputsContainer}>
                  <div className={hw.holder}>
                    <Field
                      type="text"
                      as={TextField}
                      name="age"
                      label="Age"
                      className={hw.field}
                      enterKeyHint="done"
                      numeric
                      required
                    />
                    {errors.age && touched.age ? (
                      <div className={hw.error}>
                        <p>{errors.age}</p>
                      </div>
                    ) : (
                      <div className={hw.errorC}>
                        <p>Plaese Enter Your Age</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className={hw.submitHolder}>
                  <button
                    type="submit"
                    disabled={!isValid && dirty}
                    className={!isValid ? hw.loginBtnD : hw.loginBtn}
                  >
                    Next
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default HW;
