import React, { Component } from "react";
import Particles from 'react-particles-js';
import {Dropdown, Button, NavItem, Modal, Col, Row, Input, Navbar} from "react-materialize"
import axios from "axios";
import "../Contact/Contact.css";


class Contact extends Component{

    state = {
        first_name:"",
        last_name:"",
        phone:"",
        email:"",
        message:""
    };

    

    handleInput = (event) => {   
        let name = event.target.name;
        this.setState({[name]: event.target.value})
      }

    handleInputSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        axios.post("/contact", this.state
        ).then((res) => {
          window.location.reload();
        }).catch((error) => {});

        };
  
    render(){
        return (
            <div className={"contactContainer"} id={"contact"}>
            <Row>
            <p className={"contact-head"}>LET'S START A CONVERSATION.</p>
            </Row>
            <Row className={"input-container"}>
                <Input s={12} m={6} label="First Name" onChange={this.handleInput} type="text" name="first_name" value={this.state.first_name} className="validate" />
                <Input s={12} m={6} label="Last Name" onChange={this.handleInput} type="text" name="last_name" value={this.state.last_name} className="validate"/>
                <Input s={12} m={6} label="Phone Number" onChange={this.handleInput} type="text" name="phone" value={this.state.phone} className="validate"  />
                <Input label="Email" s={12} m={6} type="text" name="email" onChange={this.handleInput} value={this.state.email} className="validate" />
                <Input type="textarea" label="Tell me what you are looking for" s={12} type="text" name="message" onChange={this.handleInput} value={this.state.message} className="validate" />
                <Button waves='light' onClick={this.handleInputSubmit} type="submit" >Submit</Button>
            </Row>
            </div>
        );
    };
}

export default Contact;