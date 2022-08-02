import React from "react";
import PersonHeader from "../components/headerPerson";
import SamplePerson from "./sampleDataPerson";

export default {
  title: "Person Details Page/PersonHeader",
  component: PersonHeader,
};

export const Basic = () => <PersonHeader person={SamplePerson} />;
Basic.storyName = "Default";