import * as Yup from "yup";

export const initialValues = {
  height: "",
  weight: "",
  targetWeight: "",
  age: "",
};
export const hWSchema = Yup.object().shape({
  height: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(3, "Must be exactly 3 digits")
    .max(3, "Must be exactly 3 digits"),
  weight: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(2, "Must be exactly 2 digits")
    .max(3, "Must be exactly 3 digits"),
  targetWeight: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(2, "Must be exactly 2 digits")
    .max(3, "Must be exactly 3 digits"),
  age: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(2, "Must be exactly 2 digits")
    .max(3, "Must be exactly 3 digits"),
});
