import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <Subheader
          style={{textAlign: 'center', fontSize: '90px', marginTop: '50px'}}
          >
            <strong> RYAN SPENCER ATTICK </strong>
          </Subheader>
          <div
            style={{fontSize: '25px', width: '700px', height: '200px', float: 'right', marginRight: '100px', marginTop: '100px', color: 'rgba(0, 0, 0, 0.54)'}}
          >
            <strong>I am a fullstack software engineer based in the San Francisco Bay Area specializing in frontend frameworks. My focus has primarily been on building efficient Javascript applications that create beautiful user interfaces and intuitive user flow. I'm passionate about using new and innovative concepts to solve problems and build comprehensive applications.</strong>
          </div>
        <img
          src="https://i.imgur.com/qYkliRF.jpg"
          style={{marginTop: '80px', marginLeft: '150px', maxHeight: '300px', borderRadius: '150px'}}
        />
      </div>
    );
  }
}

export default Home;
