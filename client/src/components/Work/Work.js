import React, { Component } from "react";
import Particles from 'react-particles-js';
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar} from "react-materialize"
import "../Work/Work.css";


class Work extends Component{
  
    render(){
        return (
            <div className={"workContainer"} id={"work"}>
            <Row>
                <p className="work-head">SOME RECENT WORK.</p>
            </Row>
            <Row className={"gif-container-top"}>
                <Col s={12} m={12} l={6} xl={6} className={"gif-img-cont"}>
                <p className={"work-title"}>BADD Labs</p>
                <a href={"https://baddlabs.com/"} target={"_blank"} rel={"noopener noreferrer"}><img src={'../../../images/baddlabs1.gif'} alt={"baddlabs-gif"} className={"gif-img"} /></a>
                </Col>
                <Col s={12} m={12} l={6} xl={6} className={"gif-img-cont"}>
                <p className={"work-title"}>The Harold Robinson Foundation</p>
                <a href={"https://haroldrobinsonfoundation.org/"} target={"_blank"} rel={"noopener noreferrer"}><img src={'../../../images/hrf1.gif'} alt={"hrf-gif"} className={"gif-img"} /></a>
                </Col>  
            </Row>
            <Row className={"gif-container-bot"}>
                <Col s={12} m={12} l={6} xl={6} className={"gif-img-cont"}>
                <p className={"work-title"}>Diving with the Stars</p>
                <a href={"http://www.divingwiththestars.com/"} target={"_blank"} rel={"noopener noreferrer"}><img src={'../../../images/dive1.gif'} alt={"dive-gif"}className={"gif-img"} /></a>
                </Col>
                <Col s={12} m={12} l={6} xl={6} className={"gif-img-cont"}>
                <p className={"work-title"}>SquadUp</p>
                <a href={"https://squadupv2.herokuapp.com/"} target={"_blank"} rel={"noopener noreferrer"}><img src={'../../../images/squadup1.gif'} alt={"squad-gif"} className={"gif-img"} /></a>
                </Col>  
            </Row>
            </div>
        );
    };
}

export default Work;