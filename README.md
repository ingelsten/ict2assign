
# ICT Skills 2 Assignment.

Name: Anders Ingelsten - 20095402

## Overview.

Expanded the movies app with the following:

+ List of Top Rated Movies
+ List of TV Series
+ TV Series details
+ List of Actors
+ Actors Details

## Setup requirements.

To get a local copy up and running follow these simple example steps. Note the project was developed on a Windows 10 machine in Visual Studio Code.

**IMPORTANT**

You also need to get an API key from from https://www.themoviedb.org/ which will be used in the .env file.

**IMPORTANT**

1. Download the zipped file form <https://github.com/ingelsten/ict2assign.git>

2. Unzip the folder.

3. Move the folder to the appropriate location

4. Open VS Code and navigate to the folder location

5. Run command: npm install

6. Add .env file in the route folder.

7. In the .env file add the following:
 
  
        REACT_APP_TMDB_KEY="YOUR API KEY"
 
        FAST_REFRESH=false

8. Run the app by typing: npm start

9. To run the storybook type: npm run storybook

## App Design.

### Routing/Navigation.

+ /movies/toprated - lists the toprated movies.
+ /movies/tvseries - lists tv-series.
+ /movies/persons - lists pactors.
+ /tvs/:id - detailed information on a TV series.
+ /persons/:id - detailed information on a Actor.

### Views/Pages.

Lists toprated movies from the Discover endpoint. Filtering on genre attributes is supported.
![][toprated]

Lists toprated TV Series from the Discover endpoint. Filtering on genre attributes is supported.
![][tvseries]

Lists toprated Actors from the Discover endpoint. F
![][actors]

Shows detailed information on a specific TV-series
![][tvdetail]

Shows detailed information on a specific actor
![][actordetail]


### Component catalogue.

Highlighted in yellow of Storybook cards

![][stories]

## Caching.

Not Implemented outside original scope

![][caching]

## Authentication (if relevant).

Not Implemented

## Server-side persistence (if relevant)

Not Implemented

## Additional features (if relevant),

Not Implemented

## Independent learning (if relevant),

Some fault queirying on https://stackoverflow.com/ 

[d1]: ./public/discover1.png
[d2]: ./public/discover2.png
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png
[toprated]: ./public/toprated.png
[tvseries]: ./public/tvseries.png
[actors]: ./public/actors.png
[tvdetail]: ./public/tvdetail.png
[actordetail]: ./public/actordetail.png