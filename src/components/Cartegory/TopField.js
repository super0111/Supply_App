import { Box, Grid, } from '@mui/material';

const items =[
  { text: "cartegory1", url: "/images/cartegory/" },
  { text: "cartegory1", url: "/images/cartegory/" },
  { text: "cartegory1", url: "/images/cartegory/" },
  { text: "cartegory1", url: "/images/cartegory/" },
  { text: "cartegory1", url: "/images/cartegory/" },
  { text: "cartegory1", url: "/images/cartegory/" },
  { text: "cartegory1", url: "/images/cartegory/" },
  { text: "cartegory1", url: "/images/cartegory/" },
]

const TopField = () => {
  return (
    <div className="topField">
      <Grid container spacing={2}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            width: "100%"
          }}
        > 
          <Grid 
            item xs={1}
            sx={{
              width: "200px"
            }}
          >
            <Box>
              <div className='header_title'>
                Cartegories
              </div>
              {
                items.map((item, i)=> (
                  <Box key={i} display="flex" justifyContent="space-between">
                    <img src="/images/cartegory/menu2.png" className="item_img" />
                    <div className='item_text'>
                      {item.text}
                    </div>
                  </Box>
                ))
              }
            </Box>
          </Grid>
          <Grid
            item md={10} sm={9} xs={8}
            sx={{
              backgroundColor: "black",
            }}
          >
            <div ></div>
          </Grid>
        </Box>
      </Grid>
    </div>
  )
}

export default TopField