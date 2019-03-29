import React, { Component } from "react";
import Particles from 'react-particles-js';
import {Dropdown, Button, NavItem, Modal, Col, Row, Input, Navbar} from "react-materialize"
import axios from "axios";
import "../Contact/Contact.css";


class Contact extends Component {

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

        modalOpen = (event) => {
        event.preventDefault();
        document.getElementById("modalTrig").modal("open");
        }
  
    render(){
        return (
            <div className={"contactContainer"} id={"contact"}>
            <Row id="contactRow">
            <Particles className="particles-c"
                        params={{
                        particles: {
                              "number": {
                                "value": 200,
                                "density": {
                                  "enable": true,
                                  "value_area": 800
                                }
                              },
                              "color": {
                                "value": "#778899"
                              },
                              "shape": {
                                "type": "circle",
                                "stroke": {
                                  "width": 0,
                                  "color": "#778899"
                                },
                                "polygon": {
                                  "nb_sides": 5
                                },
                                "image": {
                                  "src": "img/github.svg",
                                  "width": 100,
                                  "height": 100
                                }
                              },
                              "opacity": {
                                "value": 1,
                                "random": true,
                                "anim": {
                                  "enable": true,
                                  "speed": 2,
                                  "opacity_min": 0,
                                  "sync": false
                                }
                              },
                              "size": {
                                "value": 8,
                                "random": true,
                                "anim": {
                                  "enable": false,
                                  "speed": 6,
                                  "size_min": 0.3,
                                  "sync": false
                                }
                              },
                              "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#778899",
                                "opacity": 0.4,
                                "width": 1
                              },
                              "move": {
                                "enable": true,
                                "speed": 3,
                                "direction": "none",
                                "random": true,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                  "enable": false,
                                  "rotateX": 600,
                                  "rotateY": 600
                                }
                              }
                            },
                            "interactivity": {
                              "detect_on": "window",
                              "events": {
                                "onhover": {
                                  "enable": true,
                                  "mode": "bubble"
                                },
                                "onclick": {
                                  "enable": true,
                                  "mode": "repulse"
                                },
                                "resize": true
                              },
                              "modes": {
                                "grab": {
                                  "distance": 400,
                                  "line_linked": {
                                    "opacity": 1
                                  }
                                },
                                "bubble": {
                                  "distance": 250,
                                  "size": 0,
                                  "duration": 2,
                                  "opacity": 0,
                                  "speed": 3
                                },
                                "repulse": {
                                  "distance": 400,
                                  "duration": 0.4
                                },
                                "push": {
                                  "particles_nb": 4
                                },
                                "remove": {
                                  "particles_nb": 2
                                }
                              }
                            },
                            "retina_detect": false
                          }}
                         
            />
            <p className={"contact-head"}>LET'S CONNECT.</p>
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