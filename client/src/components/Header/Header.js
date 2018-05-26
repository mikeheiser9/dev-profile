import React, { Component } from "react";
import "../Header/Header.css";
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar} from "react-materialize"
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


class Header extends Component {


    render() {
     return (
    <Row>
     <Col s={12}>
      <Navbar right className="header">
        <NavItem onClick={() => console.log('test click')}>Resumè</NavItem>
        <NavItem href='components.html'>About</NavItem>
        <NavItem href='components.html'>Projects</NavItem>
      </Navbar>
     </Col>
    </Row>
    );
    }
}


export default Header;