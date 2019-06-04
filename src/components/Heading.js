import React, { Component } from 'react'
/*import {NavLink} from "react-router-dom";*/
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

export default class Heading extends Component {
  render() {
    return (
      <div className="heading">
        <h1>Shishir Singh Timalsina </h1>
        <Navbar collapseOnSelect expand="lg" bg="light">
          



          <Navbar.Brand href="#home"> 
            {/*<img className = "imageone" src = {navicon} alt="My Awesome"/> */}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
             
             {/* <NavLink to="/">Home</NavLink>
              <NavLink to="/Projects">Projects</NavLink>
              <NavLink to="/Hobby">Hobby</NavLink>
              <NavLink to="/StoryTime">StoryTime</NavLink>
              <NavLink to="/Memes">Memes</NavLink>      OLd Style
            */}

              <Nav.Link href = "/">Home</Nav.Link>
              <Nav.Link href = "/Projects">Projects</Nav.Link>

              <Nav.Link href = "/Hobby">Hobby</Nav.Link>

              <Nav.Link href = "/StoryTime">StoryTime</Nav.Link>
              <Nav.Link href = "/Memes">Memes</Nav.Link>



            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    )
  }
}
