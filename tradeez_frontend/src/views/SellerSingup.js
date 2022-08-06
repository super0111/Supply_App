import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
//import { GoogleLogin } from "react-google-login";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Image from "../assests/images/login.png";
import { signup } from "../store/action/auth";

const LoginValidation = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <div className="inner--banner">
        <h3 className="inter">Why Supply First?</h3>
      </div>
      <div className="container-xxl login">
        <div className="row list">
          <div className="col-md-3 col-sm-12">
            Increase Manufacturing Output
          </div>
          <div className="col-md-3 col-sm-12"> Increase Reliability </div>
          <div className="col-md-3 col-sm-12">
            Supply to contracts and Clients Gloablly{" "}
          </div>
          <div className="col-md-3 col-sm-12">
            {" "}
            Build a robust Supply Chain{" "}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img style={{width: "100%"}} src={Image} />
          </div>
          <div className="col-6">
            <h3>Get’s started.</h3>
            <p>
              already have an account? <Link to="/sellerlogin">log in</Link>
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
                    type: "seller",
                  },
                }).then((response) => {
                  console.log(response);
                  navigate("/kyc");
                });
                //dispatch(signup({ ...values, type: "seller" }));
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
                    <label htmlFor="password">passwords</label>
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
