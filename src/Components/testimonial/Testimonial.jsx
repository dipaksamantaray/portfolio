import React from "react";
import "./Testimonial.css";
import {Container,Row,Col} from "reactstrap"
import Slider from "react-slick";

const Testimonial = ()=>{


const settings = {

    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:3000,
    swipeToSlide:true

};

    return(
        <section>
          <Container>
              <Row>
                  <Col lg="12">
                      <h2 className="test">What my Clients </h2>

                  </Col>
                  <Col lg="6" className="m-auto">
                    <Slider {...settings}>
                      <div>
                          <div className="single_testimonial">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                              <h6>Martin cooper</h6>
                              <p className="title">Web Developer</p>
                              </div>
                          </div>


                          <div>
                          <div className="single_testimonial">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                              </p>
                              <h6>Martin cooper</h6>
                              <p className="title">Web Developer</p>
                              </div>
                          </div>

                          <div>
                          <div className="single_testimonial">
                              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                              </p>
                              <h6>Martin cooper</h6>
                              <p className="title">Web Developer</p>
                              </div>
                          </div>




                        </Slider>
                      </Col>
                  </Row>
              </Container>
            </section>

    );
};
export default Testimonial;