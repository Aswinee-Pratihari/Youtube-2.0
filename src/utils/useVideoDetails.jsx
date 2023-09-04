import React, { useEffect, useState } from "react";
import { getVideoDetailsUrl } from "./constants";

const useVideoDetails = (vidId) => {
  const [details, setDetails] = useState();
  useEffect(() => {
    handleDetails();
  }, [vidId]);

  console.log(vidId);
  const handleDetails = async () => {
    const url = getVideoDetailsUrl(vidId);
    console.log(url);
    const data = await fetch(url);
    const json = await data.json();
    // console.log(json);
    setDetails(json);
  };
  return { details };
};

export default useVideoDetails;
