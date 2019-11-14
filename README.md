# Booqs
Manage your book collection.

## Installation
1. Clone the project with `git clone`
2. Go into the directory with `cd Booqs`
2. Run `npm i` to install all dependencies
3. Run `npm start` or use `nodemon` to start the server

## Enviroment Variables
- `MONGO` (config: `mongodb://localhost/booqs`)
- `PORT` (config: `8080`)

## Folder Structure
```
.
├── config
│   └── config.json
├── controllers
│   └── example.controller.js
├── routes
│   └── example.routes.js
│   └── routes.js
├── utils
│   ├── database.util.js
│   └── extension.util.js
├── package.json
├── package-lock.json
├── README.md
└── server.js
```