"use client"
import { Container, Row, Col, NavLink } from "react-bootstrap"
import Image from 'next/image';
import { useRouter } from "next/navigation"
import Slider from 'react-slick';





export const TopItem = () => {
    const router = useRouter();
    const gotoFeature = () => {
        //   router.push('/pages/featured')

    }

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
        <div className="topitem">
            <Container >
                <Row>
                    <Col lg={12} >
                            <div className="TopHeading__Section">
                                <h2>Top Items</h2>
                            </div>
 

                        <div className="slider-top" >
                            <Slider   {...settings}>


                                <div className="topitembox">
                                    <div className="featured__item__btn"><NavLink>Featured</NavLink></div>
                                    <div className="Topitem__box">
                                        <div className="productheading">
                                            <NavLink ><h3>Huawei Mobile  </h3></NavLink>
                                            <div className="Location">San Antonio, CA</div>
                                        </div>
                                        <div className="Product__Image">
                                            <Image src="/images/topitem/p1.png" width={146} height={180} alt="Huawei Mobile" />
                                        </div>
                                    </div>
                                </div>       
                                <div className="topitembox">
                                    <div className="featured__item__btn"><NavLink>Featured</NavLink></div>
                                    <div className="Topitem__box">
                                        <div className="productheading">
                                            <NavLink ><h3>Teenage Backpack</h3></NavLink>
                                            <div className="Location">San Antonio, CA</div>
                                        </div>
                                        <div className="Product__Image">
                                            <Image src="/images/topitem/p2.png" width={146} height={180} alt="Huawei Mobile" />
                                        </div>
                                    </div>
                                </div>       
                                <div className="topitembox">
                                    <div className="featured__item__btn"><NavLink>Featured</NavLink></div>
                                    <div className="Topitem__box">
                                        <div className="productheading">
                                            <NavLink ><h3>Arzum Mixer </h3></NavLink>
                                            <div className="Location">San Antonio, CA</div>
                                        </div>
                                        <div className="Product__Image">
                                            <Image src="/images/topitem/p3.png" width={146} height={180} alt="Huawei Mobile" />
                                        </div>
                                    </div>
                                </div>       
                                <div className="topitembox">
                                    <div className="featured__item__btn"><NavLink>Featured</NavLink></div>
                                    <div className="Topitem__box">
                                        <div className="productheading">
                                            <NavLink ><h3>Huawei Mobile  </h3></NavLink>
                                            <div className="Location">San Antonio, CA</div>
                                        </div>
                                        <div className="Product__Image">
                                            <Image src="/images/topitem/p1.png" width={146} height={180} alt="Huawei Mobile" />
                                        </div>
                                    </div>
                                </div>       
                                <div className="topitembox">
                                    <div className="featured__item__btn"><NavLink>Featured</NavLink></div>
                                    <div className="Topitem__box">
                                        <div className="productheading">
                                            <NavLink ><h3>Huawei Mobile  </h3></NavLink>
                                            <div className="Location">San Antonio, CA</div>
                                        </div>
                                        <div className="Product__Image">
                                            <Image src="/images/topitem/p1.png" width={146} height={180} alt="Huawei Mobile" />
                                        </div>
                                    </div>
                                </div>       
                                <div className="topitembox">
                                    <div className="featured__item__btn"><NavLink>Featured</NavLink></div>
                                    <div className="Topitem__box">
                                        <div className="productheading">
                                            <NavLink ><h3>Huawei Mobile  </h3></NavLink>
                                            <div className="Location">San Antonio, CA</div>
                                        </div>
                                        <div className="Product__Image">
                                            <Image src="/images/topitem/p2.png" width={146} height={180} alt="Huawei Mobile" />
                                        </div>
                                    </div>
                                </div>       
                                <div className="topitembox">
                                    <div className="featured__item__btn"><NavLink>Featured</NavLink></div>
                                    <div className="Topitem__box">
                                        <div className="productheading">
                                            <NavLink ><h3>Huawei Mobile  </h3></NavLink>
                                            <div className="Location">San Antonio, CA</div>
                                        </div>
                                        <div className="Product__Image">
                                            <Image src="/images/topitem/p3.png" width={146} height={180} alt="Huawei Mobile" />
                                        </div>
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
