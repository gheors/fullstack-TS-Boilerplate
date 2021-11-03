#!/bin/bash

taskkill /f /im node.exe

cd ./backend
npm i
npm run dev