# Movie App - GraphQL + Express.js + React

This API was made with Express.js, graphQL and Sequelize to manage a list of movies, actors and genres.
The client app was made using Creat React App
All the information is stored in a MySQL database.

## First time running

The first time we build the docker images, new volumes will be created containing the database and node_modules folders. This database should be populated with the example data defined into the seeders files. To run for the very first time the application you have to use the following command.

```console
~$ docker-compose -f docker-compose.yaml -f docker-compose.seed.yaml up --build
```

## Running next time

The seeders should be exectuted once, otherwise the data into the database will be duplicated. Now that you have already the database populated, just need to execute the images without the docker-compose.seed.yaml file.

```console
~$ docker-compose up
```

## Rebuild without seeds

If you need to create a new build of the images, run the following command:

```console
~$ docker-compose up --build
```

## About the application

This is a simple demo to show how to create a graphQL API, and use it from a react client.

### Start

While docker-compose is running, yo can enter to the homepage of the client <http://localhost:3000>

### What can I do?

You can navigate into lists of movies, actors and genres. You can also click on each item on the lists to enter to the detail views. For the sake of simplicity, only Movies has forms to create or edit.
