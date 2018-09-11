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
            My name is Mike Heiser and I am a full-stack developer living in downtown LA. I enjoy creating dynamic web applications and expressing myself creativly through my projects. I have experience in both web development and e-commerce. I have worked on platforms such as Shoify, Magento, Wix, Squarespace and many others. If you like my work would like to see more please feel free send me a <a href={'#contact'}className={"contact-link"}>message</a></p>
          </div>
        </Col>
     </Row>
     </div>
    );
    }
}

export default About;