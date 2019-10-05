defmodule MemoryWeb.GamesChannel do
  # CHANGE: not using Phoenix.Socket, using MemoryWeb
  use MemoryWeb, :channel

  # Citation: NatTuck hangman-2019-01 01-31-channel-hangman branch
  # Citation for lines relating to BackupAgent:
  # http://www.ccs.neu.edu/home/ntuck/courses/2019/01/cs4550/notes/08-server-state/notes.html

  alias Memory.Game
  alias Memory.BackupAgent

  def join("games:" <> name, payload, socket) do
    if authorized?(payload) do
      game = BackupAgent.get(name) || Game.new()
      socket = socket
      |> assign(:game, game)
      |> assign(:name, name)
      BackupAgent.put(name, game)
      IO.inspect(socket)
      {:ok, %{"join" => name, "game" => Game.client_view(game)}, socket}
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
