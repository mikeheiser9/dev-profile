import React, { Component } from "react";
import "../About/About.css";
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar} from "react-materialize"
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

class About extends Component {

    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }

    render() {
     return (
       <div className="aboutRow" id={'about'}>
    <Row>
        <Col s={12} m={6}>
        <div className={'imgContainer'}>
         <img src={'../../../images/me.jpg'} alt={"mike-heiser-img"} className="meImg responsive-img" />
          </div>
        </Col>
        <Col s={12} m={6}>
          <div className={'textContainer'}>
            <p id={'aboutMe'}>ABOUT ME.</p>
            <p id={'textBody'}>
            My name is Mike Heiser and I am a full-stack web developer and digital marketing expert living in downtown LA. It is my goal to maximize your business' potential in the digital space.  Whether you need a new website or e-commerce store, small to large UI/UX changes, or want to market new or existing products to customers online, I am here to help your business GROW. To find out a little more about what I do and how I can help please feel free to browse my site and fill out the <a href={"#contact"}>contact sheet</a> below, or email me directly at <a href={"mailto:mikeheiser9@gmail.com"}>mikeheiser9@gmail.com</a>.</p>
          </div>
        </Col>
     </Row>
     </div>
    );
    }
}

export default About;