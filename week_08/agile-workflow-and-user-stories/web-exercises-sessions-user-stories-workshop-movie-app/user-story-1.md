# Title

List of current movies

## Value Proposition

As a `movie-enthusiast` <br>
I want to `see a list of all movies` <br>
so that `I can choose a movie to watch` <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- all available movies should be shown in a list
- all movies are described with a "thumbnail"
- all movies have the "title" shown under the "thumbnail"
- all movies have the "rating" shown in the top right corner of the "thumbnail"
- if there is a loading error of the movie data, there should be a message shown for the user:
  "Sorry, we couldn't retrieve the latest movie data at the moment. Please try again later."

## Tasks

- create a branch
- retrieve movie data from resource API
- create a List component
- inside the List component create an item for every data instance fetched with the following information:
  - "thumbnail"
  - "title"
- create a Rating component that shows the "rating" of the movie
- render the Rating component above the "thumbnail" of every movie in the top right corner
