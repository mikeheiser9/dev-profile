import React, { Component } from "react";
import "../Header/Header.css";
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar} from "react-materialize"
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


class Header extends Component {


    render() {
     return (
    <div className={"navContainer"}> 
    <Row>
      <Navbar right className="header">
        <NavItem className="navItem" href='#contact'>Contact</NavItem>
        <NavItem className="navItem" href='#myWork'>My Work</NavItem>
        <NavItem className="navItem" href='#services'>Services</NavItem>
        <NavItem className="navItem" href='#about'>About</NavItem>
      </Navbar>
     </Row>
     </div>
    );
    }
}


export default Header;