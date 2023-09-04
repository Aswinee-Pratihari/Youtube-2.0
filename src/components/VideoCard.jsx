import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video, mode }) => {
  const timeAgo = formatDistanceToNow(new Date(video?.snippet?.publishedAt), {
    addSuffix: true,
  });

  const title =
    "Boss Sneaks Into The Housemaids Room Every Night Until His Mother-In Law-Finds Out And Made Them Pay";
  return (
    <div className="flex justify-center flex-col items-center  rounded-xl ">
      <Link to={`/watch/${video?.id?.videoId ?? video?.id}`}>
        <img
          src={
            video?.snippet?.thumbnails?.maxres?.url ??
            video?.snippet?.thumbnails?.high?.url
          }
          alt=""
          className="w-30 h-30 rounded-xl overflow-hidden object-cover"
        />
      </Link>
      <div className="detils   items-start">
        <div className="gap-3 ">
          <h2 className="text-sm font-bold text-start justify-start">
            {video?.snippet?.title?.slice(0, 60)}...
          </h2>
          <Link to={`/channel/${video?.snippet?.channelId}`}>
            <h5 className="text-gray-400 text-sm font-medium">
              {video?.snippet?.channelTitle}
            </h5>
          </Link>
          <h6 className="text-gray-400 text-sm font-medium">{timeAgo}</h6>
          {/* timeAgo */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
