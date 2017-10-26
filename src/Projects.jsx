import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
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

  render() {
    return (
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
              // style={{marginLeft: '50px'}}

            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default Projects;
