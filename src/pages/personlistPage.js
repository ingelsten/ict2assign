import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templatePersonListPage'

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

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=true&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        return json.results;
      })
      .then((persons) => {
        setPersons(persons);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Discover Persons'
      persons={persons}
  //    selectFavourite={addToFavourites}
    />
  );
};
export default PersonListPage;