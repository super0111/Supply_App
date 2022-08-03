import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
//import { GoogleLogin } from "react-google-login";
import * as yup from "yup";
import axios from "axios";
import Header from "../components/Header";

const Validation = yup.object().shape({
  email: yup.string().email().required("Please Enter your Email"),
  firstName: yup.string().required("Please Enter your First name"),
  lastName: yup.string().required("Please Enter your Last name"),
  phoneNumber: yup.string().required("Please Enter your phone number"),
  aadharNumber: yup.string().required("Please Enter your aadhar number"),
  aadharDocument: yup
    .array()
    .min(1)
    .required("Please Enter your aadhar document"),
  panNumber: yup.string().required("Please Enter your pan number"),
  pan_document: yup.array().min(1).required("Please Enter your pan document"),
});

const SellerKYC = () => {
  return (
    <div>
      <Header />
      <Formik
        initialValues={{
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          aadharNumber: "",
          aadharDocument: [],
          panNumber: "",
          pan_document: [],
        }}
        validationSchema={Validation}
        onSubmit={(values) => {
          var bodyFormData = new FormData();
          bodyFormData.append("created_date", new Date());
          bodyFormData.append("first_name", values.firstName);
          bodyFormData.append("middle_name", values.middleName);
          bodyFormData.append("last_name", values.lastName);
          bodyFormData.append("email", values.email);
          bodyFormData.append("phone_number", values.phoneNumber);
          bodyFormData.append("aadhar_number", values.aadharNumber);
          bodyFormData.append("addhar_link", values.aadharDocument);
          bodyFormData.append("pan_number", values.panNumber);
          bodyFormData.append("pan_link", values.pan_document);
          bodyFormData.append("company_id", 11);
          axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}sellerkyc`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(() => {});
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="sellerkyc">
              <div className="panel">
                <div className="title">Director kyc</div>
                <div className="section">
                  <div className="row pt-3">
                    <div className="col-4">
                      <Field
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                      />
                      <ErrorMessage name="firstName" />
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        name="middleName"
                        className="form-control"
                        placeholder="Middle name"
                        aria-label="Middle name"
                      />
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                      <ErrorMessage name="lastName" />
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-4">
                      <Field
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="enter your email id"
                        aria-label="enter your email id"
                      />
                      <ErrorMessage name="email" />
                    </div>
                    <div className="col-4">
                      <Field
                        type="text"
                        name="phoneNumber"
                        className="form-control"
                        placeholder="enter your mobile number"
                        aria-label="enter your mobile number"
                      />
                      <ErrorMessage name="phoneNUmber" />
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-4">
                      <Field
                        type="text"
                        name="aadharNumber"
                        className="form-control"
                        placeholder="enter your adhaar number"
                        aria-label="enter your adhaar number"
                      />
                      <ErrorMessage name="aadharNumber" />
                    </div>
                    <div className="col-4">
                      <div className="mb-3">
                        <input
                          id="file"
                          name="aadharDocument"
                          type="file"
                          onChange={(event) => {
                            const files = event.target.files;
                            let myFiles = Array.from(files);
                            setFieldValue("aadharDocument", myFiles);
                          }}
                        />
                        <ErrorMessage name="aadharDocument" />
                      </div>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-4">
                      <Field
                        type="text"
                        name="panNumber"
                        className="form-control"
                        placeholder="enter your adhaar number"
                        aria-label="enter your adhaar number"
                      />
                      <ErrorMessage name="panNumber" />
                    </div>
                    <div className="col-4">
                      <div className="mb-3">
                        <input
                          id="file"
                          name="pan_document"
                          type="file"
                          onChange={(event) => {
                            const files = event.target.files;
                            let myFiles = Array.from(files);
                            setFieldValue("pan_document", myFiles);
                          }}
                        />
                        <ErrorMessage name="pan_document" />
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mt-3"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="title">company kyc</div>
                <div className="section">
                  <Formik></Formik>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SellerKYC;
