#!/bin/bash
set -e

echo "Starting Airbyte..."
cd airbyte
chmod +x start.sh
./start.sh

cd ..

echo "Starting Qdrant with Docker Compose..."
cd qdrant
docker-compose -f docker-compose-qdrant.yml up -d

echo "Airbyte and Qdrant have been started successfully."
