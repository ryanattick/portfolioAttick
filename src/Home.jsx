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
            style={{fontSize: '30px', width: '700px', height: '200px', float: 'right', marginRight: '100px', marginTop: '100px', color: 'rgba(0, 0, 0, 0.54)'}}
          >
            <strong>I am a fullstack software engineer based in the San Francisco Bay Area looking for a challenging position with a company that is focused on making a positive social impact.</strong>
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
