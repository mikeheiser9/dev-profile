import React, { Component } from "react";
import Particles from 'react-particles-js';
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar, Card, CardTitle} from "react-materialize";
import "../Dev/Dev.css";


class Dev extends Component{
  
    render(){
        return (
            <div className={"devContainer"}>
            <Row>
                <div className={"service-col"}>
                <Col s={12} m={4}>
                <Card header={<CardTitle reveal image={"../../../images/database.jpg"} waves='light'/>}
                title="Web Development"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                <p><a href="#">Learn More</a></p>
                </Card>
                </Col>
                <Col s={12} m={4}>
                <Card header={<CardTitle reveal image={'../../../images/applepay.jpg'} waves='light'/>}
                title="E-Commerce Store Development"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                <p><a href="#">Learn More</a></p>
                </Card>
                </Col>
                <Col s={12} m={4}>
                <Card header={<CardTitle reveal image={"../../../images/analytics.jpg"} waves='light'/>}
                title="Media Buying/Digital Marketing"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                <p><a href="#">Learn More</a></p>
                </Card>
                </Col>
                </div>
            </Row>
            </div>
        );
    };
}

export default Dev;