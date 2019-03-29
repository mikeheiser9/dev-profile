import React, { Component } from "react";
import "../Foot/Foot.css";
import {Dropdown, Button, NavItem, Modal, Col, Row, Footer} from "react-materialize"
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


class Foot extends Component {

    componentDidMount() {
        document.getElementsByClassName('footer-copyright')[0].innerHTML="<div class='copy-container'><p class='material-icons c-right'>copyright <p class='copyright-text'>Michael Heiser</p></div>";
      }


    render() {
     return (
        <div className={"footer-container"}>
        <Footer>
            <Row className={'foot-row'}>
            <a href={"https://www.linkedin.com/in/michael-heiser-media-buyer-web-dev/"} target={"_blank"} rel={"noopener noreferrer"} className={'atag-cont'}>
            <img src={"../../../images/linkedin.png"} className={"foot-icons"}/>
            <p className={'icon-txt'}>My Linkedin</p>
            </a>
            </Row>
            <Row className={'foot-row'}>
            <a href={"mailto:mikeheiser9@gmail.com"} target={"_blank"} rel={"noopener noreferrer"} className={'atag-cont'}>
            <img src={"../../../images/mail.png"} className={"foot-icons"} />
            <p className={'icon-txt'}>Email Me</p>
            </a>        
            </Row>
            <Row className={'foot-row'}>
            <a href={"https://bdl.media"} target={"_blank"} rel={"noopener noreferrer"} className={'atag-cont'}>
            <img src={"../../../images/enterprise.png"} className={"foot-icons"} />
            <p className={'icon-txt'}>My company</p>
            </a>        
            </Row>
        </Footer>
        </div>
    );
    }
}


export default Foot;