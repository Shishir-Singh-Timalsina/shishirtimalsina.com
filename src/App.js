import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from  "react-router-dom";

import Heading from './components/Heading';
import PersonalInfo from './components/PersonalInfo';
import Projects from './components/Projects';
import Hobby from './components/Hobby';
import StoryTime from './components/Storytime';
import Memes from './components/Memes';




class App extends Component {
  render() {
    return (
    
      <BrowserRouter>   {/*Creating Navbar  */}
        <Heading />
        <Switch>
          <Route path="/" component = {PersonalInfo}  exact/>
          <Route path="/Projects" component = {Projects} />
          <Route path="/Hobby" component = {Hobby} />
          <Route path="/StoryTime" component = {StoryTime} />
          <Route path="/Memes" component = {Memes} />
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
