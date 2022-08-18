import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
}));

const TvDetails = ( props) => {
  const classes = useStyles();
  const tv = props.tv

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tv.overview}
      </Typography>
      <div className={classes.chipRoot}>

      <Paper component="ul" className={classes.chipSet}>
        <Chip label={`Origin Country Initial: ${tv.origin_country}`} />
        <Chip label={`Vote Avarage: ${tv.vote_average}`} />
        <Chip label={`Released: ${tv.first_air_date}`} />
       </Paper>
      <Paper component="ul" className={classes.chipSet}>
        <Chip label={`Number of Seasons: ${tv.number_of_seasons}`} />
        <Chip label={`Number of Episodes: ${tv.number_of_episodes}`} />
        <Chip label={`Episode Run Time: ${tv.episode_run_time} min`} />
      </Paper>
      </div>
      </>
  );
};
export default  TvDetails ;