import React, { useRef } from 'react'
import Carousel from 'react-multi-carousel';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

import 'react-multi-carousel/lib/styles.css';
export const SliderCom = () => {
    let ref = useRef()
    console.log("ref", ref)
    return <div style={{ width: "100%", display: "flex" }}>
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
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
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

                <div style={{ width: 100, height: 100, marginRight: 150 }}>
                    <img src={require('../../assests/images/ProductsImg/p15.png')} />
                </div>
                <div style={{ width: 100, height: 100, marginRight: 150 }}>
                    <img src={require('../../assests/images/ProductsImg/p15.png')} />
                </div>
                <div style={{ width: 100, height: 100, marginRight: 150 }}>
                    <img src={require('../../assests/images/ProductsImg/p15.png')} />
                </div>
                <div style={{ width: 100, height: 100, marginRight: 150 }}>
                    <img src={require('../../assests/images/ProductsImg/p15.png')} />
                </div>
                <div style={{ width: 100, height: 100, marginRight: 150 }}>
                    <img src={require('../../assests/images/ProductsImg/p15.png')} />
                </div>
                <div style={{ width: 100, height: 100, marginRight: 150 }}>
                    <img src={require('../../assests/images/ProductsImg/p15.png')} />
                </div>
                <div style={{ width: 100, height: 100, marginRight: 150 }}>
                    <img src={require('../../assests/images/ProductsImg/p15.png')} />
                </div>
                <div style={{ width: 100, height: 100, marginRight: 150 }}>
                    <img src={require('../../assests/images/ProductsImg/p15.png')} />
                </div>
                <div style={{ width: 100, height: 100, marginRight: 150 }}>
                    <img src={require('../../assests/images/ProductsImg/p15.png')} />
                </div>
                <div style={{ width: 100, height: 100, marginRight: 150 }}>
                    <img src={require('../../assests/images/ProductsImg/p15.png')} />
                </div>
                <div style={{ width: 100, height: 100, marginRight: 150 }}>
                    <img src={require('../../assests/images/ProductsImg/p15.png')} />
                </div>
                <div style={{ width: 100, height: 100, marginRight: 150 }}>
                    <img src={require('../../assests/images/ProductsImg/p15.png')} />
                </div>
            </Carousel>
        </div>
        <div style={{ paddingTop: 24, width: "20%" }} >
            <div style={{ width: 100, height: 100 }} onClick={() => ref?.current?.next()}>
                <img src={require('../../assests/images/ProductsImg/p16.png')} />
            </div>
        </div>
    </div>

}