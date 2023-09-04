import React from "react";

import Header from "../components/Header";
import ButtonGroup from "../components/ButtonGroup";

import Feed from "../components/Feed";
import TabName from "../components/TabName";
const Home = () => {
  const buttons = [
    "Music",
    "Dance",
    "Adventure",
    "Cricket",
    "Comedy",
    "Action",
    "Darma",
    "Football",
    "Bollywood",
    "Hollywood",
    "Shah Rukh Khan",
    "South Movies",
    "Live",
  ];
  return (
    <TabName title="Youtube 2.0">
      {/* <div className="h-screen w-full bg-gray-500 opacity-40 absolute"></div> */}
      <ButtonGroup buttons={buttons} />
      <Feed />
    </TabName>
  );
};

export default Home;
