import { Avatar, Card, Col, Row, List, Button, Form, Input, DatePicker } from 'antd'
import React, { useState, useRef } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.scss'
let productData = [
    {
        image: require('../../assests/images/ProductsImg/p10.png'),
        title: "Square GI Pipe",
        details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)"
    },
    {
        image: require('../../assests/images/ProductsImg/p11.png'),
        title: "Circular GI Pipe",
        details: "Dr. Fixit 302 SBR Latex Super Latex SBR Latex For Waterproofing & Repairs (Grey) (1Pc) Crack Filler  (1 kg)"
    },
    {
        image: require('../../assests/images/ProductsImg/p12.png'),
        title: "Rectangular GI Pipe",
        details: "Dr. Fixit SURESEAL Crack Filler  (2 kg)"
    },
    {
        image: require('../../assests/images/ProductsImg/p14.png'),
        title: "Square Pipe",
        details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)"
    },
    {
        image: require('../../assests/images/ProductsImg/p14.png'),
        title: "Round Pipe",
        details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)"
    },
    {
        image: require('../../assests/images/ProductsImg/p14.png'),
        title: "Round Pipe",
        details: "Dr. Fixit 604 Primeseal acrylic coating For External Wall Waterproofing Crack Filler  (1 L)"
    },

]

const sliderData = [
    { image: require('../../assests/images/ProductsImg/p15.png') },
    { image: require('../../assests/images/ProductsImg/p15.png') },
    { image: require('../../assests/images/ProductsImg/p15.png') },
    { image: require('../../assests/images/ProductsImg/p15.png') },
    { image: require('../../assests/images/ProductsImg/p15.png') },
    { image: require('../../assests/images/ProductsImg/p15.png') },
    { image: require('../../assests/images/ProductsImg/p15.png') },
    { image: require('../../assests/images/ProductsImg/p15.png') },
    { image: require('../../assests/images/ProductsImg/p15.png') },
    { image: require('../../assests/images/ProductsImg/p15.png') },
    { image: require('../../assests/images/ProductsImg/p15.png') },
    { image: require('../../assests/images/ProductsImg/p15.png') },
    { image: require('../../assests/images/ProductsImg/p15.png') },
]

const ProductCard = ({ image, title, details, index }) => {
    // return <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 4 }} className="boughtTogetherGridTitleGrid">
    return <div className="boughtTogetherGridTitleGridMainConatiner"  >
        <div className="imageConatiner" >
            <img src={image} />
        </div>
        <div className="TitleDescriptionConatiner">
            <div className="Ttile" >{title}</div>
            <div className="description">{details}</div>
        </div>

        {index === 4 ?
            <div className="buttonContainer" >
                <Button className="addToQuote1">Add To Quote</Button>
                <Button className="quickQuote"   >Quick quote</Button>
            </div> :
            <div className="buttonContainer" >
                <Button className="addToQuote"  >Add To Quote</Button>
            </div>
        }
    </div>
    // </Col>
}



