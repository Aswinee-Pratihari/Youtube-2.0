import React, { useEffect, useState } from "react";
import {
  RAPID_API_OPTIONS,
  getChannelDetailsUrl,
  getCommentUrl,
} from "./constants";

const useChannelDetails = (channelId) => {
  const [details, setdetails] = useState();
  useEffect(() => {
    handleDetails();
  }, [channelId]);

  const handleDetails = async () => {
    const url = getChannelDetailsUrl(channelId);
    const data = await fetch(url, RAPID_API_OPTIONS);
    const json = await data.json();
    console.log(json);
    setdetails(json?.items[0]);
  };
  return { details };
};

export default useChannelDetails;
