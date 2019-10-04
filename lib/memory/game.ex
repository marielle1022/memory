defmodule Memory.Game do
  # Server-side logic here

  # NB: %{} defines a map

  # Citation: NatTuck hangman-2019-01/assets/js/hangman.jsx (channel-hangman
  # branch) -- used to inform existence of new and client_view

  # This should be hidden from the client
  def new do
    originalTiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F',
    'G', 'G', 'H', 'H'];
    # Independently figured out everything but the Enum.map(fn ...) portion using hexdocs for
    # Map, List, and Enum.
    # Ended up using answer from Andrei Skorokhod (link below) to implement Enum.map(fn ...) and
    # to learn how to use pipe operators instead of saving output as a variable each time.
    # https://elixirforum.com/t/transform-a-list-into-an-map-with-indexes-using-enum-module/1523
    # Converts (list of tile values) to -> (list of shuffled tile values) to ->
    # (list of tuples with {value, index}) to -> (list of tuples with {index, value}) to ->
    # (map of %{index => value})
    # NB: need to shuffle first because Map.new() will automatically order the keys in
    # alphabetical/numerical order, and including Enum.shuffle() at the end will convert
    # the map back into a list.
    %{
      shuffledTiles: originalTiles
        |> Enum.shuffle()
        |> Enum.with_index()
        |> Enum.map(fn {value, key} -> {key, value} end)
        |> Map.new(),
    }
  end

  def client_view(game) do
    %{
    shuffledTiles: game.shuffledTiles
    }
  end

end
