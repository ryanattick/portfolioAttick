import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1500,
    height: 500,
    overflowY: 'auto',
    cursor: 'pointer',
  },
};


const tilesData = [
  {
    img: 'https://i.imgur.com/bS1EpQi.png',
    title: 'Forgotten',
    link: 'http://www.ninjarabbits.com/login'
    },
  {
    img: 'https://i.imgur.com/YiFJ6F4.png',
    title: 'Picognito',
    link: 'https://picognito.herokuapp.com/'
  },
  {
    img: 'https://i.imgur.com/9HiKW11.png',
    title: 'PassPass',
    link: 'https://youtu.be/vEC9heTK5GE'
  }
];

class Projects extends Component {
  state = {
    openForgotten: false,
    openPicognito: false,
    openPassPass: false
  };

handleOpenForgotten = () => {
  this.setState({openForgotten: true}, () => {console.log(this.state.openForgotten)});
};

handleOpenPicognito = () => {
  this.setState({openPicognito: true});
};

handleOpenPassPass = () => {
  this.setState({openPassPass: true});
};

handleClose = () => {
  this.setState({
    openForgotten: false,
    openPicognito: false,
    openPassPass: false
  });
};

goToLink = (tile) => {
  window.open(tile.link);
}


  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <div style={styles.root}>
          <GridList
            cols={3}
            cellHeight={500}
            style={styles.gridList}
            padding={4}
          >
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                titleStyle={{fontSize: '20px'}}
                onClick={() => {this.goToLink(tile)}}
              >
                {/* <a href={tile.link}/> */}
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: '12px'}}>
          <RaisedButton label="About Forgotten" onClick={this.handleOpenForgotten} style={{marginLeft: '120px', fontWeight: 'bold'}}/>
                <Dialog
                  title="Forgotten"
                  actions={actions}
                  modal={false}
                  open={this.state.openForgotten}
                  onRequestClose={this.handleClose}
                  contentStyle={{textAlign: 'center'}}
                  autoScrollBodyContent={true}
                >
                  <img src='https://i.imgur.com/akXYYAY.png' style={{maxHeight: '250px'}}/> <br/><br/>
                  Forgotten is a logic-based game. It's written in a text style and features a storyline in which the user must play through the levels to unlock items and secrets about their character. This web app was developed by a team of four engineers working collaboratively over the span of a month. My role focused mainly on the user experience and interface.
                </Dialog>
          <RaisedButton label="About Picognito" onClick={this.handleOpenPicognito} style={{margin: 'auto'}}/>
                <Dialog
                  title="Picognito"
                  actions={actions}
                  modal={false}
                  open={this.state.openPicognito}
                  onRequestClose={this.handleClose}
                  contentStyle={{textAlign: 'center'}}
                >
                  <img src='https://i.imgur.com/Cg8oxk8.png'style={{maxHeight: '250px'}}/> <br/><br/>
                  Picognito is an anonymous image sharing platform based on geolocation technology. The app allows users to upload photos which are tagged by location automatically. Users can only see photos of other users that were tagged within a five mile radius of their physical location. Additionally, users can like, dislike, or comment on pictures. This app was developed for the web by a team of four engineers in the span of two weeks. My role involved developing the user interface as well as querying the database.
                </Dialog>
          <RaisedButton label="About PassPass" onClick={this.handleOpenPassPass} style={{marginRight: '120px'}}/>
                <Dialog
                  title="PassPass"
                  actions={actions}
                  modal={false}
                  open={this.state.openPassPass}
                  onRequestClose={this.handleClose}
                  contentStyle={{textAlign: 'center'}}
                >
                  <img src='https://i.imgur.com/400HqKP.png'style={{maxHeight: '250px'}}/> <br/><br/>
                  PassPass is an web application focused on a user's ability to buy or sell ClassPasses. ClassPass is an existing service that allows consumers to buy entrance into individual gym classes without having to pay for a gym membership. These passes must be used within a certain period of time and cannot be used at the same gym more than once per cycle. Given these limitations, consumers might not be able to use all the passes before they expire. PassPass was created as a third-partying vendor to meet the need of users who might only want one or two ClassPasses for a lower rate than they would see from ClassPass, or for those who find themselves unable to use all the ClassPasses they originally purchased. This app was developed by a team of engineers in two weeks and then was passed on to my team. My team of four spent two additional weeks making improvements to the functionality and design of the application. My role focused on developing a more intuitive user interface as well as creating and refining database queries.
                </Dialog>
          </div>
      </div>
    );
  }
}

export default Projects;
