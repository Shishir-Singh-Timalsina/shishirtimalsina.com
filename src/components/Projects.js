import React, { Component } from 'react';
import '../styles/Projects.css';




export default class Heading extends Component {
  render() {
    return (
        <div className = "projects " class="container">
            <div>
              <h1>Projects</h1>
              <div className = "valkkyla">
                <h4>Välkkylä Tenants Committee Application  (Thesis Topic)</h4>
                <h5>Progressive Web Application with Reactjs</h5>
                <p>
                Välkkylä is one of the student residence locations in Oulu city maintained by PSOAS (PohjoisSuomen opiskelija-asuntosäätiö). 
                PSOAS operates different student housing locations available in
                different parts of the city. Välkkylä is one of such residence locations. In Välkkylä there is an acting
                tenant committee with around 5 members. Information regarding different student residence locations is available in PSOAS 
                official website psoas.fi or omapsoas.fi. Different residence locations
                of PSOAS have different sets of features and activities opportunities. PSOAS official website is
                very limited with features and services for the acting tenant committee of Välkkylä. To overcome
                some of the shortcomings of the official PSOAS website Välkkylä Tenant committee decided to
                have a website. 
                <br/><br/>
                  Web link to   -><a href = "https://valkkyla.netlify.com"> Valkkyla Tenants committee </a>
                  <br/><br/>
                  *Note:The application was developed with the help of tools such as Nodejs, a JavaScript run-time environment, 
                  Reactjs for user interface and Firebase for a database. Service worker and a Manifest file were used for the
                   implementation of the application to work in offline mode and make the application installable in the home 
                   screen resembling a native application. The code for the application is stored in GitHub and the application 
                   was deployed using Netlify for hosting.
                </p>
              </div>

              <div className = "runaware">
                <h4>Runaware</h4>
                <h5>Android Application Prototype</h5>
                <p>
                  Runaware is a android application prototype developed during 
                  DEVLAB 2018 for school students age gruop 11 - 15. To motivate students
                  with heavy sedentary behaviour during school hour a game was 
                  designed. The game simply count st-u oeps from the person and rewards them.
                  <br/><br/>
                  Video link to the demonstration  -><a href = "https://www.youtube.com/watch?v=3lXhIZHJPkg&t=6s"> Runaware-Youtube </a>
                  <br/><br/>
                  *Note: This prototype was developed in Android studio. It was 
                  developed with XML and Java.
                </p>
              </div>

              <div className = "lapLandHunter">
                <h4>Lapland Hunter</h4>
                  <h5>Basic FPS Game design Demo</h5>
                  <p>
                    This game prototype was developed during the course of Game Design. 
                    Its a very basic setup with open world and few targets to shoot with
                    a gun. 
                    <br/><br/>
                    
                    Video link to the demo -> <a href ="https://www.youtube.com/watch?v=FqMvNhaGm6g&t=1s">Lapland-Hunter-youtube</a>
                    <br/> <br/>
                    *My Responsibities: Game Mechahanics d esign and design document. 
                    </p>
                </div>

            </div>
        </div>
    )
  }
}
