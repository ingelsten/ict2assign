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

const PersonDetails = ( props) => {
  const classes = useStyles();
  const person = props.person

  return (
    <>
      <Typography variant="h5" component="h3">
      Biography
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>
      <div className={classes.chipRoot}>
      <Paper component="ul" className={classes.chipSet}>
        <Chip label={`Place of Birth: ${person.place_of_birth}`} />
        <Chip label={`Birth Date: ${person.birthday}`} />
      </Paper>
      <Paper component="ul" className={classes.chipSet}>
        <Chip label={`Known for: ${person.known_for_department}`} />
        <Chip label={`Also known as: ${person.also_known_as}`} />
      </Paper>
      </div>
      </>
  );
};
export default  PersonDetails ;