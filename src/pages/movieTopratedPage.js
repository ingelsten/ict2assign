import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getToprated } from '../api/tmdb-api'
import AddToPlaylistsIcon from '../components/cardIcons/AddToPlaylist'

const TopratedPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('Toprated', getToprated)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // These three lines are redundant; we will replace them laterg.
//const favourites = movies.filter(m => m.favouurite)
// localStorage.setItem('favourites', JSON.stringify(favourites))
// const addToFavourites = () => null;

  const playlists = movies.filter(m => m.playulist)
  localStorage.setItem('playlist', JSON.stringify(playlists))
  const addToPlaylists = () => null;
  

  return (
    <PageTemplate
      title="Toprated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistsIcon movie={movie} />
      }}
    />
);
};

export default TopratedPage;


