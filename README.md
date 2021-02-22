
# Note API

Note API is a node js API, build to save, update, delete and set achieved or unarchived.

## Installation

### Environment Setup
* [Postgres SQL](https://www.postgresql.org/)
* [Node Js](https://nodejs.org/en/)

### Database Setup

* Install Postgres SQL
* Create database
```bash
CREATE DATABASE notes_db
```
### API Setup
* Download the codebase
* npm install
* Create .env file for configurations (below sample)
```bash
## server config
API_ID=v0_note_api
API_NAME=Note API
API_PORT=3000

#Database Localhost
DATABASE_NAME=notes_db 
DATABASE_USER=testuser
DATABASE_PASSWORD=null
```
* Tabels will be auto generated from models

## Usage

How to start the server? 
```bash
npm start server
```

The server will be run on 3000 port (if you changed .env file "API_PORT" it will run on that port) 


## API Documentation

### Save Note
```bash
http://localhost:3000/note-app/api/v0/note/save
```
Method Type : POST

Payload :
```bash
{
    "description": "Sample Note"
}
```

Response : Success 
```bash
{
    "achived": false,
    "noteId": 1,
    "description": "Sample Note"
}
```

Response : Failed 
```bash
{
    "status": 2,
    "error": "Error Message"
}
```

### Get All Notes
```bash
http://localhost:3000/note-app/api/v0/note
```
Method Type : GET

Response : Success 
```bash
[
    {
        "noteId": 1,
        "description": "Sample Note 1",
        "achived": false
    },
    {
        "noteId": 2,
        "description": "Sample Note 2",
        "achived": false
    }
]
```

Response : Failed 
```bash
{
    "status": 2,
    "error": "Error Message"
}
```

### Get Note By Id
```bash
http://localhost:3000/note-app/api/v0/note/:id
```
Method Type : GET

Response : Success 
```bash
{
    "noteId": 1,
    "description": "Sample Note 1",
    "achived": false
}
```

Response : Failed 
```bash
{
    "status": 2,
    "error": "Error Message"
}
```

### Get All Achived Notes
```bash
http://localhost:3000/note-app/api/v0/note/achived
```
Method Type : GET

Response : Success 
```bash
[
    {
        "noteId": 1,
        "description": "Sample Note 2",
        "achived": true
    }
]
```

Response : Failed 
```bash
{
    "status": 2,
    "error": "Error Message"
}
```

### Get All Unachived Notes
```bash
http://localhost:3000/note-app/api/v0/note/unachived
```
Method Type : GET

Response : Success 
```bash
[
    {
        "noteId": 2,
        "description": "Sample Note",
        "achived": false
    }
]
```

Response : Failed 
```bash
{
    "status": 2,
    "error": "Error Message"
}
```

### Update Note
```bash
http://localhost:3000/note-app/api/v0/note/update/:id
```
Method Type : PUT

Payload :
```bash
{
    "description": "Sample Note 2"
}
```

Response : Success 
```bash
{
    "noteId": 1,
    "description": "Sample Note 2",
    "achived": false
}
```

Response : Failed 
```bash
{
    "status": 2,
    "error": "Error Message"
}
```

### Set Note as Achived
```bash
http://localhost:3000/note-app/api/v0/note/achive/:id
```
Method Type : PUT

Response : Success 
```bash
{
    "noteId": 1,
    "description": "Sample Note 2",
    "achived": true
}
```

Response : Failed 
```bash
{
    "status": 2,
    "error": "Error Message"
}
```

### Set Note as Unachived
```bash
http://localhost:3000/note-app/api/v0/note/unachive/:id
```
Method Type : PUT

Response : Success 
```bash
{
    "noteId": 1,
    "description": "Sample Note 2",
    "achived": false
}
```

Response : Failed 
```bash
{
    "status": 2,
    "error": "Error Message"
}
```

### Delete Note
```bash
http://localhost:3000/note-app/api/v0/note/delete/:id
```
Method Type : DELETE

Response : Success 
```bash
{
    "message": "Successfully deleted"
}
```

Response : Failed 
```bash
{
    "status": 2,
    "error": "Error Message"
}
```

##  Why?

### Why did I selected Node js ? 
 * Easy to learn & develop
 * High Performance
 * development freedom
 * Support services, documentation
 * Handles the requests simultaneously
 * Highly extensible

### Why did I selected Postgres Sql ? 
* Well structured
* Data acuraccy
* Security
* Easy to validate data and data errors are less
* Scalability

##  More Developments
* Search notes by description
* Delete multiple notes
* Clear all notes
