import * as Yup from "yup";

export const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};
export const registerSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
  last_name: Yup.string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .max(255, "Too Long!")
    .email("Invalid Email")
    .required("Required"),
});
