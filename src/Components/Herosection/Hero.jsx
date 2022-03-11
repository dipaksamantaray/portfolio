import React,{useRef,useEffect} from "react"
import "./Hero.css";
import {Container,Row,Col} from "reactstrap";

  import { init } from 'ityped'




import heroimg from "../../assests/images/profilep.jpg"
const Hero=()=>{
    
    const textRef=useRef();

    useEffect(()=>{
        init(textRef.current, {
            backDelay:1500,
            showCursor: true,
            strings: [
                'Dipak Samantaray',
                'A developer',
                'Content Creator',
                'An Actor'
                
              
            ]
        })
    },[])
        



    return(
       <section className="hero_section" id="home">
           <Container>
               <Row>
                   <Col className="col">
                       <div className="hero_content">
                           <p className="mb-3">Welcome to my World!</p>
                           
                         <h2 className="hero_title mb-4">I'm <span ref={textRef}></span></h2>
                         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>

                         <div className="mt-5 hero_btns">
                             <button className="btn hire_btn"><a href="#">Hireme</a></button>
                             <button className="btn">Contact</button>
                             </div>
                           </div>
                       </Col>

                   <Col lg='6' md='6'>
                       
                       <div className="hero_img">

                           <img src={heroimg} alt="" className="w-100"/>
                           </div>
                       
                       </Col>
                   </Row>
               </Container>
           </section>
    );
};
export default Hero;