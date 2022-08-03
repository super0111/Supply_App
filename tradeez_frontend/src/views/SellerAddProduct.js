import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
//import MySelect from "../components/MySelect";
import AuthHeader from "../components/AuthHeader";
import DatePickerField from "../components/DatePickerField";

const categories = [
  {
    id: "1",
    value: "construction",
    label: "Construction",
  },
  {
    id: "2",
    value: "home_furniture",
    label: "Home Furnishings And Furniture",
  },
  {
    id: "3",
    value: "chemicals",
    label: "Chemicals",
  },
  {
    id: "4",
    value: "apparels",
    label: "Apparels",
  },
  {
    id: "5",
    value: "textile",
    label: "Textile",
  },
  {
    id: "6",
    value: "electrical_supplies",
    label: "Electrical Supplies\r\n",
  },
  {
    id: "7",
    value: "agriculture",
    label: "Agriculture",
  },
];

const products = [
  {
    id: "44459",
    name: "steel_factories",
    label: "Steel Factories",
    categories_type: "1",
    sub_category_available: "false",
  },
  {
    id: "44460",
    name: "cement_factories",
    product_short_desc: "Cement Factories",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Cement Factories",
    categories_type: "1",
    sub_category_available: "false",
  },
  {
    id: "44461",
    name: "food_factories",
    product_short_desc: "Food Factories",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Food Factories",
    categories_type: "1",
    sub_category_available: "false",
  },
  {
    id: "44462",
    name: "ply_wood",
    product_short_desc: "Ply Wood",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Ply Wood",
    categories_type: "1",
    sub_category_available: "false",
  },
  {
    id: "44463",
    name: "glass",
    product_short_desc: "Glass",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Glass",
    categories_type: "1",
    sub_category_available: "false",
  },
  {
    id: "44464",
    name: "pvc_pipes",
    product_short_desc: "PVC Pipes",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "PVC Pipes",
    categories_type: "1",
    sub_category_available: "false",
  },
  {
    id: "44465",
    name: "round_pipes",
    product_short_desc: "Round Pipes",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Round Pipes",
    categories_type: "1",
    sub_category_available: "false",
  },
  {
    id: "44466",
    name: "tmt_bars\r\n",
    product_short_desc: "TMT Bars",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "TMT Bars",
    categories_type: "1",
    sub_category_available: "false",
  },
  {
    id: "44467",
    name: "bed",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Bed",
    categories_type: "2",
    sub_category_available: "false",
  },
  {
    id: "44468",
    name: "wardrobe",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Wardrobe",
    categories_type: "2",
    sub_category_available: "false",
  },
  {
    id: "44469",
    name: "kitchen_cabinets",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Kitchen Cabinets",
    categories_type: "2",
    sub_category_available: "false",
  },
  {
    id: "44470",
    name: "sofas",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Sofas",
    categories_type: "2",
    sub_category_available: "false",
  },
  {
    id: "44471",
    name: "curtains",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Curtains",
    categories_type: "2",
    sub_category_available: "false",
  },
  {
    id: "44472",
    name: "bedsheets",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Bedsheets",
    categories_type: "2",
    sub_category_available: "false",
  },
  {
    id: "44473",
    name: "towels",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Towels",
    categories_type: "2",
    sub_category_available: "false",
  },
  {
    id: "44474",
    name: "dinning_tables\r\n",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Dinning Tables",
    categories_type: "2",
    sub_category_available: "false",
  },
  {
    id: "44475",
    name: "silk",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Silk",
    categories_type: "5",
    sub_category_available: "false",
  },
  {
    id: "44476",
    name: "cotton",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Cotton",
    categories_type: "5",
    sub_category_available: "false",
  },
  {
    id: "44477",
    name: "leather",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Leather",
    categories_type: "5",
    sub_category_available: "false",
  },
  {
    id: "44478",
    name: "wool",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Wool",
    categories_type: "5",
    sub_category_available: "false",
  },
  {
    id: "44479",
    name: "men",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Men's",
    categories_type: "4",
    sub_category_available: "false",
  },
  {
    id: "44480",
    name: "women",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Women's",
    label: "4",
    sub_category_available: "false",
  },
  {
    id: "44481",
    name: "kids",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Kids",
    categories_type: "4",
    sub_category_available: "false",
  },
  {
    id: "44482",
    name: "wire",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Wire",
    categories_type: "6",
    sub_category_available: "false",
  },
  {
    id: "44483",
    name: "rice",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Rice",
    categories_type: "7",
    sub_category_available: "false",
  },
  {
    id: "44484",
    name: "Sugarcane",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Sugarcane",
    categories_type: "7",
    sub_category_available: "false",
  },
  {
    id: "44485",
    name: "Tea",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Tea",
    categories_type: "7",
    sub_category_available: "false",
  },
  {
    id: "44486",
    name: "coffee",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Coffee",
    categories_type: "7",
    sub_category_available: "false",
  },
  {
    id: "44487",
    name: "pepper",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Pepper",
    categories_type: "7",
    sub_category_available: "false",
  },
  {
    id: "44488",
    name: "cashew_nuts",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Cashew Nuts",
    categories_type: "7",
    sub_category_available: "false",
  },
  {
    id: "44489",
    name: "spices",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Spices",
    categories_type: "7",
    sub_category_available: "false",
  },
  {
    id: "44490",
    name: "frozen_fish",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Frozen Fish",
    categories_type: "7",
    sub_category_available: "false",
  },
  {
    id: "44491",
    name: "crustaceans",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Crustaceans",
    categories_type: "7",
    sub_category_available: "false",
  },
  {
    id: "44492",
    name: "vegetables",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Vegetables",
    categories_type: "7",
    sub_category_available: "false",
  },
  {
    id: "44493",
    name: "fertlizers",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Fertlizers",
    categories_type: "3",
    sub_category_available: "false",
  },
  {
    id: "44494",
    name: "chemicals",
    product_short_desc: "",
    created_date: "2022-06-26",
    modified_date: "2022-06-26",
    created_by: "",
    label: "Chemicals",
    categories_type: "3",
    sub_category_available: "false",
  },
];

const pageSize = 6;

const SellerAddProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
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
