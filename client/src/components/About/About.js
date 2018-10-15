import React, { Component } from "react";
import "../About/About.css";
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar} from "react-materialize"
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

class About extends Component {


    render() {
     return (
       <div className="aboutRow" id={'about'}>
    <Row>
        <Col s={12} m={6}>
        <div className={'imgContainer'} >
         <img src={'../../../images/me.jpg'} alt={"mike-heiser-img"} className="meImg responsive-img" />
          </div>
        </Col>
        <Col s={12} m={6}>
          <div className={'textContainer'}>
            <p id={'textBody'}>
            My name is Mike Heiser and I am a full-stack web developer and digital marketing expert living in downtown LA. It is my goal to maximize your business' potential in the digital space.  Whether you need a new website or e-commerce store, small to large UI/UX changes, or want to market new or existing products to customers online, I am here to help your business GROW. To find out more about how I can help please contact me <a href={"#contact"}>below</a>.</p>
          </div>
        </Col>
     </Row>
     </div>
    );
    }
}

export default About;