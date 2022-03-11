import react from "react";
import "./Experience.css";
import {Container,Row,Col} from "reactstrap"


const developmentExperincedata = [
    {
        year:"2020 - 2021",
        title:"Sr. frontend Developer",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },


    {
        year:"2019 - 2019",
        title:"Sr. Backend Developer",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },


    {
        year:"2019 - 2021",
        title:"Sr. frontend Developer",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },




    
]
const Experience = ()=>{
    return(
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                <h2>Experience</h2>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="single_experience-container">

                            {
                             
                             developmentExperincedata.map((item,index)=>
                             <div className="single_experience" key ={index}>
                             <span className="experience_icon"><i class="ri-briefcase-line"></i></span>
                             <h6>{item.year}</h6>
                             <h5> {item.title} </h5>
                             <p>{item.desc}</p>
                             </div>)

                            }
                            
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                        <div className="single_experience-container">

                            {
                             
                             developmentExperincedata.map((item,index)=>
                             <div className="single_experience" key ={index}>
                             <span className="experience_icon"><i class="ri-briefcase-line"></i></span>
                             <h6>{item.year}</h6>
                             <h5> {item.title} </h5>
                             <p>{item.desc}</p>
                             </div>)

                            }
                            
                            </div>
                        </Col>


                    </Row>
                </Container> 
            </section>
    );
};
export default Experience;