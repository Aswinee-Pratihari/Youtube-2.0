import React, { useEffect } from "react";
import VideoCard from "../components/VideoCard";
import useChannelDetails from "../utils/useChannelDetails";
import { useParams } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";
import { AiOutlineArrowRight } from "react-icons/ai";
import useChannelVideos from "../utils/useChannelVideos";
import ButtonGroup from "../components/ButtonGroup";
import { splitKeyword } from "../utils/splitKeyword";
import TabName from "../components/TabName";

const Channel = () => {
  const { channelId } = useParams();
  const { details } = useChannelDetails(channelId);
  const { videos } = useChannelVideos(channelId);
  const buttons = splitKeyword(details?.brandingSettings?.channel?.keywords);

  return (
    <TabName title={details?.snippet?.title}>
      <img
        src={details?.brandingSettings?.image?.bannerExternalUrl}
        alt=""
        className="w-screen h-[400px] object-cover "
      />
      <div className="mx-auto container">
        <ButtonGroup buttons={buttons} />
        <div className="details flex   items-center my-5">
          <div className="flex-1">
            <img
              src={
                details?.snippet?.thumbnails?.high?.url ??
                details?.snippet?.thumbnails?.standard?.url
              }
              alt=""
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>

          <div className="leading-7 flex-[2]">
            <h1 className="text-white font-medium text-2xl">
              {details?.snippet?.title}
            </h1>
            {/* description */}
            <div className="flex gap-4  items-center my-3  ">
              <span className="text-gray-400 font-medium text-base">
                {details?.snippet?.customUrl}
              </span>
              <span className="text-gray-400 font-medium text-base">
                {formatNumber(details?.statistics?.subscriberCount)} Subscribers
              </span>
              <span className="text-gray-400 font-medium text-base">
                {formatNumber(details?.statistics?.videoCount)} VIDEOS
              </span>
            </div>
            <p className="text-gray-400 font-medium text-base flex gap-2 items-center">
              {details?.snippet?.description?.slice(0, 60)}
              <span>
                <AiOutlineArrowRight className="w-4 h-4 text-white" />
              </span>
            </p>
          </div>
        </div>

        <div className="grid justify-start items-start  grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10 h-screen">
          {videos?.map((vid) => {
            return <VideoCard video={vid} key={vid?.id} mode="ChannelVideo" />;
          })}
        </div>
      </div>
    </TabName>
  );
};

export default Channel;
