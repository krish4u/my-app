import React, { Component } from 'react';
import './App.css';
import './Person/Person'
import person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       APP Component
       <person></person>
      </div>
    );
  }
}

export default App;
