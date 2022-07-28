import { Box, Grid, } from '@mui/material';

const items1 = [
  { title: "adsfasdf", text: "dsfsd", url:"/images/cartegory/menu2.png" },
  { title: "adsfasdf", text: "dsfsd", url:"/images/cartegory/menu2.png" },
  { title: "adsfasdf", text: "dsfsd", url:"/images/cartegory/menu2.png" },
  { title: "adsfasdf", text: "dsfsd", url:"/images/cartegory/menu2.png" },
  { title: "adsfasdf", text: "dsfsd", url:"/images/cartegory/menu2.png" },
  { title: "adsfasdf", text: "dsfsd", url:"/images/cartegory/menu2.png" },
]
const items2 = [
  { title: "adsfasdf", text: "dsfsd", url:"/images/cartegory/menu2.png" },
  { title: "adsfasdf", text: "dsfsd", url:"/images/cartegory/menu2.png" },
  { title: "adsfasdf", text: "dsfsd", url:"/images/cartegory/menu2.png" },
  { title: "adsfasdf", text: "dsfsd", url:"/images/cartegory/menu2.png" },
  { title: "adsfasdf", text: "dsfsd", url:"/images/cartegory/menu2.png" },
  { title: "adsfasdf", text: "dsfsd", url:"/images/cartegory/menu2.png" },
]

const Products = () => {
  return (
    <div className="products">
      <div className="title">Products</div>
      <Grid 
        container 
        spacing={2}
      >
        {
          items1.map((item, i)=>(
          <Grid md={2} sm={3} sx={2}
            // sx={{
            //   width: "180px !important"
            //  }}
          >
            <Box
              sx={{
                background: "#b0aea3",
                width: "180px",
                padding: "10px"
              }}
            >
              <div className="image_field">
                <img src={item.url} className="img" />
              </div>
              <div className='item_title'>
                {item.title}
              </div>
              <div className='item_text'>
                {item.text}
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid 
        container 
        spacing={2}
        sx={{
          marginTop: "20px",
        }}
      >
        {
          items1.map((item, i)=>(
          <Grid md={2} sm={3} sx={2}
        //   sx={{
        //  width: "180px !important"
        //   }}
          >
            <Box
              sx={{
                background: "#b0aea3",
                width: "180px",
                padding: "10px"
              }}
            >
              <div className="image_field">
                <img src={item.url} className="img" />
              </div>
              <div className='item_title'>
                {item.title}
              </div>
              <div className='item_text'>
                {item.text}
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Products