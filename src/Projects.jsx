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
    img: 'https://i.imgur.com/zXq7HOU.png',
    title: 'Picognito'
  },
  {
    img: 'https://i.imgur.com/9HiKW11.png',
    title: 'PassPass'
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
                >
                  DOES THIS WORKKKKKKKK?
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
                  PICOGNITO
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
                  PASSPASS
                </Dialog>
          </div>
      </div>
    );
  }
}

export default Projects;
