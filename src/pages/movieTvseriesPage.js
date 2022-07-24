import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getOntheair } from '../api/tmdb-api'
import AddToPlaylistsIcon from '../components/cardIcons/AddToPlaylist'

const OntheairPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('Ontheair', getOntheair)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  // These three lines are redundant; we will replace them laterg.
//const favourites = movies.filter(m => m.favouurite)
// localStorage.setItem('favourites', JSON.stringify(favourites))
// const addToFavourites = () => null;

  const playlists = tvs.filter(m => m.playulist)
  localStorage.setItem('playlist', JSON.stringify(playlists))
  const addToPlaylists = () => null;
  

  return (
    <PageTemplate
      name="Ontheair Movies"
      tv={tvs}
      action={(tv) => {
        return <AddToPlaylistsIcon tv={tv} />
      }}
    />
);
};

export default OntheairPage;