import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";




class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Header/>
        <Welcome/>
        <Switch>
          
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
