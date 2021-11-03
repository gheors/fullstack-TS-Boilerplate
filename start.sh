#!/bin/bash

taskkill /f /im node.exe

docker-compose build
docker-compose up -d
