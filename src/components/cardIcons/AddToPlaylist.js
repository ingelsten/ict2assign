import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistIcon from "@material-ui/icons/PlaylistAdd";

const AddToPlaylistsIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPlaylists = (e) => {
    e.preventDefault();
    context.addToPlaylists(movie);
  };
  return (
    <IconButton aria-label="add to playlists" onClick={handleAddToPlaylists}>
      <PlaylistIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistsIcon;