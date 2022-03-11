import React,{useState} from "react";
import "./About.css"
import {Container,Row,Col} from "reactstrap";
import aboutImg from "../../assests/images/profilep.jpg";

import  Education from "./Education"

import Skills from "./Skills";

import Award from "./Award";


import {RiFacebookLine} from "react-icons/ri";
import {RiYoutubeLine} from "react-icons/ri";
import {RiGithubLine} from "react-icons/ri";
import {RiInstagramLine} from "react-icons/ri";
import {RiLinkedinBoxFill} from "react-icons/ri";

const About=()=>{
    const[aboutFilter,setAboutFilter] = useState("ABOUT")
    return(
       <section id="about">
           <Container>  
               <Row>
                  
                  <Col ig="4" md="3">
                  <Col ig="12" className="mb-5"><h2>About me</h2>{" "}
                   </Col>
                  <div className ="about_btns  d-flex flex-column align-items-center">
                      <button className={ ` about_btn ${aboutFilter === "ABOUT" ? "about_btn-active": ""}`}onClick={()=>setAboutFilter("ABOUT")}>About Me</button>
                      <button className={ ` about_btn ${aboutFilter === "EDUCATION" ? "about_btn-active": ""}`} onClick={()=>setAboutFilter("EDUCATION")}>Education</button>
                      <button className={ ` about_btn ${aboutFilter === "SKILLS" ? "about_btn-active": ""}`}onClick={()=>setAboutFilter("SKILLS")}>Skills</button>
                      <button className={ ` about_btn ${aboutFilter === "AWARD" ? "about_btn-active": ""}`}onClick={()=>setAboutFilter("AWARD")}>Award</button>
                      </div>
                      </Col>
                     
                  <Col ig="8" md="9">
                      {
                          aboutFilter === "ABOUT" && ( <div className="about_content-wraper d-flex gap-5">
                          <div className = "about_img w-25">
                              <img src={aboutImg} alt="" className="w-100"/> 
  
                             </div>
                             <div className="about_content w-75">
                                 <h2>I'm Dipak Samantaray</h2>
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
  
                                 <div className="Social_links">
                                     <h6 className = "mb-3">Connnect with me:</h6>
                                     <span><a href="#"><RiFacebookLine/></a></span>
                                     <span><a href="#"><RiYoutubeLine/></a></span>
                                     <span><a href="#"><RiGithubLine/></a></span>
                                     <span><a href="#"><RiInstagramLine/></a></span>
                                     <span><a href="#"><RiLinkedinBoxFill/></a></span>
  
  
                                     </div>
  
                                 </div>
                            </div>
                          )}
               
                      {
                          aboutFilter === "EDUCATION" && <Education/>
                          }
                      
                      {
                          aboutFilter === "SKILLS" && <Skills/>
                      }


                      {
                          aboutFilter === "AWARD" && <Award/>
                      }





                      
                      </Col>
                  
                   </Row>
               </Container>
               </section>
    );
};
export default About;