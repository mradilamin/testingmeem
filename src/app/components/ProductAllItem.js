"use client"
import { Container, Row, Col, NavLink } from "react-bootstrap"
import Image from 'next/image';
import { useRouter } from "next/navigation"
import Slider from 'react-slick';

export default function ProductAllItem() {
  return (
    <div className="mgr-top-25">
            <Container >
                <Row>
                    <Col lg={12} className=" " >
                        <div className="TopHeading__Section">
                            <h2>All Items</h2>
                        </div>


                        <div className="slider-top" >
                             
                             
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
                                    <Image src="/images/products/p14.png" width={270} height={232} alt="Huawei Mobile" />
                                    <h3>Motorola Mobile 5G</h3>
                                    <h5>San Antonio, CA</h5>
                                </div>
                            </div>



                            <div className="product__box"> 
                                <div className="product__boxitem">
                                    <Image src="/images/products/p9.png" width={270} height={232} alt="Huawei Mobile asd" />
                                    <h3>Motorola Mobile 5G</h3>
                                    <h5>San Antonio, CA</h5>
                                </div>
                            </div>


                            <div className="product__box"> 
                                <div className="product__boxitem">
                                    <Image src="/images/products/p13.png" width={270} height={232} alt="Huawei Mobile" />
                                    <h3>Motorola Mobile 5G</h3>
                                    <h5>San Antonio, CA</h5>
                                </div>
                            </div>


                            <div className="product__box"> 
                                <div className="product__boxitem">
                                    <Image src="/images/products/p11.png" width={270} height={232} alt="Huawei Mobile" />
                                    <h3>Motorola Mobile 5G</h3>
                                    <h5>San Antonio, CA</h5>
                                </div>
                            </div>

                            <div className="product__box"> 
                                <div className="product__boxitem">
                                    <Image src="/images/products/p12.png" width={270} height={232} alt="Huawei Mobile" />
                                    <h3>Motorola Mobile 5G</h3>
                                    <h5>San Antonio, CA</h5>
                                </div>
                            </div>

 
                            <div class="load__more">
                                    <NavLink className="button__Graybg">Load More</NavLink>
                            </div>
 

                        </div>
                    </Col>
                </Row>


            </Container>





        </div>
  )
}
