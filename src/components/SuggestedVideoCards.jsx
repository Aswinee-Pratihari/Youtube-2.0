import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const SuggestedVideoCards = ({ video, mode }) => {
  const baseClass = "space-y-3";
  // console.log(video);
  const conditionalClass = mode === "Suggested" ? "flex-1" : "flex-[3]";
  const combinedClass = `${baseClass} ${conditionalClass}`;
  const timeAgo = formatDistanceToNow(new Date(video?.snippet?.publishedAt), {
    addSuffix: true,
  });
  return (
    <div className="flex items-start space-x-3 p-0 bg-transparent my-5  mr-4">
      {/* <div className=" flex-[1] rounded-xl"> */}
      <Link
        to={`/watch/${video?.id?.videoId}`}
        className="w-28 aspect-video  rounded-xl flex-[1]   object-cover"
      >
        <img
          src={
            video?.snippet?.thumbnails?.high?.url ??
            video?.snippet?.thumbnails?.default?.url
          }
          alt=""
          className="w-full aspect-video  rounded-xl   object-cover"
        />
      </Link>

      <div className={combinedClass}>
        <h4 className="font-semibold text-base">
          {video?.snippet?.title?.slice(0, 100)}...
        </h4>

        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <h5 className="text-gray-400 text-sm font-medium flex-1">
            {video?.snippet?.channelTitle}
          </h5>
        </Link>
        {mode == "search" && (
          <p className="text-gray-200 text-sm font-medium ">
            {video?.snippet?.description.slice(0, 200)}
          </p>
        )}
        <span className="text-gray-400 text-sm font-medium">{timeAgo}</span>
      </div>
    </div>
  );
};

export default SuggestedVideoCards;
