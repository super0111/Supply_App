import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { useSelector } from "react-redux";
import AuthHeader from "../components/AuthHeader";
import DatePickerField from "../components/DatePickerField";

const submitValidation = yup.object().shape({
  product_type: yup.string().required(),
  remarks: yup.string().required(),
  quantity: yup.string().required(),
  quantityno: yup.string().required(),
  expected_price: yup.string().required(),
  expected_delivery_date: yup.string().required(),
});

const AddProduct = () => {
  const selectedCategory = useSelector(
    (state) => state.productDetails.selectedCategories
  );
  const selectedProduct = useSelector(
    (state) => state.productDetails.selectedProduct
  );
  const userInfo = useSelector((state) => state.auth);
  return (
    <div className=" product container_gap">
      <AuthHeader />
      <div className="category_container">
        <h1 className="categories">{selectedCategory.value}</h1>
        <h3 className="categories">{selectedProduct.value}</h3>
        <Formik
          initialValues={{
            product_type: "",
            remarks: "",
            quantity: "",
            quantityno: "",
            expected_price: "",
            expected_delivery_date: "",
          }}
          validationSchema={submitValidation}
          onSubmit={(values, { resetForm }) => {
            const data = {
              created_date: new Date(),
              category_id: selectedCategory.id,
              quantity: values.quantity,
              quoted_amount: values.expected_price,
              user_id: userInfo.user.id,
              product_id: selectedProduct.id,
              sub_product_id: "",
              status: "CREATED",
              remarks: values.remarks,
              expected_delivery_date: values.expected_delivery_date,
              quantity_no: values.quantityno,
            };
            axios({
              method: "post",
              url: `${process.env.REACT_APP_API_URL}order`,
              data,
              headers: { Authorization: `Bearer ${userInfo.user.token}` },
            }).then(() => {
              resetForm();
            });
          }}
        >
          {() => (
            <Form>
              <div className="row">
                <div className="col-6">
                  <Field
                    className="form-control"
                    name="product_type"
                    placeholder="Product Type"
                  />
                  <ErrorMessage name="product_type" />
                </div>
                <div className="col-6 d-flex">
                  <div className="d-flex pl-2">
                    <div className="input-group mb-3 ">
                      <Field
                        name="quantity"
                        className="form-control"
                        placeholder="dimension"
                      />
                      <span className="input-group-text" id="basic-addon2">
                        MM
                      </span>
                    </div>
                    <ErrorMessage name="quantity" />
                  </div>
                  <div className="d-flex">
                    <div className="input-group mb-3">
                      <Field
                        name="quantityno"
                        className="form-control"
                        placeholder="dimension"
                      />
                      <span className="input-group-text" id="basic-addon2">
                        MM
                      </span>
                    </div>
                    <ErrorMessage name="quantityno" />
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-6 d-flex">
                  <div className="d-flex">
                    <div className="input-group mb-3">
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="dimension"
                      />
                      <span className="input-group-text" id="basic-addon2">
                        MM
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="input-group mb-3">
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="dimension"
                      />
                      <span className="input-group-text" id="basic-addon2">
                        MM
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row">
                <div className="col-6">
                  <Field
                    name="expected_price"
                    className="form-control"
                    placeholder="Expected price"
                  />
                  <ErrorMessage name="expected_price" />
                </div>
                <div className="col-6">
                  <DatePickerField
                    className="form-control"
                    placeholder="Expected delivery date"
                    name="expected_delivery_date"
                  />
                  <ErrorMessage name="expected_delivery_date" />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-12">
                  <Field
                    name="remarks"
                    className="form-control"
                    placeholder="Remarks"
                  />
                  <ErrorMessage name="remarks" />
                </div>
              </div>
              <button>Cancel</button>
              <button>Next</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default AddProduct;
