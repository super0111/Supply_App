import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <div className="input-group">
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        className="form-control"
        dateFormat="yyyy/MM/dd"
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
      />
      <i className="bi bi-calendar3"></i>
    </div>
  );
};
export default DatePickerField;
