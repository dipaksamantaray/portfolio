import React from "react";

import "./Portfolio.css";
import {Container,Row,Col} from "reactstrap";
import img01 from "../../assests/images/landing.jpg"
import img02 from "../../assests/images/a1.jpg"
import img03 from "../../assests/images/a1.jpg"
import img04 from "../../assests/images/a1.jpg"



const portFolioData = [
    {
        imgUrl:img01,
        title:"React Landin Page",
        url:"#",
    },

    {
        imgUrl:img02,
        title:"React Landin Page",
        url:"#",
    },

    {
        imgUrl:img03,
        title:"React Landing Page",
        url:"#",
    },
]

const Portfolio =()=>{
    return(
<section id="portfolio">

<Container>
    <Row>
        <Col lg="12" className="portfolio_top mb-5">
            <h6>Explore My Work and give a feedback</h6>
            <h2>PortFolio</h2>
        </Col>

        {
            portFolioData.map((item,index)=>(
            <Col lg="4" md="6" sm="6" key={index}>
            <div ClassName="portfolio_card">
            <div className='portfolio_img'>
             <img src={item.imgUrl} alt="" className="w-100"/>
                </div>
               <div className="portfolio_content">
               <h5>{item.title}</h5>
                <a href = {item.url}>View Live Demo</a>
                 </div>
                 
                </div>
             </Col>
            ))};
        
        </Row>
    </Container>

    </section>
    );
};

export default Portfolio;