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
                <p className={"work-title"}>Bespoke Design Labs</p>
                <a href={"https://bdl.media/"} target={"_blank"} rel={"noopener noreferrer"}><img src={'../../../images/baddlabs1.gif'} alt={"baddlabs-gif"} className={"gif-img"} /></a>
                <p className={"work-sub"}>JQuery, Bootstrap, MySQL, Express, and Sequelize</p>
                </Col>
                <Col s={12} m={12} l={6} xl={6} className={"gif-img-cont"}>
                <p className={"work-title"}>The Harold Robinson Foundation</p>
                <a href={"https://haroldrobinsonfoundation.org/"} target={"_blank"} rel={"noopener noreferrer"}><img src={'../../../images/hrf1.gif'} alt={"hrf-gif"} className={"gif-img"} /></a>
                <p className={"work-sub"}>Highly Customized WP Site With JavaScript Optimizations</p>
                </Col>  
            </Row>
            <Row className={"gif-container-bot"}>
                <Col s={12} m={12} l={6} xl={6} className={"gif-img-cont"}>
                <p className={"work-title"}>Daily Discounts</p>
                <a href={"https://dailydiscounts.org"} target={"_blank"} rel={"noopener noreferrer"}><img src={'../../../images/dd.gif'} alt={"dive-gif"}className={"gif-img"} /></a>
                <p className={"work-sub"}>WP Blog Site w/ Custom HTML/CSS and JS</p>
                </Col>
                <Col s={12} m={12} l={6} xl={6} className={"gif-img-cont"}>
                <p className={"work-title"}>I Own a Home</p>
                <a href={"https://iownahome.org"} target={"_blank"} rel={"noopener noreferrer"}><img src={'../../../images/iownahome.gif'} alt={"squad-gif"} className={"gif-img"} /></a>
                <p className={"work-sub"}>Blog, Custom JavaScript Widgets, MySql</p>
                </Col>  
            </Row>
            </div>
        );
    };
}

export default Work;