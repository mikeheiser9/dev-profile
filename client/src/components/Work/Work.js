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
                <img src={'../../../images/baddlabs.gif'} alt={"baddlabs-gif"} className={"gif-img"} />
                </Col>
                <Col s={12} m={12} l={6} xl={6} className={"gif-img-cont"}>
                <img src={'../../../images/hrf.gif'} alt={"hrf-gif"} className={"gif-img"} />
                </Col>  
            </Row>
            <Row className={"gif-container-bot"}>
                <Col s={12} m={12} l={6} xl={6} className={"gif-img-cont"}>
                <img src={'../../../images/dive.gif'} alt={"dive-gif"}className={"gif-img"} />
                </Col>
                <Col s={12} m={12} l={6} xl={6} className={"gif-img-cont"}>
                <img src={'../../../images/squadup.gif'} alt={"squad-gif"} className={"gif-img"} />
                </Col>  
            </Row>
            </div>

        );
    };
}

export default Work;