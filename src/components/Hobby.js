import React, { Component } from 'react';
import '../styles/Hobby.css';


import {Button} from 'react-bootstrap';




export default class Hobby extends Component {
  render() {
    return (
        <div className = "hobby ">
            <div>
                <h3>Hobbies</h3>
                <div classname="hobbyList">
                  <ul>
                    <li><a href = "https://www.instagram.com/n00bography/"><Button variant="info"> Photography (instagram)</Button></a></li>
                    <li>Guitar</li>
                    <li>Volleyball</li>
                    <li><a href = "https://www.youtube.com/channel/UCS_Ip3beN_hnZax-ZUJGmGg/videos?view_as=subscriber">   <Button variant="outline-danger">Gaming (Youtube)</Button></a></li>
                  </ul>
                </div>  
            </div>
        </div>
    )
  }
}
