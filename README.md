# Task Manager REST api

## Technonogies used

* ExpressJs
* NodeJs
* Mongodb
* Mongoose

## Run locally

* Clone repository
```
git clone https://github.com/Oggy107/express-task-manager/
```

* Run `npm install` to install dependencies
* Create file named `.env` in root of the repository and store mongodb connection string in format `MONGO_URI=<Your mongodb connection-string>` in the file. [Here's](https://docs.mongodb.com/manual/reference/connection-string/#connection-string-formats) more about mongodb connection-string.
* Start api server by running `npm start`

## Base url

```
http://localhost:3000/api/v1/tasks
```
## Endpoints

* ### Get all tasks
```
GET /
```

* ### Get single task
```
GET /:id
```

* ### Insert task
```
POST /
```

* ### Update task
```
PUT /:id
```

* Delete task
```
DELETE /:id
```

***Request body for PUT and POST requests must include json in following format***
```json
{
    "name": "Buy milk",
    "completed": false
}
```