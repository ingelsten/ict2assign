import React from "react";
import FilterPersonsCard from "../components/filterPersonsCard";

export default {
  title: "Home Page/FilterPersonsCard",
  component: FilterPersonsCard,
};

export const Basic = () => {
  return <FilterPersonsCard />;
};
Basic.storyName = "Default";