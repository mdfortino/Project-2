# Project-2 - Breather App
## Description
Breather is an app for teams to cultivate mindfulness through intention setting and a collection of free resources for practicing meditation. Whether you’re a part of a team of athletes or coworkers, Breather allows you to take the time to breathe and cultivate awareness in order to bring more meaning and purpose to your mission.

## Example
![ ](img/screen-shot.png)



## Features
There are features for setting intentions, commenting on intentions, deleting intentions and for accessing a collection of guided meditations. Additionally, login and logout capabilities were built via passport authentication. 
## Technologies Used
* MongoDB/Mongoose
* Express
* Handlebars
* Node
* CSS
* Heroku

## Installation
You can access the app through the following heroku link: https://breatherapp.herokuapp.com/ or via the following installation steps:
1. To install all necessary dependencies, run :
```
$ npm install
```
2. then launch the server on port 3333 using: 
```
$ nodemon
```
3. To access the data launch MongoDB and in a new tab use mongo to find all users in the database
```
$ mongod
```
```
$ mongo
```
```
$ show dbs
$ use db.BE
$ db.users.find().pretty()
```
## Unsolved Problems
Future improvements include adding the functionality for the user to be able to add to the collection of meditations and for the data to be saved and rendered in the view. Currently, the data is being saved and shown in the database; however, issues need to be resolved to have it render in the view. I would also like to change the layout of the homepage potentially. Additionally, I tested including a meditation timer created with JavaScript for users to have the option to access. I will need to revisit properly implementing the working code in order for the timer to work in this app. 
## Contribution Guidelines 
To contribute to the code, identify bugs, and propose improvements, please see the below links: 
Link to project’s main repository: https://github.com/mdfortino/Project-2 Link to project’s issue tracker: https://github.com/mdfortino/Project-2/issues
