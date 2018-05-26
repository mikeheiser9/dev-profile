import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import "./App.css";




class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <div className="top-screen">
          <Header/>
          <Welcome/>
        </div>
        <Switch>
          
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
