<h1 align="center">
Welcome To Queue Overflow
</h1>

<h2 align="center">
<a href="https://flow-over-stack-3000.herokuapp.com/">View Live</a>
</h2>

Queue Overflow, a clone of Stack Overflow, is a full-stack web application that replicates the primary features of **_stackoverflow.com_**. Similarly to Stack Overflow, users have the ability to 
* create an account / login
* post and answer questions
* edit/delete their questions and answers
* upvote/downvote questions and answers
* search for specific questions

![](https://github.com/haewon6640/Queue-Overflow/blob/main/readme/queue_overflow.gif)
## Technologies Used
* React
* Redux
* Ruby on Rails
* PostgreSQL
* Webpack
* CSS

## Features
### Questions Search and Filter
Users can find questions through the use of either the search bar, tags, user page, or filters on the questions index page. Users can view, sort, and search through all of the tags to find the relevant questions.

### CRUD (Create, Read, Update, Delete) on Questions, Answers, Votes
Users can perform all CRUD functions for the posted questions, answers, and votes.\

### Polymorphic Upvote/Downvote
Users can upvote or downvote questions and answers, which leads to a boost in the related user's "reputation" point system with similar algorithm to Stack Overflow's reputation system.

## Code Highlights
### Splash Animation using React Hooks
![](https://github.com/haewon6640/Queue-Overflow/blob/main/readme/Home%20Animation.png)

### Backend Route for Creating Posts with Tags
Tags are created using three-table structure. Via the table “question_tags” the bookmarks and the tags are n-to-m related. Each tag can be used together with different tags and vice versa.
![](https://github.com/haewon6640/Queue-Overflow/blob/main/readme/Tags.png)

### Live Score Update on Redux State using Polymorphic Votes
![](https://github.com/haewon6640/Queue-Overflow/blob/main/readme/Score%20Update.png)

