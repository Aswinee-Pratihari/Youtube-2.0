import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Feed = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      // console.log(json);
      setVideo(json?.items);
    };
    getVideos();
  }, []);
  return (
    <div className="px-5">
      <div className="grid justify-start items-start  grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10 h-screen">
        {video?.map((vid) => {
          return <VideoCard video={vid} key={vid?.id} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
