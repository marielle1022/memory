import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}

class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: false };
  }
	swap(_ev) {
    		let state1 = _.assign({}, this.state, { left: !this.state.left });
    		this.setState(state1);
  	}

  hax(_ev) {
    alert("hax!");
  }

  render() {
    let button = <div className="column" onMouseMove={this.swap.bind(this)}>
      <p><button onClick={this.hax.bind(this)}>Click Me</button></p>
    </div>;

    let blank = <div className="column">
      <p>Nothing here.</p>
    </div>;

    if (this.state.left) {
      return <div className="row">
        {button}
        {blank}
      </div>;
    }
    else {
      return <div className="row">
        {blank}
        {button}
      </div>;
    }
  }
}

// Citation: React tutorial (https://reactjs.org/tutorial/tutorial.html)
// This class represents the basic tiles on the board
// TODO: may need to change it from a class to a function
class Tile extends React.Component{
	render() {
		return(
		<button className="tile">
			{/*Need to fill in*/}
		</button>
		);
	}
}

// Citation: React tutorial (https://reactjs.org/tutorial/tutorial.html)
// This class creates the board setup
class Board extends React.Component {
	renderTile(i) {
		return <Tile />;
	}

	// Main render for Board class
	render() {
		// Hold the status of which player goes next
		const status = 'Next player: ';

		return (
			<div>
				<div className="status">{status}</div>
				// Create 4x4 row
				<div className="board-row">
					{this.renderTile(0)}
					{this.renderTile(1)}
					{this.renderTile(2)}
					{this.renderTile(3)}
				</div>
				<div className="status">{status}</div>
				// Create 4x4 row
				<div className="board-row">
					{this.renderTile(4)}
					{this.renderTile(5)}
					{this.renderTile(6)}
					{this.renderTile(7)}
				</div>
				<div className="status">{status}</div>
				// Create 4x4 row
				<div className="board-row">
					{this.renderTile(8)}
					{this.renderTile(9)}
					{this.renderTile(10)}
					{this.renderTile(11)}
				</div>			
				<div className="status">{status}</div>
				// Create 4x4 row
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
