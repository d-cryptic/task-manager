# Task Manager

## Learnings

1. How to setup and connect to cloud database - MongoDB
2. How to perform CRUD operations

## Project Setup

1. In order to run the project, setup `.env` and set `MONGO_URI` equal to DB connection string.
2. In the code, port value is `5000`
3. Run `npm start`

## Packages:

1. `express` - `npm i express`
2. `nodemon` - `npm i nodemon --D`
3. `mongoose` - `npm i mongoose`
4. `dotenv` - `npm i dotenv`

## Rest Api - Representational State Transfer

1. `GET` - api/tasks - Get all tasks
2. `POST` - api/tasks - Create Task
3. `GET` - api/tasks/:id - Get Task
4. `PUT/PATCH` - api/tasks/:id - Update Task
5. `DELETE` - api/tasks/:id - Delete Task

## MongoDB

- NoSQL, Non Relational DB
- Store JSON
- Easy to get started
- Free Cloud Hosting - Atlas

## PUT vs PATCH

- `PUT` - updates the actual whole data
- `PATCH` - updates partial data
