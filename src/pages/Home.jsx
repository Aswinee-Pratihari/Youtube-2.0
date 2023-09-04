import React from "react";

import Header from "../components/Header";
import ButtonGroup from "../components/ButtonGroup";

import Feed from "../components/Feed";
const Home = () => {
  console.log(import.meta.env.VITE_RAPID_API_KEY);
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
    <div>
      {/* <div className="h-screen w-full bg-gray-500 opacity-40 absolute"></div> */}
      <ButtonGroup buttons={buttons} />
      <Feed />
    </div>
  );
};

export default Home;
