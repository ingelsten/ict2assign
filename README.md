
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

7. In the .env file add the following
 
  
REACT_APP_TMDB_KEY= "YOURKEY"
 
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

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.
>Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported.

![][d1]

![][d2]

>Shows detailed information on a specific movie

![][detail]


### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

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