#!/bin/bash

export MIX_ENV=prod
#DONE: changed port from 4791 to 4789
export PORT=4789

echo "Starting app..."

# Start to run in background from shell.
#_build/prod/rel/memory/bin/memory start

# Foreground for testing and for systemd
_build/prod/rel/memory/bin/memory start

# TODO: Add a systemd service file
#       to start your app on system boot.

