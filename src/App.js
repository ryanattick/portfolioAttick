import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import './App.css';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            inkBarStyle={{backgroundColor: 'red', width: '20%', marginLeft: '200px'}}
            tabItemContainerStyle={{position: 'absolute', bottom: '0', height: '10%'}}
          >
            <Tab label="Home" value="a" style={{backgroundColor: 'black'}}>
              <div>
                <Home/>
              </div>
            </Tab>
            <Tab label="Projects" value="b" style={{backgroundColor: 'black'}}>
              <div>
                <Projects/>
              </div>
            </Tab>
            <Tab label="Contact" value="c" style={{backgroundColor: 'black'}}>
              <div>
                <Contact/>
              </div>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
