import React, { useEffect, useState } from "react";
import { RAPID_API_OPTIONS, getSuggestedVideoUrl } from "./constants";

const useSuggestedVideos = (vidId) => {
  const [data, setData] = useState();
  useEffect(() => {
    handleSuggestedVideos();
  }, [vidId]);

  const handleSuggestedVideos = async () => {
    const url = getSuggestedVideoUrl(vidId);
    const data = await fetch(url, RAPID_API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    setData(json?.items);
  };
  return { data };
};

export default useSuggestedVideos;
