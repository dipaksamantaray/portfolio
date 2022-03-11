import React from "react";

import {Container,Row,Col} from "reactstrap";
import { BiCode,BiLandscape } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { BsBraces,BsSearch} from "react-icons/bs";
import { FaQrcode } from "react-icons/fa";
import { RiGalleryLine} from "react-icons/ri";

import "./Services.css";




const servicesData = [
    {
        icon:"ri-code-line",
        title:"webDesign",
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    },

{
        icon:"ri-code-s-slash-line",
        title:"Webdevelopment",
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
    },

    

    {
        icon:"ri-qr-code-line",
        title:"AppDevelopment",
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
    },

    {
        icon:"ri-search-line",
        title:"SEO",
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
    },

    {
        icon:"ri-landscape-line",
        title:"Graphics Design",
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
    },

    {
        icon:"ri-gallery-fill",
        title:"Ui/UX",
        desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
    },
]

const Services = ()=>{
    return(
       <section id="services">
          <Container>

                   <Row>

                   <Col lg="12" className="services_top mb-5">
                    <h6>Features</h6>
                    <h2> What Services provide</h2>
                      </Col>
                      {
                        servicesData.map((item,index)=><Col lg="4" md="6" sm="6" key={index} className="mb-4">
                    
                        <div className="single_service">
    
                           <span className="service_icon">
                              
                           <i class={item.icon}></i>
                           
                           
                               
                               </span>
                               <h2>{item.title}</h2>
                               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, It has survived not only five centuries, </p>
                                        
                            </div>                   
                        
                        </Col>)
                    }
                
                      </Row>

              </Container>

           </section>
    );
};

export default Services;