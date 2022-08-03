import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateTvListPage'

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
    fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        return json.results;
      })
      .then((tvs) => {
        setTvs(tvs);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Discover Tvs'
      tvs={tvs}
      selectFavourite={addToFavourites}
    />
  );
};
export default TvListPage;