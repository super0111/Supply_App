import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/action/auth";
import { useAuth } from "../hooks/auth";
import Image from "../assests/images/login.png";

const LoginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const dispatch = useDispatch();
  const { loading: isSubmitting, error } = useAuth();

  //  const responseGoogle = (response) => {
  //   console.log(response);
  // };
  return (
    <div>
      <Header />
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <img style={{width: "100%"}} src={Image} />
          </div>
          <div className="col-6 pt-5">
            <h3>Get’s started.</h3>
            <p>
              create a account? <Link to="/buyersignup">SignUp</Link>
            </p>
            {error && <div>invalid user name or password</div>}

            {/* <GoogleLogin
            clientId="914297540412-g1bbqvf3ifp5g0mtl4e767kcbqvb586p.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
            <div className="">
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginValidation}
                onSubmit={(values) => {
                  dispatch(login({ ...values, type: "buyer" }));
                }}
              >
                {() => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="username">Email</label>
                      <Field
                        name="email"
                        className="form-control"
                        type="text"
                      />
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
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Please wait..." : "Submit"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="form-group w-100">
              <button className="btn btn-secondary w-100 mt-3">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
