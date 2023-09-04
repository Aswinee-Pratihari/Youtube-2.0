import React, { useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { useParams } from "react-router-dom";
import notFound from "../assets/cancelled.png";
import SuggestedVideoCards from "../components/SuggestedVideoCards";
import SuggestedVideoSection from "../components/SuggestedVideoSection";

const Watch = () => {
  const { id } = useParams();
  // console.log(typeof id);
  useEffect(() => {
    scrollTo(0, 0);
  }, [id]);

  return (
    <div className="block grid-cols-10 md:grid gap-5">
      {id !== "undefined" ? (
        <>
          <div className=" col-span-6 px-6 py-4">
            <VideoPlayer vidId={id} />
          </div>
          <div className=" col-span-4">
            {/* <SuggestedVideoCards vidId={id}/> */}
            <SuggestedVideoSection vidId={id} />
          </div>
        </>
      ) : (
        <div className="h-[calc(100vh-10rem)] w-screen flex justify-center items-center">
          <div className="mx-auto flex flex-col items-center">
            <img src={notFound} alt="" className="w-96 h-96" />
            <h1 className="text-2xl font-bold mt-5">
              SORRY!! Video not found. Try another search | Look at other
              results
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Watch;
