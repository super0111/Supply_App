import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
//import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../store/action/auth";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";
import Image from "../assests/images/login.png";

const LoginValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = (state) => state.auth;
  return (
    <div>
      <Header />
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <img src={Image} />
          </div>
          <div className="col-6 pt-5 pb-5 mw-50">
            <h3>Get’s started.</h3>
            <p>
              already have an account? <Link to="/buyerlogin">Login In</Link>
            </p>
            {/* <GoogleLogin
            clientId="914297540412-g1bbqvf3ifp5g0mtl4e767kcbqvb586p.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
            <Formik
              initialValues={{ email: "", password: "", name: "" }}
              validationSchema={LoginValidation}
              onSubmit={(values, { setSubmitting }) => {
                axios({
                  method: "post",
                  url: `${process.env.REACT_APP_API_URL}signup`,
                  data: {
                    email: values.email,
                    password: values.password,
                    name: values.name,
                    type: "buyer",
                  },
                }).then(function (response) {
                  let data = {
                    kycDone: false,
                    email: response.data.email,
                    id: response.data.id,
                    name: response.data.name,
                    type: response.data.type,
                    token: response.data.token,
                  };
                  dispatch(loginSuccess(response.data.token, data));
                  navigate("/account-details");
                });
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field name="name" className="form-control" type="text" />
                    <ErrorMessage name="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <Field name="email" className="form-control" type="text" />
                    <ErrorMessage name="email" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">passwors</label>
                    <Field
                      name="password"
                      className="form-control"
                      type="password"
                    />
                    <ErrorMessage name="password" />
                  </div>

                  <div className="form-group w-100">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mt-3"
                    >
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
