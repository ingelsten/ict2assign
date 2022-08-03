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
        console.log(person)
        setPerson(person);
      });
  }, [id]);

  console.log(id)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ) 
    .then((res) => res.json())
    .then((json) => json.posters)
    .then((images) => {
      console.log(images)
    //  setImages(images);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(id)
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
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.file_path}
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