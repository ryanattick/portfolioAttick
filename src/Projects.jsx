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
  },
};


const tilesData = [
  {
    img: 'https://i.imgur.com/bS1EpQi.png',
    title: 'Forgotten'
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
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', margin: '12px'}}>
          <RaisedButton label="More Info" onClick={this.handleOpenForgotten} style={{marginLeft: '150px'}}/>
                <Dialog
                  title="Forgotten"
                  actions={actions}
                  modal={false}
                  open={this.state.openForgotten}
                  onRequestClose={this.handleClose}
                  contentStyle={{textAlign: 'center'}}
                >
                  FORGOTTEN
                </Dialog>
          <RaisedButton label="More Info" onClick={this.handleOpenPicognito} style={{margin: 'auto'}}/>
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
          <RaisedButton label="More Info" onClick={this.handleOpenPassPass} style={{marginRight: '150px'}}/>
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
