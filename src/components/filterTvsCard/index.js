import React, {useState, useEffect}  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterTvsCard(props) {
  const classes = useStyles();
  const [genres, setGenres] = useState([{ id: '0', name: "All" }])

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/tv/list?api_key="+ process.env.REACT_APP_TMDB_KEY
    )
      .then(res => res.json())
      .then(json => {
        // console.log(json.genres) 
        return json.genres
      })
      .then(apiGenres => {
        setGenres([genres[0], ...apiGenres]);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value)   // NEW
  }

  const handleTextChange = e => {
    handleChange(e, "title", e.target.value)
  }

  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value)
  };

  return (
    <>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the TV series.
        </Typography>
        <TextField
      className={classes.formControl}
      id="filled-search"
      label="Search field"
      type="search"
      value={props.titleFilter}
      variant="filled"
      onChange={handleTextChange}
    />
        <FormControl className={classes.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
      labelId="genre-label"
      id="genre-select"
      value={props.genreFilter}
      onChange={handleGenreChange}
    >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
    <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Sort the Tv Series.
          </Typography>
        </CardContent>
      </Card>
      </>
  );
}