import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getUpcoming } from '../api/tmdb-api'
import AddToPlaylistsIcon from '../components/cardIcons/AddToPlaylist'

const UpcomingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcoming)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const playlists = movies.filter(m => m.playulist)
  localStorage.setItem('playlist', JSON.stringify(playlists))
 // const addToPlaylists = () => null;
  

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistsIcon movie={movie} />
      }}
    />
);
};

export default UpcomingPage;


