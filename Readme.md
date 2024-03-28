# Getting Started with JSON maker REST api app

Node version: v18.16.0\
Runs the app in the development mode.\
Open Postman [http://localhost:8080](http://localhost:8080) to make backend requests in local development.

## Project setup

-   Create folder and open in IDE;
-   Open the terminal and write command: `git clone https://github.com/Javez/JSON_maker_RESTapi_app.git`;
-   Write in command line: `npm install` ([Optional] or use manual install packages with list below);

## Packages

**Note: This is the list of `packages` for manual install!**

-   `body-parser express fs winston` required for app
-   `nodemon prettier` for local development

## Run Scripts

In root directory, run next command to start app:

-   `npm run start` (manual mode)
-   `npm run dev` (developer mode)
-   `npm run test` (under development)

## Basic Postman requests to running app

[GET get-one-file]
[URL] `http://localhost:3000/filename1`\

[GET get-files]
[URL] `http://localhost:3000/`\

[POST add-file-with-data]
[URL] `http://localhost:3000/`\
[BODY raw (json)] { "filename": "newfile3", "data": { "1": "1241" } }\

[PUT update-file-with-new-data]
[URL] `http://localhost:3000/filename1`\
[BODY raw (json)] { "data": { "Check": "checkvalue" } }\

[DELETE update-file-with-new-data]
[URL] `http://localhost:3000/filename1`\

## Docker container

**Under development**

## Screenshots

"Postman example"


If you aren't satisfied im very sad :d

This app can be uploaded at [Heroku](https://www.heroku.com) with docker.
