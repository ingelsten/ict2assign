import React from "react";
import TvListHeader from "../components/headerTvList";

export default {
  title: "Home Page/Header",
  component: TvListHeader,
};

export const Basic = () => <TvListHeader title={'Discover On Air TV Series'} />;

Basic.storyName = "Default";