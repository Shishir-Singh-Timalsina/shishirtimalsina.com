import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from  "react-router-dom";




import Heading from './components/Heading';
import PersonalInfo from './components/PersonalInfo';
import Projects from './components/Projects';
import Hobby from './components/Hobby';
import StoryTime from './components/Storytime';
import Memes from './components/Memes';
import Footer from './components/Footer';

import './styles/App.css';


//import { Container } from 'react-bootstrap';
//import * as ReactBootStrap from "react-bootstrap";


class App extends Component {

  render() {
    return (

    <div classname="page-container">
      <div classname="content-wrap">
        <div class = "container-fluid">
          <BrowserRouter>                                      {/*Creating Routing  */}
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
          
        </div>
      </div>
      <Footer />  
    </div>

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
