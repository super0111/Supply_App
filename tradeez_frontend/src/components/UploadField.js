import React from "react";
import { Field } from "formik";

const UploadField = ({ field, form: {}, name, label, isError, ...props }) => {
  return (
    <>
      <Field
        variant="outlined"
        name="uploader"
        title={label}
        type={"file"}
        {...props}
      />
    </>
  );
};

export default UploadField;
