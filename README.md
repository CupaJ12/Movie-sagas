


# Project Name
Movie Sagas

## Description
 create a website that displays a list of movies, and allows you to click on each in order to pull up more details such as a description and the relevant genres. 

some problems I ran into: 
-Architecting. I found it challenging to build out the big picture of how I wanted to construct this project. I utilized lots of advice collected from instructors and peers in order to understand the various ways I could achieve the goals presented. 

-Struggled with query and router. This part of the project is the piece I felt least confident on, fortunately with notes and support I was able to achieve a working result. 

-CSS/styling. Finding a visually appealing way to present the underlying logic which the project utilizes is difficult for me. I took inspiration from previous projects I have completed, as well as using tips and tricks on google. I attempted to learn how to use cards, but found it too great of a timesink to fully realize that idea, unfortunately had to forgo that aspect. I hope to spend more time perfecting that in this project in the future. 

## Installation/start-up:
- Create a database named saga_movies_weekend

- The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries

- npm install in terminal
- npm run server in terminal
- npm run client in seperate terminal tab

## Usage:

this webapp is intended to present users with a list of movies. upon clicking a movie the app will provide more details pertaining to the specific movie clicked. 

## Built with:
HTML/CSS
JS
REACT
NODE.JS
REDUX
SAGAS
SQL

## License:
MIT License
License.txt found in the root of the source code

## Acknowledgement:
Thank you to Casie my coding instructor for teaching me the skills necessary to construct this project, thank you to Kris and Chris for their helpful guidance and suggestions on best practices and problem solving, and thank you to Peter for the time spent helping my classmates and I squash bugs. 

## todo/notes: (complete)

2 approaches:
currently putting id in redux
useEffect can pull id out of reducer and pull the movie info
similiar to feedback loop
get request for details i need


step 1: get id of the movie that you want
step 2: store that id in a reducer
2a: move the user from / to /details
2b:
display the id on the dom so you know its working
step 3: use that id to call in all the details for that movie in a get request
3a: 
3b:
step 4: 


[]- when a movie poster is clicked, a user should be brought to the /details view for that movie
details- check week 10 notes for grabbing ID


[]- details page: This should show all details **including ALL genres** for the selected movie, including title, description, and the image, too! Use Sagas and Redux to handle these requests and data.

[]- include a back to home button which takes users back to homepage
