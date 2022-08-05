import React from "react";
import { Button } from '@mui/material';
import Carousel from "react-img-carousel";
require("react-img-carousel/lib/carousel.css");

const items = [
  { url: "/images/details/1 (1).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (4).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (1).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (4).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (1).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (4).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
  { url: "/images/details/1 (5).png", title: "Dr.Fixit", details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)", btn: "Add To Quote" },
]

const BoughtTogether = () => {
  return (
    <div className="boughtTogether">
      <div className="title">
        Frequently Bought Together
      </div>
      {
        items.length && (
          <div className="aaa">
            <Carousel 
              viewportWidth="100%"
              cellPadding={ 0.1 }
              maxRenderedSlides={3}
              slideAlignment={'center'}
            >
              {items.map((item) => (
                <div className="item">
                  <div className="item_body">
                    <div className="img_field">
                      <img width="180px" height="190px" src={item.url} alt="image" />
                    </div>
                    <div className='body'>
                      <div className='title'>{item.title}</div>
                      <div className='text'>{item.details}</div>
                      <Button
                        variant="outlined"
                        sx={{
                          width: "140px",
                          fontSize: "13px",
                          margin: "auto",
                          margin: "5px 0 10px 0",
                          color: "#212738",
                          borderColor: "#212738"
                        }}
                      >
                          {item.btn}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        )
      }
    </div>
  );
}

export default BoughtTogether