defmodule MemoryWeb.PageController do
  use MemoryWeb, :controller

  # CHANGE: added "game" function

  # Modeled after previous assignment (elixir_practice)
  def game(conn, %{"name" => name}) do
    render conn, "actual_game.html", name: name
  end

  def index(conn, _params) do
    render conn, "index.html"
  end
end
