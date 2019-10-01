import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}

/* Move inside constructor if possible */
const originalTiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F',
'G', 'G', 'H', 'H'];

/* See React tutorial (https://reactjs.org/tutorial/tutorial.html)
  to learn React and for ideas on structure.*/
class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomTiles: this.shuffle(originalTiles),
      score: 0
    };
  }

  // Citation: https://javascript.info/task/shuffle
  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  revealTileValue(tile, bool){
    if (this.state.showValue == true){
      return tile
    } else {
      undefined
    }
  }

  chooseCardTurn() {
    if (this.state.firstCard == false) {
      this.setState({
        firstCard: true
      })
    } else if ((this.state.firstCard == true) &&
      (this.state.secondCard == false)) {
        this.setState({
        secondCard: true
      })
    }
  }

  createTiles() {
    return this.state.randomTiles.map((tile, key) => {
      return(
        <button key = {key}>
        {tile}
        </button>
      )
    })
  }

  render() {
    return (
      /* See https://www.robinwieruch.de/react-function-component for how to
      handle events */
      <div className="starter">
        <div className="row board">
          {this.createTiles()}
        </div>
        <button onClick={()=>{
          this.setState({
            randomTiles: this.shuffle(originalTiles),
            score: 0
          })
        }}>Reset
        </button>
      </div>
    );
  }
}
