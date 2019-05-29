import React, { Component } from 'react';
import '../styles/Memes.css';
import mem2 from '../images/mm2.jpg';




export default class Memes extends Component {
  render() {
    return (
        <div className = "memes ">
            <div>
                <h3>Memes</h3>

                <ul>
                  <li> <img className = "meme2" src = {mem2} alt="My Awesome"/>  </li>

                </ul>

            </div>
        </div>
    )
  }
}
