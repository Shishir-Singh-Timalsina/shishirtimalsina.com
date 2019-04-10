import React, { Component } from 'react';
import myimage from '../images/rt.jpg';
import '../styles/PersonalInfo.css';



export default class Heading extends Component {
  render() {
    return (
      <div>
        <div>
          <img className = "imageone" src = {myimage} alt="My Awesome"/> 
          
          <div className = "basicDescription">My name is Shishir, a information Technology student in OAMK.
              I have been doing my Bachelors since 2014 including experience 
              with Websites, web application (Full stack developer), software
              development and mobile application development.
            </div>
        </div>
      </div>
    )
  }
}
