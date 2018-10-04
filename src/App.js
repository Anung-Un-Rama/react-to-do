import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <ToDo dummy1/>
          <ToDo dummy2/>
          </ul>
      </div>
    );
  }
}

export default App;
