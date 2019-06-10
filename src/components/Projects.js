import React, { Component } from 'react';
import '../styles/Projects.css';




export default class Heading extends Component {
  render() {
    return (
        <div className = "projects ">
            <div>
              <h1>Projects</h1>

              <div className = "runaware">
                <h4>Runaware</h4>
                <h5>Android Application Prototype</h5>
                <p>
                  Runaware was a android application prototype developed during 
                  DEVLAB 2018 for school students age gruop 11 - 15. To motivate students
                  with heavy sedentary behaviour during school hour a game was 
                  designed. The game simply count steps from the person and rewards them.
                  <br/><br/>
                  Video link to the demonstration  -><a href = "https://www.youtube.com/watch?v=3lXhIZHJPkg&t=6s"> Youtube </a>
                  <br/><br/>
                  *Note: This prototype was developed in Android studio. It was 
                  developed with basic XML and Java.
                </p>
              </div>

              <div className = "lapLandHunter">
                <h4>Lapland Hunter</h4>
                  <h5>Basic FPS Game design Demo</h5>
                  <p>
                  </p>
              </div>

            </div>
        </div>
    )
  }
}
