import React from "react"

import "./Footer.css";
import {Container} from "reactstrap";

const Footer=()=>{
    return(
<div>
    <footer className="pb-4">
        <Container className="text_center footer">
            <p>Copyright 2022, Developed by Dipak. All Rights Resevered</p>
            </Container>
        </footer>
    </div>
    );
};

export default Footer;