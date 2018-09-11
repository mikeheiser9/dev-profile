import React, { Component } from "react";
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar, Card, CardTitle} from "react-materialize";
import "../Dev/Dev.css";


class Dev extends Component{
  
    render(){
        return (
            <div className={"devContainer"}>
            <Row  className={"servTop"}>
                <Col s={12} m={12} l={12} xl={12}>
                    <p className={"servTopText"}>Other Services</p>  
                </Col>
            </Row>
            <Row  className={"servWrap"}>
                <Col s={12} m={4} l={4} xl={4} className={"icon-row border-right"}>
                    <span className={"material-icons icon-top"}>local_offer</span>
                        <p className={"inner-text"}>E-Commerce</p>
                        <p className={"inner-sub-text"}>I SPECIALIZE in building and optimizing e-commerce stores. I will provide a comprehensive audit of your online store or business and implement a plan with actionable solutions to boost your online presence and increase revenue.</p>
                        <p className={"inner-sub-head"}>Preferred Platforms:</p>
                        <p  className={"inner-sub-2"}>Shopify, Woo, Stripe, Magento, Custom</p>
                        <p className={"inner-sub-head2"}>More Services:</p>
                        <p className={"line1"}>Small Store Changes</p>
                        <p className={"line2"}>Inventory Management Systems</p>
                        <p className={"line3"}> UI/UX Optimization</p>
                        <p className={"line4"}>Online Visabilty</p>
                        <p className={"line5"}>Copy Writing</p>
                        
                </Col> 
                <Col s={12} m={4} l={4} xl={4} className={"icon-row border-right"} id={"num2"}>
                    <span className={"material-icons icon-top"}>desktop_mac</span>
                    <p className={"inner-text"}>Full-Stack Web Development</p>
                    <p className={"inner-sub-text"}>Using the latest tools and tech I design and build fully mobile responsive web experiences for your users. From simple websites to complex applications, I have you covered for all your online needs.</p>
                    <p className={"inner-sub-head"}>Languages I Speak:</p>
                    <p className={"inner-sub-2"}>JavaScript, ES6, Node, MySql, Mongo</p>
                    <p className={"inner-sub-head2"}>Dev Tools:</p>
                    <p className={"line1"}>React</p>
                    <p className={"line2"}>REST API</p>
                    <p className={"line3"}>JQuery</p>
                    <p className={"line4"}>Sequelize</p>
                    <p className={"line5"}>AWS</p>

                </Col>
                <Col s={12} m={4} l={4} xl={4} className={"icon-row"} id={"num3"}>
                    <span className={"material-icons icon-top"}>share</span>
                    <p className={"inner-text"}>Digital Marketing and Strategy</p>
                    <p className={"inner-sub-text"}>Having a strong online presence isn't only about having a beautiful website. It's about having a website that your audience loves. I use the latest tools and tech to drive traffic, run tests, and optimize your company's site.</p>
                    <p className={"inner-sub-head"}>Tools Used:</p>
                    <p className={"inner-sub-2"}>Google Suite, FB Ad Manager, Taboola, etc. </p>
                    <p className={"inner-sub-head2"}>
                    Services Provided:</p>
                    <p className={"line1"}>Media Buying</p>
                    <p className={"line2"}>Affiliate Management</p>
                    <p className={"line3"}>Email Marketing</p>
                    <p className={"line4"}>Audience Building</p>
                    <p className={"line5"}>Retargeting</p>
                </Col>
            </Row>
            </div>
        );
    };
}

export default Dev;