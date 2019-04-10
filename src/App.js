import React, { Component } from 'react';
import Heading from './components/Heading';
import PersonalInfo from './components/PersonalInfo';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading></Heading>
        <PersonalInfo></PersonalInfo>
 
      </div>
    );
  }
}

export default App;
