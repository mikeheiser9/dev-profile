import React, { Component } from "react";
import "../Header/Header.css";
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar} from "react-materialize"
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


class Header extends Component {

    render() {
     return (
    <div className={"navContainer"} id={"home"}> 
    <Row>
      <Navbar right className="header">
        <NavItem className="navItem contactItem" id="fiveOrder"href='#contact'>Contact</NavItem>
        <NavItem className="navItem" href='#work' id="fourOrder">My Work</NavItem>
        <NavItem className="navItem" href='#services' id="threeOrder">Services</NavItem>
        <NavItem className="navItem" href='#about' id="twoOrder">About</NavItem>
        <NavItem className="navItem" href='#home'id="oneOrder">Home</NavItem>
      </Navbar>
     </Row>
     </div>
    );
    }
}


export default Header;