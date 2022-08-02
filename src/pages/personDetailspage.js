import React from "react";
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
  const person = props.person;
  const images = props.images;

  return (
    <>
      {person ? (
        <>
          <PersonHeader person={person} />
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid item xs={3}>
              <div className={classes.root}>
                <ImageList
                  rowHeight={500}
                  className={classes.gridList}
                  cols={1}
                >
                  {images.map((image) => (
                    <ImageListItem
                      key={image.file_path}
                      className={classes.gridListTile}
                      cols={1}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${image}`}
                        alt={image.profile_path}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
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