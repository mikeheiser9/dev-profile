import React, { Component } from "react";
import "../Foot/Foot.css";
import {Dropdown, Button, NavItem, Modal, Col, Row, Footer} from "react-materialize"
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


class Foot extends Component {


    render() {
     return (
        <div className={"footer-container"}>
        <Footer>
            <a href={"https://www.linkedin.com/in/michael-heiser-72377b65/"}>
            <img src={"../../../images/linkedin.png"} />
            </a>
        </Footer>
        </div>
    );
    }
}


export default Foot;