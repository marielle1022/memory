defmodule Memory.BackupAgent do
  use Agent

  # Citation: http://www.ccs.neu.edu/home/ntuck/courses/2019/01/cs4550/notes/08-server-state/notes.html

  # Essentially this is a "global mutable map."

  # TODO: figure out if this is actually similar to implementing an interface
  # NB: use __MODULE__ so that if name of module (Memory.BackupAgent) is changed,
  # don't need to change name everywhere

  def start_link(_args) do
    Agent.start_link(fn -> %{} end, name: __MODULE__)
  end

  def put(name, val) do
    Agent.update __MODULE__, fn state ->
      Map.put(state, name, val)
    end
  end

  def get(name) do
    Agent.get __MODULE__, fn state ->
      Map.get(state, name)
    end
  end

end
