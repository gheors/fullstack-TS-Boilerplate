# fullstack-TS-Boilerplate

## Run on localhost 

#### before running the script startDev.sh make sure your mongoDB service is up (running).
#### before running the startDev.sh script go inside .env, MONGODB_URI must be:
     MONGODB_URI=mongodb://localhost/appDatabase
### run on command line:
     ./startdev.sh

## Run on docker
#### this will build a docker container with the following images: mongodb, backendApp
#### before running the start.sh script go inside .env, MONGODB_URI must be:
     MONGODB_URI=mongodb://mongodb/appDatabase

### run on command line: 
     ./start.sh

## reset all Docker content
#### this will delete all containers, images and volumes on docker
     ./cleanDocker.sh


## Technologies

- **Typescript** programming language
- **nodeExpress** Rest framework
- **mongoDB** database