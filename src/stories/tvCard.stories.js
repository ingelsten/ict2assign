import React from "react";
import TvCard from "../components/tvCard";
import SampleTv from "./sampleDataTV";

export default {
  title: "Home Page/TvCard",
  component: TvCard,
};

export const Basic = () => {
  return (
    <TvCard
      tv={SampleTv}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTv, poster_path: undefined };
  return (
    <tvCard
      tv={sampleNoPoster}
      action={(tv) => <AddToFavoritesIcon tv={tv} />}
      taging={(tv) => null}
    />
  );
};
Exceptional.storyName = "exception";