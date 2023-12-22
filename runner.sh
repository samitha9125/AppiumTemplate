#!/bin/bash

startTerminal() {
    # First, Appium should Load the .env file to get the appium running host/port.
    if [ -f .env ]; then
        export $(cat .env | xargs)
    else
        echo ".env file not found"
        exit 1
    fi

    # Check if Appium is already running on the already defined port
    if lsof -Pi :$APPIUM_PORT -sTCP:LISTEN -t >/dev/null; then
        echo "Appium is already running on port $APPIUM_PORT."
    else
        # If not, start Appium on a new terminal window
        osascript -e 'tell application "Terminal"
            do script "source ~/.zsh_profile && appium"
            activate
        end tell'
        echo "Starting Appium..."
        sleep 3
    fi
}

startTerminal
source ~/.zsh_profile
NODE_OPTIONS='--experimental-vm-modules' CONFIG=$1 yarn jest
