defmodule Memory.Game do
  # Server-side logic here

  # NB: %{} defines a map

  # Citation: NatTuck hangman-2019-01/assets/js/hangman.jsx (channel-hangman
  # branch) -- used to inform existence of new and client_view

  # Citation relating to shuffledTiles in new:
  # Independently figured out everything but the Enum.map(fn ...)
  # portion using hexdocs for Map, List, and Enum.
  # Ended up using answer from Andrei Skorokhod (link below) to
  # implement Enum.map(fn ...) and to learn how to use pipe operators
  # instead of saving output as a variable each time.
  # Link: https://elixirforum.com/t/transform-a-list-into-an-map-with-indexes-using-enum-module/1523

  # shuffledTiles:
  # converts (list of tile values) to ->
  # (list of shuffled tile values) to ->
  # (list of tuples with {value, index}) to ->
  # (list of tuples with {index, value}) to ->
  # (map of %{index => value})
  # NB: need to shuffle first because Map.new() will automatically order the keys in
  # alphabetical/numerical order, and including Enum.shuffle() at the end will convert
  # the map back into a list.

  # This should be hidden from the client.
  def new do
    originalTiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F',
    'G', 'G', 'H', 'H']
    %{
      shuffledTiles: originalTiles
          |> Enum.shuffle()
          |> Enum.with_index()
          |> Enum.map(fn {value, key} -> {key, value} end)
          |> Map.new(),
      clickedTiles: [],
      score: 0
    }
  end

  # Citation: NatTuck hangman-2019-01/assets/js/hangman.jsx
  # (channel-hangman branch) modified
  def client_view(game) do
    board = game.shuffledTiles
    selected = game.clickedTiles
    %{
      skelTiles: createSkeleton(board, selected),
      clickedTiles: [],
      matches: [],
      onlyForGrading: board,
      score: 0
    }
  end

  # Citation: NatTuck hangman-2019-01/assets/js/hangman.jsx
  # (channel-hangman branch) modified
  # This is intended to allow the client_view to display only the tiles that
  # were clicked.
  def createSkeleton(tiles, chosen) do
    Enum.map tiles, fn find ->
      if Enum.member?(chosen, find) do
        find
      else
        ""
      end
    end
  end

  # This is intended to compare the two clicked tiles.
  # This is to be done using the clickedTiles map.
  # This will be called when the clickedTiles map has 2 entries.
  # TODO: figure out how to determine above, where to call this.
  # TODO: figure out error (cannot invoke remote function game.matches/0
  # inside a match)
  # def compare(game) do
  #   valueList = Map.values(game.clickedTiles)
  #   if Enum.at(valueList, 0) == Enum.at(valueList, 1) do
      # Merge the clickedTiles map into the matches map
  #     game.matches = Map.merge(game.matches, game.clickedTiles)
      # Reset the clickedTiles map
  #     game.clickedTiles = Map.new()
  #   else
      # Reset the clickedTiles map for the next turn.
      # TODO: probably move reset to outside of if/else -- need to confirm
      # this will work with elixir syntax (will reach it)
  #     game.clickedTiles = Map.new()
  #   end
  # end

end
