import React, { useEffect, useState } from "react";
import { RAPID_API_OPTIONS, getSearchedVideoUrl } from "./constants";

const useSearchVideo = (query) => {
  const [data, setData] = useState();
  useEffect(() => {
    handleSearchedVideos();
  }, [query]);
  const handleSearchedVideos = async () => {
    const url = getSearchedVideoUrl(query);
    const data = await fetch(url, RAPID_API_OPTIONS);
    const json = await data.json();
    console.log(json);
    setData(json?.items);
  };
  return { data };
};
export default useSearchVideo;
