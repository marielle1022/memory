defmodule MemoryWeb.RoomsChannel do
  # CHANGE: not using Phoenix.Socket, using MemoryWeb
  use MemoryWeb, :channel

  # Citation: NatTuck hangman-2019-01 01-31-channel-hangman branch

  alias Memory.Game

  def join("rooms:" <> name, payload, socket) do
    if authorized?(payload) do
      room = Game.new()
      socket = socket
      |> assign(:room, room)
      |> assign(:name, name)
      {:ok, %{"join" => name, "room" => Game.client_view(room)}, socket}
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
