#!/bin/bash

# OpenHands Setup Script
# This script sets up the development environment for the project

echo "Starting OpenHands project setup..."

# Install dependencies
echo "Installing project dependencies..."
if [ -f "/workspace/todo-app/package.json" ]; then
    cd /workspace/todo-app && npm install
    echo "Node dependencies installed successfully!"
fi

# Set up environment variables if needed
echo "Setting up environment variables..."
# Add your environment variable setup here

# Any additional setup steps
echo "Running additional setup steps..."
# Add any other setup steps here

echo "Setup completed successfully!"
echo "You can now start developing your project."