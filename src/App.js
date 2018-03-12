import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Codelab from './Codelab';
import Counter from './Counter';
import Contact from './Contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1> Codelab </h1>
        <Codelab />
        <h1> Counter </h1>
        <Counter />
        <h1> Contact </h1>
        <Contact />
      </div>
    );
  }
}


export default App;
