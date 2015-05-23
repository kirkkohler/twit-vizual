# Twit Vizual
===========

Visual display of twitter feeds and more.


This project will use the MEAN architecture stack.  

| Letter | Description |
| ------ | ---- |
| M | mongodb - http://www.mongodb.org/ |
| E | express - http://expressjs.com/ |
| A | angularjs - http://angularjs.org/ |
| N | nodejs - http://nodejs.org/ |

* RESTful Node API using Express
* MongoDB interaction using mongoose
* Angular AJAX $http calls
* Single page application w/ no refreshes

## Boilerplate Projects to Setup environment
---
This project started from the angular-fullstack yeoman project: https://github.com/DaftMonk/generator-angular-fullstack

### Notes
---
Project doesn't currently use Jasmin, Coffee Script or Sass.  Maybe, in the future.  

# Run Application
---
Have node, grunt, yeoman and mongoose installed.
From node command prompt and within project directory run the following

	grunt serve

# Release Application
---
Pushing to Heroku is simple.  

1. grunt build
2. git commit dist 
3. git subtree push --prefix dist origin prod

# Application Structure
---

## server.js
---
	This is the file where we will:
	
 		* Configure our application
 		* Connect to our database
 		* Set the app to listen on a port so we can view it in our browser
 		
  TBD 02/2014
 		* Create our Mongoose models
 	TBD 02/2014
 		* Define routes for our RESTful API
 	TBD 02/2014
 		* Define routes for our frontend Angular application

### Server API
---
How a frontend application should request data from the API.

| HTTP | Verb |	URL | Description |
| ---- | ---- | ---- | ---- | 
| GET | /api/tweets | Get latest streaming tweets from twitter |

TBD 02/2014
| POST | /api/todos | Create a single todo | 
| DELETE | /api/todos/:todo_id | Delete a single todo |

## Angular
---

### twit-vizual/app/scripts/app.js
---
Sets up angular module & controller which will call server API when user interacts with our Angular View.

### twit-vizual/app/views/index.html (view)
---
HTML to interact with Angular

* Assign Angular module and controller

TBD 02/2014
* Initialize the page by getting all todos
* Loop over the todos
* Have a form to create todos
* Delete todos when they are checked
