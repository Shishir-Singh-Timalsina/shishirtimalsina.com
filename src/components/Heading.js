import React, { Component } from 'react'
/*import {NavLink} from "react-router-dom";*/
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';


export default class Heading extends Component {
  render() {
    return (
      <header>
        <div className="heading">
          <Navbar collapseOnSelect expand="lg" bg="light">
            
            <Navbar.Brand href="/"> <b>Shishir Singh Timalsina</b>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav variant = "Pills" className="mr-auto" > 
          
              
                <Nav.Link href = "/">Home</Nav.Link>
              
                <Nav.Link href = "/Projects">Projects</Nav.Link>

                <Nav.Link href = "/Hobby">Hobby</Nav.Link>

                <Nav.Link href = "/StoryTime">Play-Ground</Nav.Link>
                <Nav.Link href = "/Memes">Memes</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </div>
      </header>
    )
  }
}
