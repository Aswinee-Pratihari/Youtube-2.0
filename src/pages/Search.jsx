import React from "react";
import { useParams } from "react-router-dom";
import useSearchVideo from "../utils/useSearchVideo";
import SuggestedVideoCards from "../components/SuggestedVideoCards";
import TabName from "../components/TabName";

const Search = () => {
  const { query } = useParams();
  //   console.log(query);

  const { data } = useSearchVideo(query);

  return (
    <TabName title={query}>
      <div className="container mx-auto">
        {data?.map((video) => {
          return (
            <SuggestedVideoCards mode="search" video={video} key={video?.id} />
          );
        })}
      </div>
    </TabName>
  );
};

export default Search;
