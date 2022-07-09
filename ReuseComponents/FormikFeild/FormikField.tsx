import React from "react";
import TextField from "@mui/material/TextField";
import { ErrorMessage, Field } from "formik";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
// import

interface Props {
  label: string;
  name: string;
}

const FormikField = ({ label, name }: Props) => {
  return (
    <Field
      as={TextField}
      label={label}
      autoComplete="off"
      name={name}
      helperText={<ErrorMessage name={name} />}
      required
    />
  );
};

export default FormikField;
