import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from "./Timer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React Timer App</h1>
        </header>
        <p className="App-intro">
          I am so glad to see you here!
        </p>
       <Timer start={Date.now()}/>
      </div>
    );
  }
}

export default App;
