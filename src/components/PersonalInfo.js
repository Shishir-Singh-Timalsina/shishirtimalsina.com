import React,{ Component } from 'react';
//import myimage1 from '../images/profilepicture.jpg'; //Not in use at the moment
import myimage2 from '../images/pp2.jpg';
import '../styles/PersonalInfo.css';



export default class Heading extends Component {
  render() {
    return (
      <div className = "personalInfo" class="container">

        <div id="profilePicture">                                                 {/*Profile Picture */}                                                         
          <img className = "imageone" src = {myimage2} alt="My Awesome"/> 
        </div>

        <div className = "basicDescription">                                       {/*Introduction Paragraph */}
        
        
        My name is <strong>Shishir Singh Timalsina</strong>. <br/><br/>

          I arrived in Finland in autum of  2014 from <strong>Nepal</strong>. I immediately started my studies of <strong>IT engineering </strong> from <strong>OAMK</strong>.​
          At present I have completed my studies.​<br/><br/>

          I am really passionate about designing and  developing applications for 
          phones and desktop enviroments including experience 
          with Websites, web application (Full stack developer), software
          development and mobile application development.  I work in different aspects of Devlopment 
          of applications. I introduce myself as a programmer but I have also worked for 
          desiging and testing of the applications. I am an enthusiastic developer ready to design
          and devlop systems. Adjust quickly to new environment and very good team worker.​<br/>

          ​<br/>
          In futue I would like to be a enterprenuer working in development of applications 
          for different fields of work. ​
          <br/><br/>
          DOB 1992-04-28
          <br/><br/>
          <h4> Graduate and seeking Emplyment</h4>

          <br/><br/>
          <h4>Email: shishir.singh.timalsina@gmail.com</h4>

        </div>
  

        <hr/>
        <div className ="skills">
          <h4>  What can I do for you ?</h4>
          
          <ul>
              <li><h4>Web Design</h4> </li>
              <li><h4>UI designer</h4></li>  
              <li><h4>Usability Testing</h4></li>
          </ul>
        </div>

        <br/><br/>

        <hr/>

        <h2>Team Mates Feedback</h2>                                                      {/*Teammates Feedback*/}
        <div className = "teamMatesFeedback"> 
         <p>
              You turned out to be a motivated team member,
               who is fully concentrated on the things you are doing.
                I enjoy your willingness to challenge yourself and 
                extend your skills in different disciplines related 
                to IT and business.<br/><br/>

                You are interested in what the other team-members has 
                been working on. You care about the team!
           </p>

        </div>

      </div>
    )
  }
}
