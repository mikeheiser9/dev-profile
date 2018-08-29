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
                <span className={"servicesHeader"} data-aos={"zoom-out-down"}>E-Commerce Development</span>
            </Col>
          </Row>
        <Row id={"ecomRow"}>
        <Col s={6}>
            <div className={"laptop-container"}>
                <img src={'../../../images/devprof.gif'} className={'laptopImg'} />
            </div>
            </Col>
            <Col s={6}>
            <img src={'../../../images/shopify.png'} className={"ecomImg"} />
            <img src={'../../../images/magento.png'} className={"ecomImg"} />
            <img src={'../../../images/WooCommerce.png'} className={"ecomImg"} />
            <img src={'../../../images/squarespace.png'}className={"ecomImg"} />
        </Col>
        </Row>
        </div>
        );
    };
}

export default Services;