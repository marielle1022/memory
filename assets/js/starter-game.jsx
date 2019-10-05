import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root, channel) {
  ReactDOM.render(<Starter channel={channel} />, root);
}
// This is the Client-side state for the memory game.

/* See React tutorial (https://reactjs.org/tutorial/tutorial.html)
  to learn React and for ideas on structure.*/
class Starter extends React.Component {
  constructor(props) {
    super(props);

    this.channel = props.channel;
    this.state = {
      shuffledTiles: [],
      skelTiles: [],
      clickedTiles: [],
      matches: [],
      onlyForGrading: [],
      score: 0,
    }

    // Citation: NatTuck hangman-2019-01/assets/js/hangman.jsx
    // (channel-hangman branch)
    this.channel
      .join()
      .receive("ok", this.got_view.bind(this))
      .receive("error", resp => {console.log("Unable to join", resp);});
  }

  // Citation: NatTuck hangman-2019-01/assets/js/hangman.jsx
  // (channel-hangman branch)
  got_view(view) {
    console.log("new view", view);
    this.setState(view.game);
  }

  // Need to figure out how to create new game (and render tiles)
  // Very confused on how to get .ex and .jsx to communicate properly
  render() {
    return (
      <div className="starter">
        <button>Reset</button>
      </div>
    );
  }
}

// Idea for tiles: using NatTuck hangman-2019-01/assets/js/hangman.jsx
// (channel-hangman branch)
//   render() {
//     return (
//       <div className="starter">
//         <div className="row board">
//           <Tile skeleton={this.state.skelTiles} />
//         </div>
//         <button>Reset</button>
//       </div>
//     );
//   }
// }
//
// function Tile(params) {
//   let {skeleton} = params;
//   return (
//     <div>
//       <p>{skeleton.join(" ")}</p>
//     </div>
//   );
// }

// Another idea for reset
// render() {
//   return (
//     <div className="starter">
//       <button onClick={()=>{
//         this.channel.push(this.Game.new())
//         .receive("ok", this.got_view.bind(this));
//       }}>Reset</button>
//     </div>
//   );
// }
