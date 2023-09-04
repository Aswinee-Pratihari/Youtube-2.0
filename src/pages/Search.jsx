import React from "react";
import { useParams } from "react-router-dom";
import useSearchVideo from "../utils/useSearchVideo";
import SuggestedVideoCards from "../components/SuggestedVideoCards";

const Search = () => {
  const { query } = useParams();
  //   console.log(query);

  const { data } = useSearchVideo(query);

  return (
    <div className="container mx-auto">
      {data?.map((video) => {
        return <SuggestedVideoCards mode="search" video={video} />;
      })}
    </div>
  );
};

export default Search;