const ProductView = () => {
    const [card, setCard] = useState(false)
    const [form] = Form.useForm();
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
    };
    let ref = useRef()
    return <div className="PrductMainConatiner"  >
        <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
            <Col lg={{ span: 11 }} className="LeftSideBarmain" >
                <div className="LeftSideBarmaincontainer">
                    <img src={require('../../assests/images/ProductsImg/p13.png')} alt="" />
                </div>
                <div className="ProductSlider" >
                    <div style={{ paddingTop: 24, width: "80%" }} >
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
                                        min: 1024
                                    },
                                    items: 6,
                                    partialVisibilityGutter: 40
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0
                                    },
                                    items: 2,
                                    partialVisibilityGutter: 30
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464
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
                                return <div style={{ width: 100, height: 100, marginRight: 150 }}>
                                    <img src={d.image} />
                                </div>
                            })}

                        </Carousel>
                    </div>
                    <div className="rightArrowDesign" >
                        <div className="rightArrowDesignSquire" onClick={() => ref?.current?.next()}>
                            <div className="imagecontainerMain" >
                                <img src={require('../../assests/images/ProductsImg/rightIcon.png')} />
                            </div>
                        </div>
                    </div>
                </div>

            </Col>
            <Col className="rightSide" lg={{ span: 12, offset: 1 }} >
                <div>
                    <p className="rightSideTtile" >PPC Cement, 43 Grade, 25 kg</p>
                    <p className="rightSideDescription" >This grade of cement is used for plain concrete work and plastering works. It is suitable make concrete mix up to M30.</p>
                    <p className="rightSidesubDescripotion" >Cement is mainly used as a binder in concrete, which is a basic material for all types of construction, including housing, roads, schools, hospitals, dams and ports.</p>
                </div>
                {card ?
                    <div className="cartForm" >
                        <p className="cartFormTtile"  >Request Quote</p>

                        <Form
                            form={form}
                            layout="vertical"
                            onValuesChange={onRequiredTypeChange}
                        >
                            <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
                                <Col lg={{ span: 12 }} >
                                    <Form.Item className="formLabel" label="Quantity"  >
                                        <Input className="forminput" placeholder="Enter Quantity" />
                                    </Form.Item>
                                </Col>
                                <Col lg={{ span: 12 }} >
                                    <Form.Item label="Price target" className="formLabel" >
                                        <Input placeholder="Enter Price Target" className="forminput" />
                                    </Form.Item>
                                </Col>
                                <Col lg={{ span: 12 }} >
                                    <Form.Item label="DatePicker" className="formLabel" >
                                        <DatePicker placeholder="DD/MM/YYYY" className="dateInput" />
                                    </Form.Item>
                                </Col>
                                <Col lg={{ span: 12 }} >
                                    <Form.Item label="Delivery Frequency" className="formLabel" >
                                        <Input placeholder="Enter Delivery Frequency" className="forminput" />
                                    </Form.Item>
                                </Col>
                                <Col lg={{ span: 24 }} >
                                    <Form.Item label="Delivery Location" className="formLabel" style={{ marginBottom: 13 }} >
                                        <Input placeholder="Address.........." className="forminput" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item>
                                <Button type="primary" className="FormBtnQuote" >Quote</Button>
                            </Form.Item>
                        </Form>
                    </div>

                    :
                    <div>

                        <div style={{ marginTop: 20 }} onClick={() => setCard(true)}>
                            <Button size={"large"} className="BtnQuickQuote"  >Quick quote</Button>
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <Button size={"large"} className="BtnQuickQuote"  >Add To Cart</Button>
                        </div>
                    </div>}
                <div className="SpecificationForThisTeam">
                    <p className="SpecificationForThisTeamTtile" >Specifications for this item</p >
                    <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
                        <Col lg={{ span: 12 }} >
                            <Row gutter={[16, 16]}>
                                <Col className="CementGradeTitile title"   > Cement Grade: </Col>
                                <Col className="CementGradeDescription description" > 43 Grade </Col>
                                <Col className="packingSizeTitile title" md={{ span: 11 }} lg={{ span: 11 }} > Packaging Size:  </Col>
                                <Col className="packingSizeDescription description" md={{ span: 10, offset: 3 }} lg={{ span: 10, offset: 3 }} > 25 kg</Col>
                                <Col className="packingTypeTitle title" md={{ span: 12 }} lg={{ span: 12 }} > Packaging Type: </Col>
                                <Col className="packingTypeDescription description" md={{ span: 10, offset: 2 }} lg={{ span: 10, offset: 2 }} > paper Sack </Col>
                            </Row>
                        </Col>
                        <Col lg={{ span: 12 }} >
                            <Row gutter={[16, 16]}>
                                <Col className="FormFactorTtile title" lg={{ span: 10 }} > Form Factor: </Col>
                                <Col className="FormFactorDescription description" lg={{ span: 13, offset: 1 }} >Powder</Col>
                                <Col className="SuitableForTtile title" lg={{ span: 10 }} > Suitable For: </Col>
                                <Col className="SuitableForDescripton description" lg={{ span: 13, offset: 1 }} > Indoor, Outdoor</Col>
                                <Col className="UsedForTitile title" lg={{ span: 10 }} > Used For: </Col>
                                <Col className="UsedForTtile description" lg={{ span: 13, offset: 1 }} > All Purpose Cement</Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </Col >
        </Row >

        <div className="boughtTogetherGrid">
            <p className="boughtTogetherGridTitle" >
                Bought together
            </p >
            <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
                <div className="ProductSlider1" >
                    <div style={{ paddingTop: 24, width: "100%" }} >
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
                                        min: 1024
                                    },
                                    items: 6,
                                    partialVisibilityGutter: 40
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0
                                    },
                                    items: 2,
                                    partialVisibilityGutter: 30
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464
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
                            {productData.map((d, index) => {
                                return <ProductCard {...d} index={index} />
                            })}
                        </Carousel>
                    </div>
                </div>
            </Row>
        </div>
    </div >
}

export default ProductView