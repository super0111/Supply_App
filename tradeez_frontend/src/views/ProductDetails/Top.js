import { Box, Button, Grid, Paper, TableContainer, Table, TableBody, TableCell, TableRow  } from '@mui/material'; 
import { useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import Carousel from "react-img-carousel";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BiHeart } from "react-icons/bi";

const imgs =  [
  { url: "/images/details/1 (4).png" },
  { url: "/images/details/1 (1).png" },
  { url: "/images/details/1 (4).png" },
  { url: "/images/details/1 (5).png" },
]

const Top = (props) => {
  const { productDetails } = props;
  const [ isShow, setIsShow ] = useState(true);
  const [ selectedImg, setSelectedImg ] = useState(0);

  const formik = useFormik({
    initialValues: {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
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
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    }
  });

  return(
    <div className="top" style={{padding:"0"}}>
      <div className="title">Industry</div>
      <div className="title_text">Construction <BsChevronRight /> Cement <BsChevronRight /> PCC Cement</div>
      <Grid container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px"
        }}
      >
        <Grid item md={6} sm={12} xs={12}
          sx={{ 
            width: "48% !important" 
          }}
        >
          <Box display="flex" flexDirection="column" justifyContent="space-between">
            <div className='img_field'>
              <img src={imgs[selectedImg].url}/>
              <div className='cart_status'>
                <BiHeart color="#4C514E" />
              </div>
            </div>
            <div className='img_item'>
              {
                imgs.length && (
                  <Carousel
                    viewportWidth="100%"
                    cellPadding={5}
                    afterChange={(newIndex) => setSelectedImg(newIndex)}
                    className="carousel_width container"
                  >
                    {imgs.map((img, i) => (
                      <div className='item_field' key={i} onClick={() => setSelectedImg(i)}>
                        <img src={img.url} />
                      </div>
                    ))}
                  </Carousel>
                )
              }
            </div>
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12} 
          sx={{ 
            maxWidth: "48% !important",
            '@media (max-width: 900px)' : {
              maxWidth: "100% !important",
              marginTop: "20px"
            }
          }}
          className="details"
        >
          <div className='title1'>{productDetails?.title}</div>
          <span style={{color: "rgb(85, 84, 84)"}}>{productDetails?.details1}</span> <br></br>
          <span style={{color: "rgb(85, 84, 84)"}}>{productDetails?.details2}</span>
          <Box display='flex' flexDirection="column" sx={{marginTop: "15px"}}>
            <form className="form" onSubmit={formik.handleSubmit}>
              { isShow === true ?
                <Grid container
                  sx={{
                    justifyContent: "space-between"
                  }}
                >
                  <Grid item md={6} sm={6} xs={12}
                    sx={{
                      maxWidth: "48%",
                      '@media (max-width: 900px)' : {
                        maxWidth: "100%",
                      }
                    }}
                  >
                    <div className='dflex'>
                      <strong>Quantity</strong>
                      <input
                        type="text"
                        placeholder='Enter Quantity'
                        className='text_input'
                        {...formik.getFieldProps("field1")}
                      />
                      {formik.touched.field1 && formik.errors.field1 ? (
                        <div className="is-invalid">{formik.errors.field1}</div>
                      ) : null}
                    </div>
                    <div className='dflex'>
                      <strong>Delivery Date</strong>
                      <input
                        type="text"
                        placeholder='DD/MM/YYYY'
                        className='text_input'
                        {...formik.getFieldProps("field2")}
                      />
                      {formik.touched.field2 && formik.errors.field2 ? (
                        <div className="is-invalid">{formik.errors.field2}</div>
                      ) : null}
                    </div>
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}
                    sx={{
                      maxWidth: "48%",
                      '@media (max-width: 900px)' : {
                        maxWidth: "100%",
                      }
                    }}
                  >
                    <div className='dflex' style={{marginLeft: "10px"}}>
                      <strong>Price Target</strong>
                      <input
                        type="text"
                        placeholder='Enter Price Target'
                        className='text_input'
                        {...formik.getFieldProps("field3")}
                      />
                      {formik.touched.field3 && formik.errors.field3 ? (
                        <div className="is-invalid">{formik.errors.field3}</div>
                      ) : null}
                    </div>
                    <div className='dflex' style={{marginLeft: "10px"}}>
                      <strong>Delivery Frequency</strong>
                      <input
                        type="text"
                        placeholder='Enter Delivery Frequency'
                        className='text_input'
                        {...formik.getFieldProps("field4")}
                      />
                      {formik.touched.field4 && formik.errors.field4 ? (
                        <div className="is-invalid">{formik.errors.field4}</div>
                      ) : null}
                    </div>
                  </Grid>
                  <strong>Delivery Location</strong>
                  <input
                    type="text"
                    placeholder='Address...'
                    className='text_input'
                    {...formik.getFieldProps("field5")}
                  />
                  {formik.touched.field5 && formik.errors.field5 ? (
                    <div className="is-invalid">{formik.errors.field5}</div>
                  ) : null}
                </Grid> 
              : "" }
              <div className='d-flex'>
                <div className='d-flex flex-column'>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "150px",
                      fontSize: "14px",
                      margin: "15px 0 5px 0",
                      color: "#212738",
                      borderColor: "#212738"
                    }}
                    onClick={()=>setIsShow(!isShow)}
                  >
                    Quick Quote
                  </Button>
                  <Button
                    variant="outlined"
                    type='submit'
                    sx={{
                      width: "150px",
                      fontSize: "14px",
                      margin: "5px 0 10px 0",
                      color: "#212738",
                      borderColor: "#212738"
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "150px",
                      fontSize: "14px",
                      margin: "15px 0 5px 25px",
                      color: "#212738",
                      borderColor: "#212738",
                      width: "100%",
                      height: "37px",
                    }}
                  >
                    Request Sample
                  </Button>
                </div>
              </div>

            </form>
          </Box>

          <div className='title_mid'>Specifications For This Item</div>
          <TableContainer 
            component={Paper}
            sx={{
              width: "100%"
            }}
          >
            <Table 
              sx={{ 
                background: "white", 
                borderRadius: "5px",
                overflowX:'auto'
              }} 
              aria-label="simple table"
            >
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{productDetails?.itemTitle1}:</TableCell>
                  <TableCell align="left" className='fontBold'>{productDetails?.itemText1}</TableCell>
                  <TableCell align="left">{productDetails?.itemTitle2}:</TableCell>
                  <TableCell align="left" className='fontBold'>{productDetails?.itemText2}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{productDetails?.itemTitle3}:</TableCell>
                  <TableCell align="left" className='fontBold'>{productDetails?.itemText3}</TableCell>
                  <TableCell align="left">{productDetails?.itemTitle4}:</TableCell>
                  <TableCell align="left" className='fontBold'>{productDetails?.itemText4}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{productDetails?.itemTitle5}:</TableCell>
                  <TableCell align="left" className='fontBold'>{productDetails?.itemText5}</TableCell>
                  <TableCell align="left">{productDetails?.itemTitle6}:</TableCell>
                  <TableCell align="left" className='fontBold'>{productDetails?.itemText6}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  )
}

export default Top