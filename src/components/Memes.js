import React, { Component } from 'react';
import '../styles/Memes.css';
import mem1 from '../images/mm1.jpg';
import mem2 from '../images/mm2.jpg';
import mem3 from '../images/mm3.jpg';
import mem4 from '../images/mm4.jpg';
import mem5 from '../images/mm5.jpg';
import mem6 from '../images/mm6.jpg';
import mem7 from '../images/mm7.jpg';
import mem8 from '../images/mm8.jpg';
import mem9 from '../images/mm9.jpg';
import mem10 from '../images/mm10.jpg';
import mem11 from '../images/mm11.jpg';
import mem12 from '../images/mm12.jpg';
import mem13 from '../images/mm13.jpg';
import mem14 from '../images/mm14.jpg';
import mem15 from '../images/mm15.jpg';
import mem16 from '../images/mm16.jpg';






export default class Memes extends Component {
  render() {
    return (
        <div className = "memes ">
            <div>
                <h3>Memes</h3>


                <ul>
                  <li> <img className = "meme1" src = {mem1} alt="My Awesome"/>  </li>
                  <li> <img className = "meme2" src = {mem2} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem3} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem4} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem5} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem6} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem7} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem8} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem9} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem10} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem11} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem12} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem13} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem14} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem15} alt="My Awesome"/>  </li>
                  <li> <img className = "meme3" src = {mem16} alt="My Awesome"/>  </li>



                </ul>

            </div>
        </div>
    )
  }
}
