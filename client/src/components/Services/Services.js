import React, { Component } from "react";
import Particles from 'react-particles-js';
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar} from "react-materialize"
import "../Services/Services.css";


class Services extends Component{
  
    render(){
        return (
            <div className={"servicesContainer"} id={"services"}>
            <Row>
            <Col s={12}>
                 <span className={"servicesHeader"}>E-Commerce Development</span>
             </Col>
             </Row>
             <Row>
                 <Col s={12} m={7}>
                 <div className={"laptop-container"}>
                     <img src={'../../../images/black-comp-cropped.gif'} className={'laptopImg'} />
                 </div>
                 </Col>
                 <Col s={12} m={5}>
                    <div className={'ecom-container'}>
                    <img src={'../../../images/shopify.png'} className={"ecomImg"} />
                    <img src={'../../../images/magento.png'} className={"ecomImg"} />
                    <img src={'../../../images/WooCommerce.png'} className={"ecomImg"} />
                    <img src={'../../../images/squarespace.png'}className={"ecomImg"} />
                    </div>
                 </Col>
             </Row>
           
            </div>

        );
    };
}

export default Services;