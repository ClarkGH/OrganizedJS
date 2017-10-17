// ExpressJS: an introduction

/*
  Express.js or Express, is a framework for creating web applications and APIs
  As I write this, it's the most widely used server framework for Node.js
  Official documentation: https://expressjs.com/
*/

// Getting started:

// Example 1: Simple Express Server

/*
  1. Make sure you have NPM and Node installed
    - If not, Follow the instructions here: https://nodejs.org/en/
  
  2. To create your first Express server, type the following:
    a. create and cd to project directory
    b. Inside directory via terminal:
      i. $ npm init 
        - don't worry too much about naming or versioning to start
      ii. $ npm install express --save 
        - install express and save to dependencies
        - you can also use yarn if you'd like $ yarn add express
    c. Create a server.js file inside your directory and copy the below code
*/

const express = require('express'),
  app = express();

app.get('/', (req, res) => {
  res.send('Hi! I\'m your first server!');
}); // Get request, more on this in future lessons

app.listen(3000, () => {
  console.log('Your first application is running on port 3000!');
}); // Once the server is running, this message will run in your server logs (seen in terminal for now)

/*
  3. Save the above code if you haven't.
  4. In the directory:
    a. $ node server.js
  5. Load http://localhost:3000/
  6. Congratulations, you should have your first server up and running!
*/