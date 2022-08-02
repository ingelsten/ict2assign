import React from "react";
import Person from "../personCard/";
import Grid from "@material-ui/core/Grid";

const PersonList = (props) => {
  let personCards = props.persons.map((pers) => (
    <Grid key={pers.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Person key={pers.id} person={pers} />
    </Grid>
  ));
  return personCards;
};

export default PersonList;