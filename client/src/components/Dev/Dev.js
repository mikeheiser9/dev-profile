import React, { Component } from "react";
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar, Card, CardTitle} from "react-materialize";
import "../Dev/Dev.css";


class Dev extends Component{
  
    render(){
        return (
            <div className={"devContainer"}>
            <Row  className={"servTop"}>
                <Col s={12} m={12} l={12} xl={12}>
                    <p className={"servTopText"}>OTHER SERVICES.</p>  
                </Col>
            </Row>
            <Row  className={"servWrap"}>
                <Col s={12} m={4} l={4} xl={4} className={"icon-row border-right"} id={"num1"}>
                    <span className={"material-icons icon-top"}>local_offer</span>
                        <p className={"inner-text"}>E-Commerce</p>
                        <p className={"inner-sub-text"}>I want to help you get the most out of your e-commerce store. I will provide a comprehensive audit of your online store or business and implement a plan with actionable solutions that will boost your online presence and increase revenue.</p>
                        <p className={"inner-sub-head"}>Platforms:</p>
                        <p  className={"inner-sub-2"}>Shopify, Woo, Stripe, Magento, More</p>
                        <p className={"inner-sub-head2"}>More Services:</p>
                        <p className={"line1"}>Product Management</p>
                        <p className={"line2"}>Inventory Management Systems</p>
                        <p className={"line3"}>UI/UX Optimization</p>
                        <p className={"line4"}>Online Visabilty</p>
                        <p className={"line5"}>Copy Writing</p>
                        
                </Col> 
                <Col s={12} m={4} l={4} xl={4} className={"icon-row border-right"} id={"num2"}>
                    <span className={"material-icons icon-top"}>desktop_mac</span>
                    <p className={"inner-text"}>Full-Stack Web Development</p>
                    <p className={"inner-sub-text"}>I build fully responsive web apps designed specifically to hook your ideal customer/user, keep them engaged, and wanting to learn more about your brand. From simple websites to complex applications, I will work diligently to exceed expectations.</p>
                    <p className={"inner-sub-head"}>Languages</p>
                    <p className={"inner-sub-2"}>JavaScript, React, Node, MySql, MongoDB</p>
                    <p className={"inner-sub-head2"}>Dev Tools:</p>
                    <p className={"line1"}>AWS</p>
                    <p className={"line2"}>REST API</p>
                    <p className={"line3"}>JQuery</p>
                    <p className={"line4"}>MySql</p>
                    <p className={"line5"}>More</p>

                </Col>
                <Col s={12} m={4} l={4} xl={4} className={"icon-row"} id={"num3"}>
                    <span className={"material-icons icon-top"}>share</span>
                    <p className={"inner-text"}>Digital Marketing and Strategy</p>
                    <p className={"inner-sub-text"}>Having a strong online presence isn't just about having a beautiful website. It's about making sure you are being seen by high intent potential customers. I will help you reach and engage your customers wherever they are online.</p>
                    <p className={"inner-sub-head"}>Tools Used:</p>
                    <p className={"inner-sub-2"}>Google Ad Platform, FB Ad Manager, Taboola, HotJar, etc.</p>
                    <p className={"inner-sub-head2"}>
                    Services Provided:</p>
                    <p className={"line1"}>Media Buying</p>
                    <p className={"line2"}>Affiliate Management</p>
                    <p className={"line3"}>Email Marketing</p>
                    <p className={"line4"}>Retargeting</p>
                    <p className={"line5"}>More</p>
                </Col>
            </Row>
            </div>
        );
    };
}

export default Dev;