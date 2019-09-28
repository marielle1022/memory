import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}

const originalTiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F',
'G', 'G', 'H', 'H'];

// Citation: https://javascript.info/task/shuffle
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

/* See React tutorial (https://reactjs.org/tutorial/tutorial.html)
  to learn React and for ideas on structure.*/
class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomTiles: shuffle(originalTiles),
    };
  }
  render() {
    return (
      <div className="starter">
        /* See https://www.robinwieruch.de/react-function-component for how to
        handle events */
        <button onClick={()=>{
          this.setState({
            randomTiles: shuffle(originalTiles)
          })
          >NameOfButton
        </button>
      </div>
    );
  }
}
