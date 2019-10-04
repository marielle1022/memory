defmodule MemoryWeb.PageController do
  use MemoryWeb, :controller

  # CHANGE: added "game" function
  # Citation: modeled from NatTuck hangman-2019-01 01-31-channel-hangman branch
  def game(conn, %{"name" => name}) do
    render conn, "actual_game.html", name: name
  end

  def index(conn, _params) do
    render conn, "index.html"
  end
end
