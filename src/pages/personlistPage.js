import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templatePersonListPage'
import { getPersons } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToPlaylistsIcon from '../components/cardIcons/AddToPlaylist'


const PersonListPage = (props) => {
  const [persons, setPersons] = useState([]);

  //const favourites = persons.filter(m => m.favourite)
  //localStorage.setItem('favourites', JSON.stringify(favourites))

  //const addToFavourites = (personId) => {
  //  const updatedPersons = persons.map((m) =>
  //    m.id === personId ? { ...m, favourite: true } : m
  //  );
  //  setPersons(updatedPersons);
 // };

 const playlists = persons.filter(m => m.playulist)
 localStorage.setItem('playlist', JSON.stringify(playlists))
 const addToPlaylists = () => null;

  useEffect(() => {
    getPersons().then((persons) => {
        setPersons(persons);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 // return (
 //   <PageTemplate
 //     title="Discover Persons"
 //     persons={persons}
  //    selectFavourite={addToFavourites}
 //   />
//  );
//};

return (
  <PageTemplate
    title="Toprated Person"
    persons={persons}
    action={(person) => {
      return <AddToPlaylistsIcon person={person} />
    }}
  />
);
};

export default PersonListPage;

