import { Box, Grid, } from '@mui/material';

const items = [
  { text: "sdfs1", url: "/images/cartegory/menu2.png" },
  { text: "sdfs1", url: "/images/cartegory/menu2.png" },
  { text: "sdfs1", url: "/images/cartegory/menu2.png" },
  { text: "sdfs1", url: "/images/cartegory/menu2.png" },
  { text: "sdfs1", url: "/images/cartegory/menu2.png" },
  { text: "sdfs1", url: "/images/cartegory/menu2.png" },
  { text: "sdfs1", url: "/images/cartegory/menu2.png" },
  { text: "sdfs1", url: "/images/cartegory/menu2.png" },
  { text: "sdfs1", url: "/images/cartegory/menu2.png" },
  { text: "sdfs1", url: "/images/cartegory/menu2.png" },
  { text: "sdfs1", url: "/images/cartegory/menu2.png" },
  { text: "sdfs1", url: "/images/cartegory/menu2.png" },
]

const Top2 = () => {
  return (
    <div className="top2">
      <Box>
        <div className='title'>
          Frequestly purcharged product
        </div>
        <Grid container spacing={2}>
          {
            items.map((item, i)=> (
              <Grid item md={1} sm={2} sx={3} key={i}>
                <div className="text">
                  {item.text}
                </div>
                <img src={item.url} className="image" />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </div>
  )
}

export default Top2