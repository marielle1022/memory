import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}

/* Citation: React tutorial (https://reactjs.org/tutorial/tutorial.html)
  to learn React and for ideas on structure.*/
class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalTiles: ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F',
      'G', 'G', 'H', 'H'],
      randomTiles: []
    };
  }
  randomizeTiles(arr){
    var tempTiles = arr.slice();
    while (tempTiles.length > 0) {
      var len = tempTiles.length;
      /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      used to understand and implement Math.random()*/
      var index = Math.floor(Math.random() * len);
      /*https://www.robinwieruch.de/react-state-array-add-update-remove to setState and cocatenate*/
      var tempValue = tempTiles[index];
      this.setState(state => {
        const randomTiles = state.list.concat(state.value);
        return {
          randomTiles,
          value: tempValue,
        };
      };
      tempTiles = tempTiles.filter(tempTiles[index]);
    };
  }
  renderTile(i){
    return <Tile />;
  }

  render() {
    return (
      randomizeTiles(this.state.originalTiles);
      /* TODO: delete console log*/
      console.log(this.state.randomTiles);
      <div>
        /* Create 4x4 row*/
        <div className="board-row">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
          {this.renderTile(3)}
        </div>
        /* Create 4x4 row*/
        <div className="board-row">
          {this.renderTile(4)}
          {this.renderTile(5)}
          {this.renderTile(6)}
          {this.renderTile(7)}
        </div>
        /* Create 4x4 row*/
        <div className="board-row">
          {this.renderTile(8)}
          {this.renderTile(9)}
          {this.renderTile(10)}
          {this.renderTile(11)}
        </div>
        /* Create 4x4 row*/
        <div className="board-row">
          {this.renderTile(12)}
          {this.renderTile(13)}
          {this.renderTile(14)}
          {this.renderTile(15)}
        </div>
      </div>
    );
  }
}

{/*} Citation: React tutorial (https://reactjs.org/tutorial/tutorial.html)
  to learn React and for ideas on structure.
  This class represents the basic tiles on the board
  TODO: may need to change it from a class to a function */}
class Tile extends React.Component{
  render() {
    return(
      <button className="tile">
      /*Need to fill in*/
      </button>
    );
  }
}
