import React, { Component } from 'react';
import myimage from '../images/profilepicture.jpg';
import '../styles/PersonalInfo.css';



export default class Heading extends Component {
  render() {
    return (
      <div className = "personalInfo">
        <div>
          <img className = "imageone" src = {myimage} alt="My Awesome"/> 
        </div>
        <div className = "basicDescription">
              <hr/>
              My name is Shishir Singh Timalsina, an information Technology student in OAMK.
              I have been doing my Bachelors since 2014 including experience 
              with Websites, web application (Full stack developer), software
              development and mobile application development.!!!
              <br/><br/><hr/>
              Country of orgin Nepal.
              <br/>
               DOB 1992-04-28
              <br/><hr/>
              Email: shishir.singh.timalsina@gmail.com
              <hr/>
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
