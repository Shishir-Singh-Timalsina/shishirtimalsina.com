import React, { Component } from 'react';
//import '../styles/Memes.css';
import { Button } from 'react-bootstrap';




export default class Memes extends Component {
  render() {
    return (
        <div className = "memes ">
            <div>
                <h3>Memes</h3>
                <Button variant="primary">Primary</Button>
            </div>
        </div>
    )
  }
}
