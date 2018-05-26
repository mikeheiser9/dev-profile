import React, { Component } from "react";
import "../Header/Header.css";
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar} from "react-materialize"
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


class Header extends Component {


    render() {
     return (
    <Row>
      <Navbar right className="header">
        <NavItem className="navItem" onClick={() => console.log('test click')}>Resumè</NavItem>
        <NavItem className="navItem" href='components.html'>About</NavItem>
        <NavItem className="navItem" href='components.html'>Projects</NavItem>
      </Navbar>
     </Row>
    );
    }
}


export default Header;