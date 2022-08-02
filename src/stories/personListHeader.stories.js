import React from "react";
import PersonListHeader from "../components/headerPersonList";

export default {
  title: "Home Page/Header",
  component: PersonListHeader,
};

export const Basic = () => <PersonListHeader title={'Discover Persons'} />;

Basic.storyName = "Default";