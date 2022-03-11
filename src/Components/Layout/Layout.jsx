
import React,{Fragment} from "react";
import Header from "../Header/Header";
import Hero from "../Herosection/Hero";
import About from "../About/About";
import Services from  "../services/Services";

import Experience from "../experience/Experience";

import Portfolio from "../Portfolio/Portfolio";
import Testimonial from "../testimonial/Testimonial"

import Contact from "../Contact/Contact";

import Footer from "../Footer/Footer";

const Layout=()=>{
    return(
       <Fragment>
         
            <Header/>
            <Hero/>
            <About/>
            <Services/> 
            <Experience/>
            <Portfolio/>
            <Testimonial/>
            <Contact/>
            <Footer/>
         </Fragment>
    );
};

export default Layout;