# HW11 - FriendFinder

## Application Deployed on Heroku

[https://friendfinder-peb.herokuapp.com/](https://friendfinder-peb.herokuapp.com/)

## Overview

To run the application:

* node .\server.js

Technologies used: 

* JavaScript
* Modules
* Node
* Express

This application is a basic friend finder application. The user answers survey questions about their personality and the application finds the best match in the data on the server side. The returned best match is displayed in a modal dialog. 

## Architecture

The application server is hosted in server.js. It fires up an express server and adds routes as listed in apiRoutes.js and htmlRoutes.js. There are two HTML pages, index and survey. The survey page lists 10 questions for the user to answer along with their name and a picture URL for them. The best match algorithm is computed by summing the absolute value of the differences between each search question. The friend in the server side data with the lowest sum is their best match. The user is then added to the data on the server and the new best friend is returned. 
