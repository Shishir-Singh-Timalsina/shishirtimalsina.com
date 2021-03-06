import React, { Component } from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';



import '../styles/Storytime.css';

import en from '../lang/en';
import fin from '../lang/fin';

counterpart.registerTranslations('en',en);
counterpart.registerTranslations('fin',fin);
counterpart.setLocale('en');



export default class Storytime extends Component {
  state ={
    lang : 'en'
  }

  onLangChange = (e) =>{
    this.setState({lang: e.target.value});
    counterpart.setLocale(e.target.value);
  }
  render() {

    return (
        <div>
           <p>This Page is used for practicing new things </p>

          <select value = {this.state.lang} onChange ={ this.onLangChange}>
            <option value = "en">ENG</option>
            <option value = "fin">FIN</option>

          </select>

          <div classname="textContent">

          <Translate content="title" component = "h1"/>   

          <Translate content="paragraphs.p1" component="p" unsafe={true}/>
          </div>

        
          
        </div>
    
    )
  }
}
