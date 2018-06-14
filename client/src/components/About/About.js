import React, { Component } from "react";
import "../About/About.css";
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar} from "react-materialize"
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


class About extends Component {


    render() {
     return (
    <Row className="aboutRow">
        <Col s={6}>
        <img src={'../../../images/me.jpg'} alt={"mike-heiser-img"} className="meImg" />
        </Col>
        <Col s={6} id="textContainer">
        <p className="textBody">
        <span id="aboutMe">ABOUT ME</span>
        <br/>
        <br/>
        My name is Mike Heiser and I am a full-stack developer living in downtown LA. I enjoy creating dynamic web applications and expressing myself creativly through my projects. I have experience in both web development and e-commerce. I have worked on e-commerce platforms such as Shoify and Magento.  I also have experience with Wordpress. If you like my work would like to see more please feel free to check out my <a>GitHub</a></p>
        </Col>
     </Row>
    );
    }
}


export default About;