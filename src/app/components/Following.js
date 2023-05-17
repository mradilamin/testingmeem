"use client"
import { Container, Row, Col, NavLink } from "react-bootstrap"
import Image from 'next/image';
import { useRouter } from "next/navigation"
import Slider from 'react-slick';

export default function Following() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false,
        variableWidth: true,
    };


    return (
        <div className="productitemslide mbt-25">
            <Container >
                <Row>
                    <Col lg={12} className=" " >
                        <div className="TopHeading__Section">
                            <h2>Following Items</h2>
                        </div>


                        <div className="slider-top" >

                            <Slider   {...settings}>

                                <div className="product__box">
                                    <div className="product__boxitem">
                                        <Image src="/images/products/p2.png" width={270} height={232} alt="Huawei Mobile" />
                                        <h3>Motorola Mobile 5G</h3>
                                        <h5>San Antonio, CA</h5>
                                    </div>
                                </div>


                                <div className="product__box">
                                    <div className="product__boxitem">
                                        <Image src="/images/products/p2.png" width={270} height={232} alt="Huawei Mobile" />
                                        <h3>Motorola Mobile 5G</h3>
                                        <h5>San Antonio, CA</h5>
                                    </div>
                                </div>

                                <div className="product__box">
                                    <div className="product__boxitem">
                                        <Image src="/images/products/p3.png" width={270} height={232} alt="Huawei Mobile" />
                                        <h3>Motorola Mobile 5G</h3>
                                        <h5>San Antonio, CA</h5>
                                    </div>
                                </div>


                                <div className="product__box">
                                    <div className="product__boxitem">
                                        <Image src="/images/products/p4.png" width={270} height={232} alt="Huawei Mobile" />
                                        <h3>Motorola Mobile 5G</h3>
                                        <h5>San Antonio, CA</h5>
                                    </div>
                                </div>


                                <div className="product__box">
                                    <div className="product__boxitem">
                                        <Image src="/images/products/p5.png" width={270} height={232} alt="Huawei Mobile" />
                                        <h3>Motorola Mobile 5G</h3>
                                        <h5>San Antonio, CA</h5>
                                    </div>
                                </div>


                                <div className="product__box">
                                    <div className="product__boxitem">
                                        <Image src="/images/products/p6.png" width={270} height={232} alt="Huawei Mobile" />
                                        <h3>Motorola Mobile 5G</h3>
                                        <h5>San Antonio, CA</h5>
                                    </div>
                                </div>


                                <div className="product__box">
                                    <div className="product__boxitem">
                                        <Image src="/images/products/p7.png" width={270} height={232} alt="Huawei Mobile" />
                                        <h3>Motorola Mobile 5G</h3>
                                        <h5>San Antonio, CA</h5>
                                    </div>
                                </div>


                                <div className="product__box">
                                    <div className="product__boxitem">
                                        <Image src="/images/products/p8.png" width={270} height={232} alt="Huawei Mobile" />
                                        <h3>Motorola Mobile 5G</h3>
                                        <h5>San Antonio, CA</h5>
                                    </div>
                                </div>




                            </Slider>

                        </div>
                    </Col>
                </Row>


            </Container>





        </div>
    )
}
