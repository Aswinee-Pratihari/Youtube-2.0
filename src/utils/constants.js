export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${
  import.meta.env.VITE_YOUTUBE_API_KEY
}&maxResults=50 `;

export const SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&q=";

export const RAPID_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const getCommentUrl = (vidId) => {
  return `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${vidId}&maxResults=100`;
};

export const getSuggestedVideoUrl = (vidId) => {
  return ` https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${vidId}&part=id%2Csnippet&type=video&maxResults=100`;
};

export const getSearchedVideoUrl = (query) => {
  return `https://youtube-v31.p.rapidapi.com/search?q=${query}&part=snippet%2Cid&regionCode=IN&maxResults=100&order=relevance`;
};

export const getChannelDetailsUrl = (channelId) => {
  return `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${channelId}`;
};

// 'https://youtube-v31.p.rapidapi.com/search?channelId=UCOQmJtNxOWUMQ5f8U8NOAyA&part=snippet%2Cid&order=date&maxResults=50'
export const getChannelVideosUrl = (channelId) => {
  return `https://youtube-v31.p.rapidapi.com/search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=100`;
};

export const getVideoDetailsUrl = (vidId) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vidId}&key=${
    import.meta.env.VITE_YOUTUBE_API_KEY
  }`;
};
//  COMMENT_URL='https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=COv52Qyctws&maxResults=100';
