import * as Yup from "yup";

export const initialValues = {
  city: "",
  address: "",
  phone_number: "",
  zip_code: "",
};
export const addressSchema = Yup.object().shape({
  city: Yup.string().typeError("Should Be String").required("Required"),
  address: Yup.string().typeError("Should Be String").required("Required"),
  zip_code: Yup.string().typeError("Should Be String").required("Required"),
  phone_number: Yup.string().required("Required"),
});
