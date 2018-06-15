import React, { Component } from "react";
import Particles from 'react-particles-js';
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar} from "react-materialize"
import "../Services/Services.css";


class Services extends Component{
  
    render(){
        return (
        <div id={"servicesContainer"}>
          <Row>
            <Col s={12}>
                <span className={"servicesHeader"} data-aos={"zoom-out-down"}>Skills and Services</span>
            </Col>
          </Row>
        <Row id={"ecomRow"}>
        <Col s={6}>
             <span>Holder for Screen Video</span>
            </Col>
            <Col s={6}>
            <span className={"skillHead"}>E-Commerce Web Design</span>
             <ul className={"list"} data-aos={"zoom-out-left"}>
             <li className={"listItem"}>Registered Shopify Expert</li>
             <li className={"listItem"}>UI/UX Design</li>
             <li className={"listItem"}>Sales Consulting</li>
             <li className={"listItem"}>Magento</li>
             <li className={"listItem"}>Blah Blah Blah</li>
             </ul>
             </Col>
        </Row>
        <Row id={"webDevRow"}>
        <Col s={6}>
             <span>Holder for Screen Video</span>
            </Col>
            <Col s={6}>
            <span className={"skillHead"}>Full Stack Web Development</span>
             <ul className={"list"} data-aos={"zoom-out-left"}>
             <li className={"listItem"}>Registered Shopify Expert</li>
             <li className={"listItem"}>UI/UX Design</li>
             <li className={"listItem"}>Sales Consulting</li>
             <li className={"listItem"}>Magento</li>
             <li className={"listItem"}>Blah Blah Blah</li>
             </ul>
             </Col>
        </Row>
        </div>
        );
    };
}

export default Services;