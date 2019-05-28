import React, { Component } from 'react';
import '../styles/Memes.css';
import mem1 from '../images/mm1.jpg';
import mem2 from '../images/mm2.jpg';




export default class Memes extends Component {
  render() {
    return (
        <div className = "memes ">
            <div>
                <h3>Memes</h3>

                <ul>
                  <li> <img className = "meme1" src = {mem1} alt="My Awesome"/>  </li>
                  <li> <img className = "meme2" src = {mem2} alt="My Awesome"/>  </li>

                </ul>

            </div>
        </div>
    )
  }
}
