import React, { Component } from "react";
import Particles from 'react-particles-js';
import {Dropdown, Button, NavItem, Modal, Col, Row, Input, Navbar} from "react-materialize"
import "../Contact/Contact.css";


class Contact extends Component{
  
    render(){
        return (
            <div className={"contactContainer"} id={"contact"}>
            <Row>
            <p className={"contact-head"}>LET'S START A CONVERSATION.</p>
            </Row>
            <Row className={"input-container"}>
                <Input s={6} label="First Name" />
                <Input s={6} label="Last Name" />
                <Input s={6} label="Phone Number"  />
                <Input label="Email" s={6} />
                <Input type="textarea" label="Tell me what you are looking for" s={12} />
            </Row>
            </div>
        );
    };
}

export default Contact;