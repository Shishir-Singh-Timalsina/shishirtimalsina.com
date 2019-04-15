import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

export default class Heading extends Component {
  render() {
    return (
      <div className="heading">
        <h1>Shishir Singh Timalsina </h1>
        <div className = "Navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Projects">Projects</NavLink>
          <NavLink to="/Hobby">Hobby</NavLink>
          <NavLink to="/StoryTime">StoryTime</NavLink>
          <NavLink to="/Memes">Memes</NavLink>
        </div>

      </div>
    )
  }
}
