import React from "react";
import useSuggestedVideos from "../utils/useSuggestedVideos";
import SuggestedVideoCards from "./SuggestedVideoCards";

const SuggestedVideoSection = ({ vidId }) => {
  console.log(vidId);
  const { data } = useSuggestedVideos(vidId);
  return (
    <>
      {data?.map((video) => {
        // console.log(video);
        return (
          <SuggestedVideoCards
            video={video}
            key={video?.id?.videoId}
            mode="Suggested"
          />
        );
      })}
    </>
  );
};

export default SuggestedVideoSection;
