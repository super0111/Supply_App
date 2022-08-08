import {
  Button,
} from "antd";
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
let productData = [
  {
    image: require("../../assests/images/ProductsImg/p10.png"),
    title: "Square GI Pipe",
    details:
      "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)",
  },
  {
    image: require("../../assests/images/ProductsImg/p11.png"),
    title: "Circular GI Pipe",
    details:
      "Dr. Fixit 302 SBR Latex Super Latex SBR Latex For Waterproofing & Repairs (Grey) (1Pc) Crack Filler  (1 kg)",
  },
  {
    image: require("../../assests/images/ProductsImg/p12.png"),
    title: "Rectangular GI Pipe",
    details: "Dr. Fixit SURESEAL Crack Filler  (2 kg)",
  },
  {
    image: require("../../assests/images/ProductsImg/p14.png"),
    title: "Square Pipe",
    details:
      "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)",
  },
  {
    image: require("../../assests/images/ProductsImg/p14.png"),
    title: "Round Pipe",
    details:
      "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)",
  },
  {
    image: require("../../assests/images/ProductsImg/p14.png"),
    title: "Round Pipe",
    details:
      "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)",
  },
];


const ProductCard = ({ image, title, details, index }) => {
  return (
    <div className="boughtTogetherGridTitleGridMainConatiner">
      <div className="imageConatiner">
        <img src={image} />
      </div>
      <div className="TitleDescriptionConatiner">
        <div className="Ttile">{title}</div>
        <div className="description">{details}</div>
      </div>

      {index === 4 ? (
        <div className="buttonContainer">
          <Button className="addToQuote1">Add To Quote</Button>
          <Button className="quickQuote">Quick quote</Button>
        </div>
      ) : (
        <div className="buttonContainer">
          <Button className="addToQuote">Add To Quote</Button>
        </div>
      )}
    </div>
  );
};

const ProductView = () => {
  let ref = useRef();
  return (
    <div className="PrductMainConatiner">
      <div className="boughtTogetherGrid">
        <div className="ProductSlider1">
          <div style={{  width: "100%" }}>
            <Carousel
              ref={ref}
              additionalTransfrom={0}
              arrows={true}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-padding-bottom"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={true}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 6,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 4,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {productData.map((d, index) => {
                return <ProductCard {...d} index={index} />;
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
