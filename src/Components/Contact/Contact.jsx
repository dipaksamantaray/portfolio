import React from "react";

import "./Contact.css"
import {Container,Row,Col} from "reactstrap";

import Form from "../Form/Form"



const Contact =()=>{
    return(
        <section id="contact">
            <Container>
                <Row>
                    <Col lg="12" className="mb-5"> 
                        <h2>Get in Touch</h2>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="contact_info-container">
                               <div className="single_info-box">
                                 <h6>Adress</h6>
                                 <p>Odisha,Asian Country</p>
                               </div>
                            
                               <div className="single_info-box">
                                 <h6>Phone</h6>
                                 <p>+91 123455 67 788</p>
                               </div>
                              </div> 


                             
                     
                      
                        <div className="contact_info-container">
                               <div className="single_info-box">
                                 <h6>Email</h6>
                                 <p>dffh@gmail.com</p>
                               </div>
                            
                               <div className="single_info-box">
                                 <h6>Location</h6>
                                 <p>bhubaneswar </p>
                               </div>

                            </div>
                            </Col>

                        <Col lg="6" md="6">
                             <Form/>
                          </Col>
                    </Row>
                </Container>
            </section>

    );
};

export default Contact;