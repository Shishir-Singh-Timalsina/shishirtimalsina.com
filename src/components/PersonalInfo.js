import React, { Component } from 'react';
import image from '../images/rt.jpg';



export default class Heading extends Component {
  render() {
    return (
      <div>
        <div>
          <img src = {image} width="700" height="500" /> 
        </div>
      </div>
    )
  }
}
