defmodule MemoryWeb.GamesChannel do
  # CHANGE: not using Phoenix.Socket, using MemoryWeb
  use MemoryWeb, :channel

  # Citation: NatTuck hangman-2019-01 01-31-channel-hangman branch

  alias Memory.Game

  def join("games:" <> name, payload, socket) do
    if authorized?(payload) do
      game = Game.new()
      IO.inspect(game)
      socket = socket
      |> assign(:game, game)
      |> assign(:name, name)
      IO.inspect(socket)
      {:ok, %{"join" => name, "game" => game}, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Add authorization logic here as required.
  # NB: defp defines a private function
  defp authorized?(_payload) do
    true
  end
end
