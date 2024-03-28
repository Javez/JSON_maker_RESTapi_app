# Getting Started with JSON maker REST api app

Node version: v18.16.0\
Runs the app in the development mode.\
Open Postman [http://localhost:3000](http://localhost:3000) to make backend requests in local development.

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

[GET get-one-file]\
[URL] `http://localhost:3000/filename1`

[GET get-files]\
[URL] `http://localhost:3000/`

[POST add-file-with-data]\
[URL] `http://localhost:3000/`\
[BODY raw (json)] { "filename": "newfile3", "data": { "1": "1241" } }

[PUT update-file-with-new-data]\
[URL] `http://localhost:3000/filename1`\
[BODY raw (json)] { "data": { "Check": "checkvalue" } }

[DELETE update-file-with-new-data]\
[URL] `http://localhost:3000/filename1`

## Screenshots
![зображення](https://github.com/Javez/JSON_maker_RESTapi_app/assets/66317972/47600e19-25f0-4c0e-811b-54003e15e65e)

## Link of Postman collection
[open](https://crimson-desert-437459.postman.co/workspace/Team-Workspace~0e0b9352-6290-4318-842d-907c7cceafef/collection/23640783-1cfe1d08-2180-4fc4-82ca-1069a9d19dcf?action=share&creator=23640783)


If you aren't satisfied im very sad :d
