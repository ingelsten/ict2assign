import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateTvListPage'
import { getTvOnAir } from "../api/tmdb-api";

const TvListPage = (props) => {
  const [tvs, setTvs] = useState([]);
  const favourites = tvs.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  const addToFavourites = (tvId) => {
    const updatedTvs = tvs.map((m) =>
      m.id === tvId ? { ...m, favourite: true } : m
    );
    setTvs(updatedTvs);
  };

 useEffect(() => {
    getTvOnAir().then(tvs => {
      setTvs(tvs);
    });
     }, []);


  return (
    <PageTemplate
      title="Discover Tvs"
      tvs={tvs}
      selectFavourite={addToFavourites}
    />
  );
};
export default TvListPage;