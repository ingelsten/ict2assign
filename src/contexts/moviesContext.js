import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState( {} );
  const [favourites, setFavourites] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
      
    }console.log(movie)
  };
  

  const addToPlaylists = (movie) => {
    if (!playlists.includes(movie.id)) {
      let newPlaylists = [...playlists, movie.id];
      setPlaylists(newPlaylists);
      
    }
    console.log(movie)
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  
  return (
    <MoviesContext.Provider
      value={{
        favourites,
        playlists,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToPlaylists
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;