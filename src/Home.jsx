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
          style={{textAlign: 'center', fontSize: '7vw', marginTop: '50px'}}
          >
            <strong> RYAN SPENCER ATTICK </strong>
          </Subheader>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center', alignContent: 'stretch', alignItems: 'center'}}>
            <img
              src="https://i.imgur.com/qYkliRF.jpg"
              style={{width: '20%', height: 'auto', borderRadius: '150px', margin: '70px'}}
            />
            <div
              style={{maxWidth: '700px', height: '200px', fontSize: '2vw', color: 'rgba(0, 0, 0, 0.54)'}}
            >
              <strong>I am a fullstack software engineer based in the San Francisco Bay Area specializing in frontend frameworks. My focus has primarily been on building efficient Javascript applications that create beautiful user interfaces and intuitive user flow. I'm passionate about using new and innovative concepts to solve problems and build comprehensive applications.</strong>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
