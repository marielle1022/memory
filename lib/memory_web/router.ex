defmodule MemoryWeb.Router do
  use MemoryWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", MemoryWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    # CHANGE: added line below
    # Modeled after previous assignment (elixir_practice)
    # route = macro(get/post/etc.), path, controller, action to handle request
    post "/name", PageController, :game
    #post "/actual_game.html", PageController, :name
  end

  # Other scopes may use custom stacks.
  # scope "/api", MemoryWeb do
  #   pipe_through :api
  # end
end
