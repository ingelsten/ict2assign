import React, {useState, useEffect}  from "react";
import { useParams } from "react-router-dom";
import PersonHeader from "../components/headerPerson/";
import PersonDetails from "../components/personDetails/";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
}));

const PersonPage = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((person) => {
        // console.log(person)
        setPerson(person);
      });
  }, [id]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => json.posters)
      .then((images) => {
        // console,log(images)
        setImages(images);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {person ? (
        <>
          <PersonHeader person={person} />
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid item xs={1}>
              <div className={classes.root}>
              </div>
            </Grid>
            <Grid item xs={9}>
              <PersonDetails person={person} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default PersonPage;