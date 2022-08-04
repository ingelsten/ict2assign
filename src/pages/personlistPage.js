import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templatePersonListPage'
import { getPersons } from "../api/tmdb-api";

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
    getPersons().then((persons) => {
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