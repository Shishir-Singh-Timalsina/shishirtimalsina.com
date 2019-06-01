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
                    <li>Photography</li>
                    <li>Guitar</li>
                    <li>Volleyball</li>
                    <li><a href = "https://www.youtube.com/channel/UCMzhjSdYumin3Fx5a2oK16w?view_as=subscriber">   <Button variant="outline-danger">Youtube</Button></a></li>
                  </ul>
                </div>  
            </div>
        </div>
    )
  }
}
