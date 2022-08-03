import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
//import { GoogleLogin } from "react-google-login";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
//import UploadForm from "../components/UploadForm";
import CustomSelect from "../components/CustomSelect";
import { loginSuccess } from "../store/action/auth";

//import { Link, Navigate } from "react-router-dom";

const productsoptions = [{ label: "product 1", value: "product 1" }];

const Validation = yup.object().shape({
  email: yup.string().email().required("Please Enter your Email"),
  companyName: yup.string().required("Please Enter your First name"),
  bussiness_type: yup.string().required("Please Enter your Last name"),
  industry_type: yup.string().required("Please Enter your phone number"),
  gst_number: yup.string().required("Please Enter your aadhar number"),
  manufacture_type: yup.string().required("Please Enter your pan number"),
  mobile_number: yup.string().required("Please Enter your pan document"),
});

const AddAccountDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  return (
    <div>
      <Header />
      <div className="container-xxl d-flex justify-content-lg-between justify-content-md-between w-100">
        <Formik
          initialValues={{
            companyName: "",
            bussiness_type: "",
            industry_type: "",
            gst_number: "",
            manufacture_type: "",
            email: "",
            mobile_number: "",
          }}
          validationSchema={Validation}
          onSubmit={(values) => {
            const data = {
              created_date: new Date(),
              company_name: values.companyName,
              bussiness_type: values.bussiness_type,
              industry_type: values.industry_type,
              gst_number: values.gst_number,
              manufacture_type: values.manufacture_type,
              email: values.email,
              user_id: user.user.id,
              mobile: parseInt(values.mobile_number),
            };
            axios({
              method: "post",
              url: `${process.env.REACT_APP_API_URL}buyerkyc`,
              data: data,
              headers: { Authorization: `Bearer ${user.user.token}` },
            }).then((res) => {
              let data = {
                kycDone: true,
                email: user.user.email,
                id: user.user.id,
                name: user.user.name,
                type: user.user.type,
              };
              dispatch(loginSuccess(user.user.token, data));
              navigate("/product");
            });
          }}
        >
          {({
            values,
            touched,
            dirty,
            errors,
            isSubmitting,
            handleChange,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Form className="w-100">
              <div className="sellerkyc">
                <div className="panel">
                  <div className="title">Company Details</div>
                  <div className="section">
                    <div className="row pt-3">
                      <div className="col-9">
                        <Field
                          type="text"
                          name="companyName"
                          className="form-control"
                          placeholder="Company name"
                          aria-label="Company name"
                        />
                        <ErrorMessage name="companyName" />
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-4">
                        <CustomSelect
                          name="bussiness_type"
                          value={"value"}
                          options={productsoptions}
                          placeholder="Select Bussiness Type"
                          onChange={(option) => {
                            setFieldTouched("bussiness_type", true);
                            setFieldValue("bussiness_type", option.value);
                          }}
                        />
                        <ErrorMessage name="bussiness_type" />
                      </div>
                      <div className="col-4">
                        <CustomSelect
                          name="industry_type"
                          value={"value"}
                          options={productsoptions}
                          placeholder="Select Industry"
                          onChange={(option) => {
                            setFieldTouched("industry_type", true);
                            setFieldValue("industry_type", option.value);
                          }}
                        />
                        <ErrorMessage name="industry_type" />
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-4">
                        <Field
                          type="text"
                          name="gst_number"
                          className="form-control"
                          placeholder="GST"
                          aria-label="GST"
                        />
                        <ErrorMessage name="gst_number" />
                      </div>
                      <div className="col-4">
                        <CustomSelect
                          name="manufacture_type"
                          value={"value"}
                          options={productsoptions}
                          placeholder="Select Manufacture"
                          onChange={(option) => {
                            setFieldTouched("manufacture_type", true);
                            setFieldValue("manufacture_type", option.value);
                          }}
                        />
                        <ErrorMessage name="manufacture_type" />
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-4">
                        <Field
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email id"
                          aria-label="Enter your email id"
                        />
                        <ErrorMessage name="email" />
                      </div>
                      <div className="col-4">
                        <div className="mb-3">
                          <Field
                            type="text"
                            name="mobile_number"
                            className="form-control"
                            placeholder="Enter your mobile number"
                            aria-label="Enter your mobile number"
                          />
                          <ErrorMessage name="mobile_number" />
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
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddAccountDetails;
