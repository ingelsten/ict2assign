import React from "react";
import Header from "../components/headerPersonList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PersonList from "../components/personList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const PersonListPage = (props) => {
  const classes = useStyles();
  const persons = props.persons;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <PersonList persons={persons}></PersonList>
      </Grid>
    </Grid>
  );
};
export default PersonListPage;