import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root, channel) {
  ReactDOM.render(<Starter channel={channel}/>, root);
}
// This is the Client-side state for the memory game.

/* See React tutorial (https://reactjs.org/tutorial/tutorial.html)
  to learn React and for ideas on structure.*/
class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.channel = props.channel;
    this.state = {
      /* When flippedTiles reaches size 2, it's time for the next turn.*/
      /* If flippedTiles[0]==flippedTiles[1], add one point to the
      score and remove those tiles from randomTiles.*/
      flippedTiles: [],
      score: 0
    };
    /* Citation: NatTuck hangman-2019-01/assets/js/hangman.jsx (channel-hangman
        branch) */
    this.channel
      .join()
      .receive("ok", this.got_view.bind(this))
      .receive("error", resp => { console.log("Unable to join", resp); });
  }

  /* Citation: NatTuck hangman-2019-01/assets/js/hangman.jsx (channel-hangman
      branch) */
  got_view(view) {
    console.log("new view", view);
    this.setState(view.game);
  }

  /*
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

  checkMatch(key1, key2) {
    if (this.flippedTiles)
    return this.state.randomTiles.map((tile, key) => {
      return(
        <button key = {key}>
        {tile}
        </button>
      )
    })
  }

  */

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
            score: 0
          })
        }}>Reset
        </button>
      </div>
    );
  }
}
