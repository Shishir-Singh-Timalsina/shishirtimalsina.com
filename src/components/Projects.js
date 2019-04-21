import React, { Component } from 'react';
import '../styles/Projects.css';
import { Button } from 'react-bootstrap';



export default class Heading extends Component {
  render() {
    return (
        <div className = "projects ">
            <div>
                List of projects
                <Button variant="primary">Projects</Button>

            </div>
        </div>
    )
  }
}
