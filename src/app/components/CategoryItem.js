"use client"
import { Container, Row, Col, NavLink } from "react-bootstrap"
import Image from 'next/image';
import { useRouter } from "next/navigation"
import Slider from 'react-slick';



export const CategoryItem = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:8,
        slidesToScroll: 1,
        initialSlide: 0,
    };




    return (
        <div>
            <section className="CategorySlider">
                <Container>
                    <Row>
                        <Col md={12}>
                        <div class="TopHeading__Section"><h2>Item Categories</h2></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} >

                            <Slider   {...settings}>


                                <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/topitem/c1.png" width={90} height={90} alt="Mobile Phone" /></div> 
                                    <h3>Mobile Phone</h3>
                                </div>

                                <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/topitem/c2.png" width={90} height={90} alt="Skincare" /></div> 
                                    <h3>Skincare</h3>
                                </div>   
                               
                                 <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/cat/cat1.png" width={90} height={90} alt="Outdoor" /></div> 
                                    <h3>Outdoor</h3>
                                </div>   
                               
                                 <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/cat/cat2.png" width={90} height={90} alt="Furniture" /></div> 
                                    <h3>Furniture</h3>
                                </div>  
                                
                                  <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/cat/cat3.png" width={90} height={90} alt="Jewelry" /></div> 
                                    <h3>Jewelry</h3>
                                </div>

                                <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/cat/cat4.png" width={90} height={90} alt="Huawei Mobile" /></div> 
                                    <h3>Mobile Phone</h3>
                                </div>

                                <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/cat/cat5.png" width={90} height={90} alt="Electronics" /></div> 
                                    <h3>Electronics</h3>
                                </div>   
                                <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/topitem/c1.png" width={90} height={90} alt="Mobile Phone" /></div> 
                                    <h3>Mobile Phone</h3>
                                </div>

                                <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/topitem/c2.png" width={90} height={90} alt="Skincare" /></div> 
                                    <h3>Skincare</h3>
                                </div>   
                               
                                 <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/cat/cat1.png" width={90} height={90} alt="Outdoor" /></div> 
                                    <h3>Outdoor</h3>
                                </div>   
                               
                                 <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/cat/cat2.png" width={90} height={90} alt="Furniture" /></div> 
                                    <h3>Furniture</h3>
                                </div>  
                                
                                  <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/cat/cat3.png" width={90} height={90} alt="Jewelry" /></div> 
                                    <h3>Jewelry</h3>
                                </div>

                                <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/cat/cat4.png" width={90} height={90} alt="Huawei Mobile" /></div> 
                                    <h3>Mobile Phone</h3>
                                </div>

                                <div className="categroyBox__circle">
                                   <div className="cricleBox"><Image src="/images/cat/cat5.png" width={90} height={90} alt="Electronics" /></div> 
                                    <h3>Electronics</h3>
                                </div> 


                            </Slider>






                        </Col>
                    </Row>


                </Container>

            </section>




        </div>
    )
}
