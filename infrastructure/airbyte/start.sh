#!/bin/bash

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

if ! command_exists docker; then
    echo "Docker not found. Installing Docker..."
    sudo apt update
    sudo apt install -y docker.io
    sudo systemctl start docker
    sudo systemctl enable docker
    sudo usermod -aG docker $USER
    echo "Docker installed successfully. Please log out and log back in for Docker group changes to take effect."
    exit 0
else
    echo "Docker is already installed."
fi

if ! sudo systemctl is-active --quiet docker; then
    echo "Starting Docker..."
    sudo systemctl start docker
fi

if ! command_exists abctl; then
    echo "abctl not found. Installing abctl..."
    curl -LsfS https://get.airbyte.com | bash -
else
    echo "abctl is already installed."
fi

abctl_version=$(abctl --version)

if [[ -z "$abctl_version" ]]; then
    echo "abctl installation failed."
    exit 1
fi

echo "abctl version: $abctl_version"

echo "Starting Airbyte with abctl..."
abctl local install --port 7333

echo "Airbyte is running. You can access it by visiting http://localhost:7333 in your browser."
