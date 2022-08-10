import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthHeader from "../components/AuthHeader";
import DatePickerField from "../components/DatePickerField";


const SellerAddProduct = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);

  return (
    <div className="container_gap">
      <AuthHeader />
      <div className="rfq_container">
        <div className="rfq_container_display">
          <h2>Add Product</h2>
        </div>
      </div>
      <div className="content-section">
        <Formik
          initialValues={{
            categories: "",
            products: "",
            sub_product: "",
            product_quantity: "",
            price: "",
            delivery_time: "",
          }}
          validationSchema={Yup.object().shape({
            categories: Yup.string().required("Required"),
            products: Yup.string().required("Required"),
            product_quantity: Yup.string().required("Required"),
            price: Yup.string().required("Required"),
            delivery_time: Yup.string().required("Required"),
          })}
          onSubmit={(values, { resetForm }) => {
            // same shape as initial values
            const data = {
              created_date: new Date(),
              quantity: values.quantity,
              quoted_amount: values.price,
              sub_product_id: values.sub_product,
              status: "CREATED",
              remarks: values.remarks,
              quantity_no: values.quantity,
              user_id: user.user.id,
              categories_id: values.categories,
              products_id: values.products,
              price: values.price,
              delivery_time: values.delivery_time,
              product_quantity: values.product_quantity,
            };
            axios({
              method: "post",
              url: `${process.env.REACT_APP_API_URL}seller-products`,
              data,
              headers: { Authorization: `Bearer ${user.user.token}` },
            }).then((res) => {
              resetForm();
              navigate("/seller-products");
            });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="row">
                <div className="col-12 px-5 pt-5">
                  <label htmlFor="category_id" className="form-label">
                    Category
                  </label>
                  <Field
                    name="categories"
                    className="form-control"
                    id="category_id"
                  />
                  <ErrorMessage name="categories" />
                </div>
                <div className="col-12 px-5">
                  <label htmlFor="products_id" className="form-label">
                    Product
                  </label>
                  <Field
                    name="products"
                    className="form-control"
                    id="products_id"
                  />
                  <ErrorMessage name="products" />
                </div>
                <div className="col-12 px-5">
                  <label htmlFor="sub_product_id" className="form-label">
                    Sub Product
                  </label>
                  <Field
                    name="sub_product"
                    type="sub_product"
                    className="form-control"
                    id="sub_product_id"
                  />
                  <ErrorMessage name="sub_product" />
                </div>
                <div className="col-12 px-5">
                  <label htmlFor="product_quantity" className="form-label">
                    Product quantity
                  </label>
                  <Field
                    name="product_quantity"
                    type="product_quantity"
                    className="form-control"
                    id="product_quantity"
                  />
                  <ErrorMessage name="product_quantity" />
                </div>
                <div className="col-12 px-5">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <Field
                    name="price"
                    type="price"
                    className="form-control"
                    id="price"
                  />
                  <ErrorMessage name="price" />
                </div>
                <div className="col-12 px-5">
                  <label htmlFor="delivery_time" className="form-label">
                    delivery_time
                  </label>
                  <DatePickerField
                    name="delivery_time"
                    type="delivery_time"
                    className="form-control"
                    id="delivery_time"
                  />
                  <ErrorMessage name="delivery_time" />
                </div>
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SellerAddProduct;
