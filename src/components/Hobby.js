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
                  <ul classname = "hobbyUnorderList">
                    <li><a href = "https://www.instagram.com/n00bography/"><Button variant="outline-info"> Photography (instagram)</Button></a></li>
                    <li><a href = "https://soundcloud.com/shishir-singh/tracks"> <Button variant = "outline-warning">Music</Button></a></li>
                    <li><a href = "https://www.youtube.com/channel/UCS_Ip3beN_hnZax-ZUJGmGg/videos?view_as=subscriber"><Button variant="outline-danger">Gaming (Youtube)</Button></a></li>
                  </ul>
                </div>  
            </div>
        </div>
    )
  }
}
