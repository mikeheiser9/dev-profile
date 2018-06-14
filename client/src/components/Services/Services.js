import React, { Component } from "react";
import Particles from 'react-particles-js';
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar} from "react-materialize"
import "../Services/Services.css";


class Services extends Component{
  
    render(){
        return (
        <Row id={"servicesContainer"}>
            <Col s={12}>
                <span className={"servicesHeader"}>Skills and Services</span>
            </Col>
        </Row>
        );
    };
}
export default Services;