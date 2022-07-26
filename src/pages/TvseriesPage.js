import React, { useState, useEffect } from "react";
import Header from "../components/headerTvList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TvList from "../components/tvList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const TvListPage = (props) => {
  const classes = useStyles();
  const [tvs, setTvs] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
         console.log(json);
        return json.results;
      })
      .then((tvs) => {
        setTvs(tvs);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"TV Series on the Air"} />
      </Grid>
      <Grid item container spacing={5}>
        <TvList tvs={tvs}></TvList>
      </Grid>
    </Grid>
  );
};
export default TvListPage;