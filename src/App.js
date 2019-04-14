import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from  "react-router-dom";

import Heading from './components/Heading';
import PersonalInfo from './components/PersonalInfo';
import Projects from './components/Projects';




class App extends Component {
  render() {
    return (

      /*
      <div className="App">
        <Heading></Heading>
        <PersonalInfo></PersonalInfo>
 
      </div>*/


      <BrowserRouter>
        
        <Heading />
        <Switch>
          <Route path="/" component = {PersonalInfo}  exact/>
          <Route path="/Projects" component = {Projects} />
          <Route component = {Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const Error = () => {
  return(
    <div>
      <p>Sorry, Could not find the page</p>
    </div>
  );
}

export default App;
