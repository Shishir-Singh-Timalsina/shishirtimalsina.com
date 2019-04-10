import React, { Component } from 'react';
import image from '../images/rt.jpg';
import '../styles/PersonalInfo.css';



export default class Heading extends Component {
  render() {
    return (
      <div>
        <div>
          <img class = "imageone" src = {image} width="700" height="500" /> 
          <p>My name is Shishir, a information Technology student in OAMK.
             I have been doing my Bachelors since 2014 including experience 
             with Websites, web application (Full stack developer), software
              development and mobile application development etc. I am 
               hardworking and passionate about coding , programming and 
               solving problems. </p>
        </div>
      </div>
    )
  }
}
