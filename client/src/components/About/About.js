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
       <div className="aboutRow">
    <Row>
        <Col s={6}>
        <div className={'img-container'}>
         <img src={'../../../images/me.jpg'} alt={"mike-heiser-img"} className="meImg responsive-img" />
          </div>
        </Col>
        <Col s={6}>
          <div className={'textContainer'}>
            <p id={'aboutMe'}>ABOUT ME</p>
            <p id={'textBody'}>
            My name is Mike Heiser and I am a full-stack developer living in downtown LA. I enjoy creating dynamic web applications and expressing myself creativly through my projects. I have experience in both web development and e-commerce. I have worked on e-commerce platforms such as Shoify and Magento.  I also have experience with Wordpress. If you like my work would like to see more please feel free send me a <a>message</a></p>
          </div>
        </Col>
        
        {/* <Col s={6} m={6} l={6} id="textContainer">
        <p className="textBody flow-text">
        <span id="aboutMe">ABOUT ME</span>
        <br/>
        <br/>
        My name is Mike Heiser and I am a full-stack developer living in downtown LA. I enjoy creating dynamic web applications and expressing myself creativly through my projects. I have experience in both web development and e-commerce. I have worked on e-commerce platforms such as Shoify and Magento.  I also have experience with Wordpress. If you like my work would like to see more please feel free send me a <a>message</a></p>
        </Col> */}
     </Row>
     </div>
    );
    }
}

export default About;