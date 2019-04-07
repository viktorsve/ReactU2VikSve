import React, { Component } from 'react';
import './App.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarComponent/>
      </div>
    );
  }
}

export default App;
