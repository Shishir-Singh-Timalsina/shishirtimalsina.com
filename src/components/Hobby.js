import React, { Component } from 'react';
import '../styles/Hobby.css';



export default class Hobby extends Component {
  render() {
    return (
        <div className = "hobby ">
            <div>
                <h3>Hobbys</h3>
                <div classname="hobbyList">
                  <ul>
                    <li>Photography</li>
                    <li>Guitar</li>
                    <li>Volleyball</li>
                    <li><a href = "https://www.youtube.com"> Youtube </a></li>
                  </ul>
                </div>  
            </div>
        </div>
    )
  }
}
