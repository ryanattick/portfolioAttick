import React, { Component } from 'react';
import './App.css';

class Contact extends Component {

  goToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/ryan-spencer-attick/');
  }

  goToGithub = () => {
    window.open('https://github.com/spencerattick');
  }

  goToEmail = () => {
    window.open('mailto:spencer.attick@gmail.com')
  }


  render() {
    return (
      <div>
        <div style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0.54)', fontSize: '30px', marginTop: '50px', fontWeight: 'bold'}}>
          Find me at the following links:
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: '12px'}}>
          <img src="https://i.imgur.com/1jPfw6m.png" onClick={() => {this.goToLinkedIn()}} style={{cursor: 'pointer', height: '180px', margin: 'auto', borderRadius: '10px'}}/>
          <img src="https://i.imgur.com/jms4z9L.png" onClick={() => {this.goToGithub()}} style={{cursor: 'pointer', margin: 'auto'}}/>
          <img src="https://i.imgur.com/Rb2Ey4Z.png" onClick={() => {this.goToEmail()}} style={{cursor: 'pointer', height: '250px', margin: 'auto'}}/>
        </div>
    </div>
    );
  }
}

export default Contact;
