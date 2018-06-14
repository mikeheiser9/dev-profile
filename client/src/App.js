import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Services from "./components/Services/Services"
import AOS from "aos";
import 'aos/dist/aos.css';
import "./App.css";

class App extends Component {

  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  render() {
    return (
    <Router>
      <div className="App">
          <Header />
          <Welcome />
        <About />
        <Services />
      </div>
    </Router>
    );
  }
}

export default App;
