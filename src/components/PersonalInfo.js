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
        
        
        My name is Shishir Singh Timalsina. <br/>

          I arrived in Finland in autum of  2014. I immediately started my studies of IT engineering  at OAMK.​
          At present I am in final years of my study.​<br/>

          I am really passionate about designing and  developing applications for 
          phones and desktop enviroments including experience 
          with Websites, web application (Full stack developer), software
          development and mobile application development.  I work in different aspects of Devlopment 
          of applications. I introduce myself as a programmer but I have also worked for 
          desiging and testing of the applications. I am an enthusiastic developer ready to design
          and devlop systems. Adjust quickly to new environment and very good team worker.​<br/>

          ​
          In futue I would like to be a enterprenuer working in development of applications 
          for different fields of work. ​
          <br/><br/>
          DOB 1992-04-28
          <br/><br/>
          Email: shishir.singh.timalsina@gmail.com

        </div>
  

        <hr/>
        <div className ="skills">
          <h2>What can I do for you ?</h2>
          
          <ul>
              <li>Web Design </li>
              <li>UI designer</li>  
              <li>Usability Testing</li>
          </ul> 
        </div>

        <br/>
        <br/>
        <hr/>
        <div className = "teamMatesFeedback"> 
          <h2>Team Mates Feedback</h2>
          <ul>
            <li>You turned out to be a motivated team member,
               who is fully concentrated on the things you are doing.
                I enjoy your willingness to challenge yourself and 
                extend your skills in different disciplines related 
                to IT and business.</li>
              <li>You are interested in what the other team-members has 
                been working on. You care about the team!</li>
          </ul>

        </div>

        <br/><br/><br/><br/>

        <hr/>


        <h3>Better experience in mobile view. Designed as a PWA (Progressive web application)
          <br/><br/>
          The website is still under process  development process.
        </h3>

      </div>
    )
  }
}
