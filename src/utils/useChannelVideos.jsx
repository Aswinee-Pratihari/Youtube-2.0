import React, { useEffect, useState } from "react";
import { RAPID_API_OPTIONS, getChannelVideosUrl } from "./constants";

const useChannelVideos = (channelId) => {
  const [videos, setvideos] = useState();
  useEffect(() => {
    handleVideos();
  }, [channelId]);

  const handleVideos = async () => {
    const url = getChannelVideosUrl(channelId);
    const data = await fetch(url, RAPID_API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    setvideos(json?.items);
  };
  return { videos };
};

export default useChannelVideos;
