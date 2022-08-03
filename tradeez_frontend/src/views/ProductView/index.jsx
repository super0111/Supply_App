import { Avatar, Card, Col, Row, List } from 'antd'
import React, { useRef } from 'react'
import RightOutlined from '@ant-design/icons/RightOutlined';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.scss'
let productData = [
    {
        image: require('../../assests/images/ProductsImg/p1.png'),
        title: "Square GI Pipe",
        description: "metal & alloy"
    },
    {
        image: require('../../assests/images/ProductsImg/p2.png'),
        title: "Circular GI Pipe",
        description: "metal & alloy"
    },
    {
        image: require('../../assests/images/ProductsImg/p3.png'),
        title: "Rectangular GI Pipe",
        description: "metal & alloy"
    },
    {
        image: require('../../assests/images/ProductsImg/p4.png'),
        title: "Square Pipe",
        description: "metal & alloy"
    },
    {
        image: require('../../assests/images/ProductsImg/p5.png'),
        title: "Round Pipe",
        description: "metal & alloy"
    },
    {
        image: require('../../assests/images/ProductsImg/p6.png'),
        title: "Square Bars",
        description: "metal & alloy"
    },
    {
        image: require('../../assests/images/ProductsImg/p7.png'),
        title: "Round Bars",
        description: "metal & alloy"
    },
    {
        image: require('../../assests/images/ProductsImg/p1.png'),
        title: "Circular GI Pipe",
        description: "metal & alloy"
    },
    {
        image: require('../../assests/images/ProductsImg/p2.png'),
        title: "Rectangular GI Pipe",
        description: "metal & alloy"
    },
    {
        image: require('../../assests/images/ProductsImg/p3.png'),
        title: "Square Pipe",
        description: "metal & alloy"
    },
    {
        image: require('../../assests/images/ProductsImg/p4.png'),
        title: "Round Pipe",
        description: "metal & alloy"
    },
    {
        image: require('../../assests/images/ProductsImg/p5.png'),
        title: "Square Bars",
        description: "metal & alloy"
    },
]
let CategoryData = [
    {
        title: "cement",
        img: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        title: "Steel",
        img: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        title: "window& doors",
        img: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        title: "chemiclas",
        img: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        title: "tilling",
        img: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        title: "plumbing ",
        img: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        title: "electricals",
        img: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        title: "mics",
        img: "https://randomuser.me/api/portraits/men/85.jpg"
    }
]
let sliderData = [
    {
        image: require('../../assests/images/ProductsImg/R2.png'),
        name: "TMT tuber"
    },
    {
        image: require('../../assests/images/ProductsImg/R3.png'),
        name: "TMT tuber"
    },
    {
        image: require('../../assests/images/ProductsImg/R4.png'),
        name: "TMT tuber"
    },
    {
        image: require('../../assests/images/ProductsImg/R5.png'),
        name: "TMT tuber"
    },
    {
        image: require('../../assests/images/ProductsImg/R6.png'),
        name: "TMT tuber"
    },
    {
        image: require('../../assests/images/ProductsImg/R7.png'),
        name: "TMT tuber"
    },
    {
        image: require('../../assests/images/ProductsImg/R8.png'),
        name: "TMT tuber"
    },
    {
        image: require('../../assests/images/ProductsImg/R9.png'),
        name: "TMT tuber"
    },
    {
        image: require('../../assests/images/ProductsImg/R10.png'),
        name: "TMT tuber"
    },
    {
        image: require('../../assests/images/ProductsImg/R12.png'),
        name: "TMT tuber"
    },
    {
        image: require('../../assests/images/ProductsImg/R13.png'),
        name: "TMT tuber"
    },
    {
        image: require('../../assests/images/ProductsImg/R14.png'),
        name: "TMT tuber"
    },
]
const ProductCard = ({ image, title, description }) => {
    return <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{ span: 4 }} lg={{ span: 6 }} >
        <div className="productCartContainer" >
            <div className="main1" >
                <img src={image} />
            </div>
            <div className="main2" >
                <div className="mainchild1"  >{title}</div>
                <div className="mainchild2" >{description}</div>
            </div>
        </div>
    </Col>
}



const Screen2 = () => {
    let ref = useRef()
    return <div className="proctScreenContainer" >
        <Row gutter={[16, 16]} style={{ marginTop: 20 }} className="container1">
            <Col className="container1_col1" xs={{ span: 24 }} md={{ span: 6 }}  xl={{ span: 4 }} lg={{ span: 5 }} >
                <span className="container1_col1_title" >
                    categories
                </span>
                {productData.map((d) => {
                    return <div className="innerContainer" >
                        <Avatar src={d.img} />
                        <div className="innerContainermain">
                            <p className="innerContainermainTitle" >{d.title}</p  >
                        </div>
                    </div>
                })}
                <div className="showMoreMainContiner" >
                    <p className="showMoreMainContinerTtile" >Show More </p>
                    <span style={{ paddingRight: 18 }}><RightOutlined /></span>
                </div>
            </Col>

            <Col xs={{ span: 24 }} md={{ span: 18 }} xl={{ span: 20 }} lg={{ span: 19 }} style={{ width: "100%" }} className="container1_col2">
                <div className="main">
                </div>
            </Col>
        </Row>

        <div className="sliderMain">
            <span className="sliderTtile">
                Frequently purchased Product
            </span>
            <div className="ProductSlider1" >
                <div className="slidercontainer"  >
                    <Carousel
                        ref={ref}
                        additionalTransfrom={0}
                        arrows={false}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-padding-bottom"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite={false}
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
                                    min: 1024
                                },
                                items: 9,
                                partialVisibilityGutter: 50
                            },
                            mobile: {
                                breakpoint: {
                                    max: 600,
                                    min: 0
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 600
                                },
                                items: 4,
                                partialVisibilityGutter: 30
                            }
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
                        {sliderData.map((d) => {
                            return <div className="rightArrowDesign1">
                                <div className="imagecontainer">
                                    <img src={d.image} />
                                </div>
                                <p className="textContainer" >{d.name}</p>
                            </div>
                        })}
                    </Carousel>
                </div>
                <div className="rightArrowDesign" >
                    <div className="imagecontainer" onClick={() => ref?.current?.next()} >
                        <div className="imagecontainerMain" >
                            <img src={require('../../assests/images/ProductsImg/rightIcon.png')} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
        <div className="productmainConatiner">
            <span className="productTitle"  >
                Products
            </span >
            <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
                {productData.map((d) => {
                    return <ProductCard {...d} />
                })}
            </Row>
        </div>
    </div >
}

export default Screen2