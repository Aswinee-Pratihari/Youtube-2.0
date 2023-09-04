import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineLike } from "react-icons/ai";
import { formatNumber } from "../utils/formatNumber.js";
import ReactPlayer from "react-player";
import CommentCard from "./CommentCard";
import useComment from "../utils/useComment";
import useVideoDetails from "../utils/useVideoDetails";
import { Link } from "react-router-dom";
const VideoPlayer = ({ vidId }) => {
  // console.log(vidId);
  const [showMore, setShowMore] = useState(false);
  //   kind: "youtube#videoListResponse",
  //   etag: "jO6PsCcuv92VWbxXaALqWdZulEA",
  //   items: [
  //     {
  //       kind: "youtube#video",
  //       etag: "k6_JYVHZNOYygDyfp7XP9hxPxns",
  //       id: "Ks-_Mh1QhMc",
  //       snippet: {
  //         publishedAt: "2012-10-01T15:27:35Z",
  //         channelId: "UCAuUUnT6oDeKwE6v1NGQxug",
  //         title: "Your body language may shape who you are | Amy Cuddy",
  //         description:
  //           "Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy argues that \"power posing\" -- standing in a posture of confidence, even when we don't feel confident -- can boost feelings of confidence, and might have an impact on our chances for success. (Note: Some of the findings presented in this talk have been referenced in an ongoing debate among social scientists about robustness and reproducibility. Read Amy Cuddy's response here: http://ideas.ted.com/inside-the-debate-about-power-posing-a-q-a-with-amy-cuddy/)\n\nGet TED Talks recommended just for you! Learn more at https://www.ted.com/signup.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
  //         thumbnails: {
  //           default: {
  //             url: "https://i.ytimg.com/vi/Ks-_Mh1QhMc/default.jpg",
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: "https://i.ytimg.com/vi/Ks-_Mh1QhMc/mqdefault.jpg",
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: "https://i.ytimg.com/vi/Ks-_Mh1QhMc/hqdefault.jpg",
  //             width: 480,
  //             height: 360,
  //           },
  //           standard: {
  //             url: "https://i.ytimg.com/vi/Ks-_Mh1QhMc/sddefault.jpg",
  //             width: 640,
  //             height: 480,
  //           },
  //           maxres: {
  //             url: "https://i.ytimg.com/vi/Ks-_Mh1QhMc/maxresdefault.jpg",
  //             width: 1280,
  //             height: 720,
  //           },
  //         },
  //         channelTitle: "TED",
  //         tags: [
  //           "Amy Cuddy",
  //           "TED",
  //           "TEDTalk",
  //           "TEDTalks",
  //           "TED Talk",
  //           "TED Talks",
  //           "TEDGlobal",
  //           "brain",
  //           "business",
  //           "psychology",
  //           "self",
  //           "success",
  //         ],
  //         categoryId: "22",
  //         liveBroadcastContent: "none",
  //         defaultLanguage: "en",
  //         localized: {
  //           title: "Your body language may shape who you are | Amy Cuddy",
  //           description:
  //             "Body language affects how others see us, but it may also change how we see ourselves. Social psychologist Amy Cuddy argues that \"power posing\" -- standing in a posture of confidence, even when we don't feel confident -- can boost feelings of confidence, and might have an impact on our chances for success. (Note: Some of the findings presented in this talk have been referenced in an ongoing debate among social scientists about robustness and reproducibility. Read Amy Cuddy's response here: http://ideas.ted.com/inside-the-debate-about-power-posing-a-q-a-with-amy-cuddy/)\n\nGet TED Talks recommended just for you! Learn more at https://www.ted.com/signup.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
  //         },
  //         defaultAudioLanguage: "en",
  //       },
  //       contentDetails: {
  //         duration: "PT21M3S",
  //         dimension: "2d",
  //         definition: "hd",
  //         caption: "true",
  //         licensedContent: true,
  //         contentRating: {},
  //         projection: "rectangular",
  //       },
  //       statistics: {
  //         viewCount: "23624297",
  //         likeCount: "398965",
  //         favoriteCount: "0",
  //         commentCount: "9550",
  //       },
  //     },
  //   ],
  //   pageInfo: {
  //     totalResults: 1,
  //     resultsPerPage: 1,
  //   },
  // };

  const { details } = useVideoDetails(vidId);
  const { data } = useComment(vidId);

  console.log(details);
  // const { data } = useComment("COv52Qyctws");
  return (
    <>
      <div className="w-full">
        <ReactPlayer
          // url={`https://www.youtube.com/watch?v=${vidId}`}
          url={`https://www.youtube.com/watch?v=${vidId}`}
          // 'COv52Qyctws'
          width="100%"
          height="100%"
          className="  aspect-video"
          controls={true}
          playsinline={true}
        />
        {/* <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${vidId}?si=qiCaXvDrrbPVeMVT`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
      </div>
      <div className="my-5">
        <div className="top">
          <h2 className="text-2xl font-bold">
            {details?.items[0]?.snippet?.title}
          </h2>
        </div>
        <div className="middle flex items-center justify-between">
          <div className="left">
            <Link to={`/channel/${details?.items[0]?.snippet?.channelId}`}>
              <h3 className="text-sm font-bold">
                {details?.items[0]?.snippet?.channelTitle}
              </h3>
            </Link>
          </div>
          <div className="right flex items-center gap-2">
            <AiOutlineLike className="w-7 h-7 text-white" />
            <span className="font-semibold text-lg">
              {details?.items[0]?.statistics?.likeCount}
            </span>
          </div>
        </div>

        <div className="details my-5 bg-gray-900 hover:bg-gray-800 px-4 py-3 rounded-lg">
          {/* <h5> {details?.items[0]?.statistics?.viewCount}</h5> */}
          <span className="font-semibold text-sm bg-transparent">
            {formatNumber(details?.items[0]?.statistics?.viewCount)} Views
          </span>
          {!showMore ? (
            <>
              <p className="bg-transparent text-sm font-medium leading-7">
                {details?.items[0]?.snippet?.description.slice(0, 300)}
              </p>
              <button
                className="hover:underline"
                onClick={() => {
                  setShowMore(true);
                }}
              >
                Show More
              </button>
            </>
          ) : (
            <>
              <p className="bg-transparent text-sm font-medium leading-7">
                {details?.items[0]?.snippet?.description}
              </p>
              <button
                className="hover:underline"
                onClick={() => {
                  setShowMore(false);
                }}
              >
                Show Less
              </button>
            </>
          )}
        </div>

        <div className="comments space-y-4">
          {data?.map((comment) => {
            return <CommentCard comment={comment?.snippet} key={comment?.id} />;
          })}
        </div>
      </div>
    </>
    // </div>
    // </div>
  );
};

export default VideoPlayer;
