import React, {useState, useEffect}  from "react";
import { useParams } from "react-router-dom";
import TvHeader from "../components/headerTv/";
import TvDetails from "../components/tvDetails/";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { getTvOnAirDetails } from "../api/tmdb-api";
import { getTvOnAirImages } from "../api/tmdb-api";

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

const TvPage = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const [tv, setTv] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
   getTvOnAirDetails(id).then((tv) => {
        // console.log(tv)
        setTv(tv);
      });
  }, [id]);


  useEffect(() => {
    getTvOnAirImages(id).then((images) => {
      setImages(images);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);



  return (
    <>
      {tv ? (
        <>
          <TvHeader tv={tv} />
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
              <TvDetails tv={tv} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default TvPage;