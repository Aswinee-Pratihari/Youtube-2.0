import React, { useEffect, useState } from "react";
import { RAPID_API_OPTIONS, getCommentUrl } from "./constants";

const useComment = (vidId) => {
  const [data, setData] = useState();
  useEffect(() => {
    handleComment();
  }, [vidId]);

  const handleComment = async () => {
    const url = getCommentUrl(vidId);
    const data = await fetch(url, RAPID_API_OPTIONS);
    const json = await data.json();
    console.log(json);
    setData(json?.items);
  };
  return { data };
};

export default useComment;
