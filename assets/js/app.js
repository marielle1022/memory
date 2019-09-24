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

import game_init from "./starter-game";

$(() => {
  let root = $('#root')[0];
  game_init(root);
});

// TODO --  possibly delete
// FROM notes-05 react

//import todo_init from "./todo";

//window.addEventListener("load", (_ev) => {
//	let root = document.getElementById('root');
//	if (root) {
//		todo_init(root);
//	}
//});


// TODO -- check if all this is correct
// Also why is elixir indenting weird?
import game_init from "./starter-game";

window.addEventListener("load", (_ev) => {
	let root = document.getElementById('root');
	if (root) {
		game_init(root);
	}
});
