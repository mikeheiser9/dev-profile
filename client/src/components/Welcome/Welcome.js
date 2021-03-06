import React, { Component } from "react";
import "../Welcome/Welcome.css";
import Particles from 'react-particles-js';
import {Dropdown, Button, NavItem, Modal, Col, Row, Navbar, Parallax} from "react-materialize"

 
class Welcome extends Component{
  
    render(){
        return (
          <div id="welcomeContainer">
            <Row>
                    <Particles className="particles"
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
                                "value": "#ffffff"
                              },
                              "shape": {
                                "type": "circle",
                                "stroke": {
                                  "width": 0,
                                  "color": "#000000"
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
                                "enable": false,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                              },
                              "move": {
                                "enable": true,
                                "speed": 1,
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
                     <p id="name">Mike Heiser</p>
                     <br></br>
                     <p id="job">Full-Stack Development and Digital Marketing</p>
                     <br></br>
                     <p id="location">Los Angeles | Toronto</p>
                    <img src={'../../../images/DTLA-copy.png'} alt={"dtla-img"} className="dtlaImg"/>
                    </Row>
            </div>
        );
    };
}
export default Welcome;