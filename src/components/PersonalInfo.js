import React, { Component } from 'react';
import myimage from '../images/rt.jpg';
import '../styles/PersonalInfo.css';



export default class Heading extends Component {
  render() {
    return (
      <div className = "personalInfo">
        <div>
          <img className = "imageone" src = {myimage} alt="My Awesome"/> 
        </div>
        <div className = "basicDescription">My name is Shishir, a information Technology student in OAMK.
              I have been doing my Bachelors since 2014 including experience 
              with Websites, web application (Full stack developer), software
              development and mobile application development.
        </div>
        <div className ="skills">
          <h2>What can I do for you ?</h2>
          
          <ul>
              <li>Front end developer</li>
              <li>UI designer</li>  
          </ul> 
        </div>
        <h3>The website is still in develoement process.</h3>
      </div>
    )
  }
}
