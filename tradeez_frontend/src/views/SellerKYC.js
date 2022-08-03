import { useEffect, useState } from 'react';
import { Box, TextField, Button, Checkbox, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import Header from "../components/Header";


const SellerKYC = () => {
  const [ showHome1, setShowHome1 ] = useState(false);
  const [ showHome2, setShowHome2 ] = useState(false);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
      field8: "",
      agree: false
    },
    validationSchema: Yup.object({
      field1: Yup.string()
        .required("Required"),
      field2: Yup.string()
        .required("Required"),
      field3: Yup.string()
        .required("Required"),
      field4: Yup.string()
        .required("Required"),
      field5: Yup.string()
        .required("Required"),
      field6: Yup.string()
        .required("Required"),
      field7: Yup.string()
        .required("Required"),
      field8: Yup.string()
        .required("Required"),
      agree: Yup.boolean().oneOf([true], "Must agree the term")
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        navigate("/kyc")
        setSubmitting(false);
      }, 400);
    }
  });
  
  return (
    <>
      <Header />
      <div className="submit2">
        <form className="form" onSubmit={formik.handleSubmit}>
          <Box 
            sx={{
              backgroundColor: "white"
            }}
          >
            <div className="header" onClick={()=>setShowHome1(!showHome1)}>
              <span>DIRECTOR KYC</span>
            </div>
            { showHome1 === true ? 
              <div className="body">
                <div className='body_title'>Director-1</div>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextField 
                      fullWidth 
                      placeholder='First name'
                      {...formik.getFieldProps("field1")}
                    />
                    {formik.touched.field1 && formik.errors.field1 ? (
                      <div className="is-invalid">{formik.errors.field1}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField 
                      fullWidth 
                      placeholder='Middle name'
                      {...formik.getFieldProps("field2")}
                    />
                    {formik.touched.field2 && formik.errors.field2 ? (
                      <div className="is-invalid">{formik.errors.field2}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField 
                      fullWidth 
                      placeholder='Last name'
                      {...formik.getFieldProps("field3")}
                    />
                    {formik.touched.field3 && formik.errors.field3 ? (
                      <div className="is-invalid">{formik.errors.field3}</div>
                    ) : null}
                  </Grid>
                </Grid>
                <Grid 
                  container 
                  spacing={2}
                  sx={{
                    marginTop: "10px"
                  }}
                >
                  <Grid item xs={12} md={4}>
                    <TextField 
                      fullWidth 
                      placeholder='Enter your Email Id'
                      {...formik.getFieldProps("field4")}
                    />
                    {formik.touched.field4 && formik.errors.field4 ? (
                      <div className="is-invalid">{formik.errors.field4}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField 
                      fullWidth 
                      placeholder='Enter your Mobile Number'
                      {...formik.getFieldProps("field5")}
                    />
                    {formik.touched.field5 && formik.errors.field5 ? (
                      <div className="is-invalid">{formik.errors.field5}</div>
                    ) : null}
                  </Grid>
                </Grid>
                <Grid 
                  container 
                  spacing={2}
                  sx={{
                    marginTop: "10px"
                  }}
                >
                  <Grid item xs={12} md={4}>
                    <TextField 
                      fullWidth 
                      placeholder='Enter your Adhaar Number'
                      {...formik.getFieldProps("field6")}
                    />
                    {formik.touched.field6 && formik.errors.field6 ? (
                      <div className="is-invalid">{formik.errors.field6}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <label htmlFor="upload-photo" style={{ width: "100%" }}>
                      <input
                        style={{ display: 'none' }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                      />
                      <Button
                        component="span"
                        variant="contained"
                        className='upload'
                      >
                        Upload Addharr Card
                        <img src='/images/Vector.png' className='upload_img' />
                      </Button>
                    </label>
                  </Grid>
                </Grid>
                <Grid 
                  container 
                  spacing={2}
                  sx={{
                    marginTop: "10px"
                  }}
                >
                  <Grid item xs={12} md={4}>
                    <TextField 
                      fullWidth 
                      placeholder='Enter your Pan Card Number'
                      {...formik.getFieldProps("field7")}
                    />
                    {formik.touched.field7 && formik.errors.field7 ? (
                      <div className="is-invalid">{formik.errors.field7}</div>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <label htmlFor="upload-photo" style={{ width: "100%" }}>
                      <input
                        style={{ display: 'none' }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                      />
                      <Button
                        component="span"
                        variant="contained"
                        className='upload'
                      >
                        Upload Addharr Card
                        <img src='/images/Vector.png' className='upload_img' />
                      </Button>
                    </label>
                  </Grid>
                </Grid>
                <Box 
                  display="flex" 
                  justifyContent="end"
                  sx={{
                    marginTop: "10px"
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#212738",
                      fontSize: "13px",
                      width: "100px",
                      marginRight: "15px"
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      "&:hover": {
                        backgroundColor: "rgb(45, 44, 44)",
                      },
                    }}
                  >
                    Add Director
                  </Button>
                </Box>
              </div>
            : "" }
          </Box>

          <Box 
            sx={{
              backgroundColor: "white",
              marginTop: "30px",
              marginBottom: "20px"
            }}
          >
            <div className="header" onClick={()=>setShowHome2(!showHome2)}>
              <span>COMPANY KYC</span>
            </div>
            { showHome2 === true ? 
              <div className="body2">
                <div className='body_field'>
                  <TextField 
                    fullWidth 
                    placeholder='First name'
                    {...formik.getFieldProps("field8")}
                  />
                  {formik.touched.field8 && formik.errors.field8 ? (
                    <div className="is-invalid">{formik.errors.field8}</div>
                  ) : null}
                  <Grid
                    container 
                    spacing={2}
                    sx={{
                      marginTop: "10px",
                      width: '100%',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Grid item xs={12} md={9}>
                      <span>GST Certificate</span>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <label htmlFor="upload-photo" style={{ width: "100%" }}>
                        <input
                          style={{ display: 'none' }}
                          id="upload-photo"
                          name="upload-photo"
                          type="file"
                        />
                        <Button
                          component="span"
                          variant="contained"
                          className='upload2'
                        >
                          Upload
                          <img src='/images/Vector.png' className='upload_img' />
                        </Button>
                      </label>
                    </Grid>
                  </Grid>
                  <Grid 
                    container 
                    spacing={2}
                    sx={{
                      marginTop: "10px",
                      width: '100%',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Grid item xs={12} md={9}>
                      <span>Import - Export Licence Issued By DGFT</span><br />
                      <span className='small_text'>Issued By Director General And Foreign Trade</span>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <label htmlFor="upload-photo" style={{ width: "100%" }}>
                        <input
                          style={{ display: 'none' }}
                          id="upload-photo"
                          name="upload-photo"
                          type="file"
                        />
                        <Button
                          component="span"
                          variant="contained"
                          className='upload2'
                        >
                          Upload
                          <img src='/images/Vector.png' className='upload_img' />
                        </Button>
                      </label>
                    </Grid>
                  </Grid>
                  <Grid 
                    container 
                    spacing={2}
                    sx={{
                      marginTop: "10px",
                      width: '100%',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Grid item xs={12} md={9}>
                      <span>Certificate Of Incorporation Issued By MCA</span><br />
                      <span className='small_text'>By Ministry Of Road Tranport & Highways</span>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <label htmlFor="upload-photo" style={{ width: "100%" }}>
                        <input
                          style={{ display: 'none' }}
                          id="upload-photo"
                          name="upload-photo"
                          type="file"
                        />
                        <Button
                          component="span"
                          variant="contained"
                          className='upload2'
                        >
                          Upload
                          <img src='/images/Vector.png' className='upload_img' />
                        </Button>
                      </label>
                    </Grid>
                  </Grid>
                </div>
                <Box 
                  display="flex" 
                  justifyContent="end"
                  sx={{
                    marginTop: "10px"
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#212738",
                      fontSize: "13px",
                      width: "100px",
                      marginRight: "15px"
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </div>
            : "" }

          </Box>
          <Checkbox
            sx={{
              fontSize: 15
            }}
            {...formik.getFieldProps("agree")}
          />
          <span className='text_agree'>I agree to Platform’s 
            <span className='text_red'>Terms of Service</span> and 
            <span className='text_red'> Privacy Policy</span>
          </span>
          {formik.touched.agree && formik.errors.agree ? (
            <div className="is-invalid">{formik.errors.agree}</div>
          ) : null}
          <Box display="flex" justifyContent="center">
            <Button
              type='submit'
              onClick={() => {
                setShowHome1(true);
                setShowHome2(true);
              }}
              variant="contained"
              sx={{ 
                backgroundColor: "#FF0000",
                width: 120,
                color: "white",
                fontWeight: 600,
                margin: "auto",
                "&:hover": {
                  backgroundColor: '#d33333;'
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
    </div>
    </>

  )
}

export default SellerKYC