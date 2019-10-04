// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css";

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html";
import $ from "jquery";

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

import socket from "./socket";
import game_init from "./starter-game";



// TODO: taken from hangman (channel branch) app.js
$(() => {
  //let root = $('#root')[0];
  let root = document.getElementById('root');
  if (root) {
    // CHANGE: "games" to "rooms"
    // CHANGE: changed back to try to solve join error
    let channel = socket.channel("games:" + window.gameName, {});
    game_init(root, channel);
  }
});

// TODO: this is previous version of above function(?), check if needed.
//$(() => {
//  let root = $('#root')[0];
//  game_init(root);
//});

// TODO -- check if all this is correct
// Also why is elixir indenting weird?
// CHANGED: added "channel" as param to game_init
// CHANGED: commented out -- needed or not?
//window.addEventListener("load", (_ev) => {
//	let root = document.getElementById('root');
//	if (root) {
//		game_init(root, channel);
//	}
//});
