import React, { useEffect } from "react";
import VideoCard from "../components/VideoCard";
import useChannelDetails from "../utils/useChannelDetails";
import { useParams } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";
import { AiOutlineArrowRight } from "react-icons/ai";
import useChannelVideos from "../utils/useChannelVideos";
import ButtonGroup from "../components/ButtonGroup";
import { splitKeyword } from "../utils/splitKeyword";

const Channel = () => {
  const { channelId } = useParams();
  const { details } = useChannelDetails(channelId);
  const { videos } = useChannelVideos(channelId);
  const buttons = splitKeyword(details?.brandingSettings?.channel?.keywords);
  console.log(buttons);
  const video = [
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "nVPFfbg2clk",
      },
      snippet: {
        publishedAt: "2023-06-23T11:30:10Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi - Sexy In My Dress [Official Music Video]",
        description:
          "Listen on All Platforms : https://NoraFatehi.lnk.to/SexyInMyDressID Subscribe To Nora Fatehi Official Channel: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/nVPFfbg2clk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/nVPFfbg2clk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/nVPFfbg2clk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2023-06-23T11:30:10Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "wsLvzQ7rWzg",
      },
      snippet: {
        publishedAt: "2023-06-21T11:30:08Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi - Sexy In My Dress [Music Video Teaser]",
        description:
          "The teaser of Noras new international solo single “Sexy in my dress”! Save the date June 23, music video will be live!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/wsLvzQ7rWzg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/wsLvzQ7rWzg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/wsLvzQ7rWzg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2023-06-21T11:30:08Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "OuhppvOnv3I",
      },
      snippet: {
        publishedAt: "2023-06-19T09:30:08Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | The Making of Dirty Little Secret",
        description:
          "Enjoy the dance anthem of the year - 'Dirty Little Secret'! Sang by Nora Fatehi and Zack Knight! This marks Nora's 3rd ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/OuhppvOnv3I/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/OuhppvOnv3I/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/OuhppvOnv3I/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2023-06-19T09:30:08Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "8BFVIv-1jd4",
      },
      snippet: {
        publishedAt: "2023-05-23T13:30:07Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi - Flashback to IIFA 2022",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi - Flashback to IIFA 2022 Digital Distribution ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/8BFVIv-1jd4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/8BFVIv-1jd4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/8BFVIv-1jd4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2023-05-23T13:30:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "naNoyQ-sa-0",
      },
      snippet: {
        publishedAt: "2023-05-12T13:30:09Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi - USA Tour Vlog",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi - USA TOUR Vlog | 2023 Digital Distribution ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/naNoyQ-sa-0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/naNoyQ-sa-0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/naNoyQ-sa-0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2023-05-12T13:30:09Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "919WQSCdxdw",
      },
      snippet: {
        publishedAt: "2023-02-24T15:00:11Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi - Achha Sila Diya Vlog",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi - Achha Sila Diya Vlog Digital Distribution ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/919WQSCdxdw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/919WQSCdxdw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/919WQSCdxdw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2023-02-24T15:00:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "X9v_4wXBOAw",
      },
      snippet: {
        publishedAt: "2023-01-09T12:00:08Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi - Fifa World Cup After Movie",
        description:
          "This is what dreams are made of! Nora Fatehi makes history as the first ever Bollywood Star to headline a FIFA FanFest event.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/X9v_4wXBOAw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/X9v_4wXBOAw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/X9v_4wXBOAw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2023-01-09T12:00:08Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "GQSqQ-BVtSg",
      },
      snippet: {
        publishedAt: "2022-10-22T11:30:09Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | The Making Of Manike Gets Hijacked",
        description:
          "Chaos ensues as Nora Fatehi's close friend and content creator (Steven Roy Thomas) attempts to take creative control of the ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/GQSqQ-BVtSg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/GQSqQ-BVtSg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/GQSqQ-BVtSg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2022-10-22T11:30:09Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "UMM5F2py4Os",
      },
      snippet: {
        publishedAt: "2022-09-20T15:41:42Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title:
          "Here’s my #ManikeMove, what are you waiting for? @YouTubeIndia #dancewithnora",
        description:
          "A challenge that doesn't feel like one? Sign me up! Here's how you can participate in the challenge: Record yourself doing the ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/UMM5F2py4Os/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/UMM5F2py4Os/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/UMM5F2py4Os/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2022-09-20T15:41:42Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "9yUXv8NiTuw",
      },
      snippet: {
        publishedAt: "2022-09-19T12:26:24Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title:
          "Nora Fatehi | Dirty Little Secret | Matt Steffanina Choreography | Los Angeles Dance Class",
        description:
          "Dirty Little Secret has become a GLOBAL HIT. Thousands of people across the world have joined the #DanceWithNora movement ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/9yUXv8NiTuw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/9yUXv8NiTuw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/9yUXv8NiTuw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2022-09-19T12:26:24Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "Tb6xGDiSscc",
      },
      snippet: {
        publishedAt: "2022-06-08T15:00:01Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title:
          "Dirty Little Secret - Nora Fatehi x Zack Knight (EXCLUSIVE Music Video)",
        description:
          "Enjoy the dance anthem of the year - 'Dirty Little Secret'! Sang by Nora Fatehi and Zack Knight! This marks Nora's 3rd ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Tb6xGDiSscc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Tb6xGDiSscc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Tb6xGDiSscc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2022-06-08T15:00:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "LTlTBpzt9SE",
      },
      snippet: {
        publishedAt: "2022-06-02T09:00:09Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title:
          "Dirty Little Secret - Nora Fatehi x Zack Knight (Music Video TEASER)",
        description:
          "Heres the teaser of Nora Fatehi and Zack Knight's next international single Dirty little secret! The dance anthem of the year coming ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/LTlTBpzt9SE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/LTlTBpzt9SE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/LTlTBpzt9SE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2022-06-02T09:00:09Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "hVj8wbF8iOk",
      },
      snippet: {
        publishedAt: "2022-03-07T10:30:13Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Dubai Expo 2022 Vlog",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi | Dubai Expo 2022 Vlog Digital Distribution ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/hVj8wbF8iOk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/hVj8wbF8iOk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/hVj8wbF8iOk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2022-03-07T10:30:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "8tKmuC3U57I",
      },
      snippet: {
        publishedAt: "2022-02-09T10:30:13Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Dance Class Comedy Skit | Dance Meri Rani",
        description:
          "Enjoy this comedy skit with a sweet ending! Nora Fatehi teaches an afro dance class and the amazing students learn the hook ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/8tKmuC3U57I/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/8tKmuC3U57I/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/8tKmuC3U57I/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2022-02-09T10:30:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "rO1pieBocTY",
      },
      snippet: {
        publishedAt: "2021-12-22T09:59:19Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Dance Meri Rani Vlog",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi | Dance Meri Rani Vlog Digital Distribution ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/rO1pieBocTY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/rO1pieBocTY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/rO1pieBocTY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-12-22T09:59:19Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "cjIVRIU3cHQ",
      },
      snippet: {
        publishedAt: "2021-11-25T12:49:32Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title:
          "Heres the full kusu kusu hookstep with the music ! #kusukusu Kusukusu #Norafatehi",
        description:
          "Here is the full tutorial video of the #Kusukusu hook step click here https://youtu.be/47if1LpGgmQ Subscribe To Nora Fatehi ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/cjIVRIU3cHQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/cjIVRIU3cHQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/cjIVRIU3cHQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-11-25T12:49:32Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "47if1LpGgmQ",
      },
      snippet: {
        publishedAt: "2021-11-25T12:10:13Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Kusu Kusu Dance Tutorial with Nora Fatehi",
        description:
          "To watch the full hook step with the music click here: https://youtube.com/shorts/cjIVRIU3cHQ?feature=share Subscribe To Nora ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/47if1LpGgmQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/47if1LpGgmQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/47if1LpGgmQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-11-25T12:10:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "YH-fREmvCJA",
      },
      snippet: {
        publishedAt: "2021-11-18T10:30:09Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Kusu Kusu Song Vlog and BTS",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi | Kusu Kusu Song Vlog and BTS Shot by: Anup ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/YH-fREmvCJA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/YH-fREmvCJA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/YH-fREmvCJA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-11-18T10:30:09Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "TBEM_RfvSvs",
      },
      snippet: {
        publishedAt: "2021-11-17T12:41:15Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title:
          "Nora Fatehi - Switching up the style a bit 😉🔥  #dancewithnora #kusukusuchallenge #kusukusu",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi | Kusu Kusu Song Vlog and BTS Digital ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/TBEM_RfvSvs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/TBEM_RfvSvs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/TBEM_RfvSvs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-11-17T12:41:15Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "9-mQ_9DLnp8",
      },
      snippet: {
        publishedAt: "2021-11-14T09:12:03Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Lets go! #Kusukusuchallenge in the car 🔥🏎🛺🏍",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Lets go! #Kusukusuchallenge in the car Digital ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/9-mQ_9DLnp8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/9-mQ_9DLnp8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/9-mQ_9DLnp8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-11-14T09:12:03Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "JfguKcuB3eQ",
      },
      snippet: {
        publishedAt: "2021-11-12T19:10:53Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "#Kusukusu Kusur tera… ❤️‍🔥❤️‍🔥",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT #Kusukusu Kusur tera… ❤️‍  ❤️‍   Digital Distribution ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/JfguKcuB3eQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/JfguKcuB3eQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/JfguKcuB3eQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-11-12T19:10:53Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "7UBojni-WXU",
      },
      snippet: {
        publishedAt: "2021-10-22T12:00:37Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Collabs with Pepsi &amp; Money Heist | Vlog",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi brings the swag to her Pepsi x Money Heist ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/7UBojni-WXU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/7UBojni-WXU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/7UBojni-WXU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-10-22T12:00:37Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "yWIb6i77nWY",
      },
      snippet: {
        publishedAt: "2021-09-04T10:30:13Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title:
          "Nora Fatehi : Nora’s *Desi* Avatar for Zaalima Coca Cola | Vlog",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi : Nora's *Desi* Avatar for Zaalima Coca Cola ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/yWIb6i77nWY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/yWIb6i77nWY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/yWIb6i77nWY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-09-04T10:30:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "gOhTj03laP4",
      },
      snippet: {
        publishedAt: "2021-07-11T11:00:11Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi finally meets her idol Madhuri Dixit! DD3 | Vlog",
        description:
          "Watch Nora Fatehi finally meet her favourite actress and performer the iconic Madhuri Dixit on the show Dance Dewane 3 as they ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/gOhTj03laP4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/gOhTj03laP4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/gOhTj03laP4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-07-11T11:00:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "BbaDkMLht04",
      },
      snippet: {
        publishedAt: "2021-06-18T12:00:11Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Filmfare Awards 2021 | Vlog",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi | Filmfare Awards 2021 | Vlog Digital Distribution ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/BbaDkMLht04/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/BbaDkMLht04/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/BbaDkMLht04/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-06-18T12:00:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#playlist",
        playlistId: "PL9DCatIWNsL00UP_HbQferaZ4yJ8y4bsu",
      },
      snippet: {
        publishedAt: "2021-05-26T11:43:07Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Latest Videos",
        description: "",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/d9_YWu9WAvg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/d9_YWu9WAvg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/d9_YWu9WAvg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-05-26T11:43:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "MCcoPVCnBJM",
      },
      snippet: {
        publishedAt: "2021-05-25T16:21:39Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Olympia France Vlog Part 2",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi | Olympia France Vlog Part 2 1. Music in this ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/MCcoPVCnBJM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/MCcoPVCnBJM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/MCcoPVCnBJM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-05-25T16:21:39Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "7sBFaWkHXx4",
      },
      snippet: {
        publishedAt: "2021-03-31T05:34:52Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Olympia France Vlog Part 1",
        description:
          "Follow Nora as she takes you through the journey of the preparation for her live show in Olympia Paris with her Team! Stay tuned ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/7sBFaWkHXx4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/7sBFaWkHXx4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/7sBFaWkHXx4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-03-31T05:34:52Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "M_9uf0hQW6k",
      },
      snippet: {
        publishedAt: "2021-03-10T08:29:31Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title:
          "Nora Fatehi makes HISTORY | SURPRISE Dilbar Celebration for 1 BILLION",
        description:
          "Follow the Team as we Surprise Nora Fatehi with amazing cute kids doing a dance flash mob performance! Celebrating 1 billion ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/M_9uf0hQW6k/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/M_9uf0hQW6k/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/M_9uf0hQW6k/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-03-10T08:29:31Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "esMdsJPZUkQ",
      },
      snippet: {
        publishedAt: "2021-03-01T10:53:39Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Chhor Denge official Vlog | PART 2",
        description:
          "Follow Nora Fatehi as she shows you an exclusive look of what it took to shoot the music video Chhor Denge with her team!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/esMdsJPZUkQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/esMdsJPZUkQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/esMdsJPZUkQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-03-01T10:53:39Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "WiQseesF9T4",
      },
      snippet: {
        publishedAt: "2021-02-11T10:20:27Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title:
          "Nora Fatehi | Chhor Denge Vlog Prep Expression Classes  | PART ONE",
        description:
          "Follow Nora Fatehi as she shows you an exclusive look of her expression and dance prep for her new music video Chhor Denge!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/WiQseesF9T4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/WiQseesF9T4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/WiQseesF9T4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2021-02-11T10:20:27Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "QtnrNT-22v4",
      },
      snippet: {
        publishedAt: "2020-12-29T14:05:59Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | BODY Dance Cover Feat Rajit Dev",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi | BODY Dance Cover Feat Rajit Dev Digital ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/QtnrNT-22v4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/QtnrNT-22v4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/QtnrNT-22v4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-12-29T14:05:59Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "37BkPlok2Tc",
      },
      snippet: {
        publishedAt: "2020-11-18T11:00:45Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Naach Meri Rani Vlog",
        description:
          "Inspiration strikes Nora Fatehi on the sets of Nach Meri Rani as she creates a new anthem for her long video shoots. Follow along ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/37BkPlok2Tc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/37BkPlok2Tc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/37BkPlok2Tc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-11-18T11:00:45Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "qRYWp5VZhZk",
      },
      snippet: {
        publishedAt: "2020-10-15T06:02:24Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | India&#39;s Best Dancer VLOG",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi | India's Best Dancer VLOG | 2020 Shot by: Anup ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/qRYWp5VZhZk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/qRYWp5VZhZk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/qRYWp5VZhZk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-10-15T06:02:24Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "6gjDLrZeomU",
      },
      snippet: {
        publishedAt: "2020-09-07T15:28:17Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Morocco Special Appearance VLOG",
        description:
          "Nora Fatehi takes you along on a work trip to Morocco as she makes a special appearance in Casablanca. Subscribe To Nora ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/6gjDLrZeomU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/6gjDLrZeomU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/6gjDLrZeomU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-09-07T15:28:17Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "ysZMH4tpIXA",
      },
      snippet: {
        publishedAt: "2020-08-17T15:31:19Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Pachtaoge Female Version VLOG",
        description:
          "Join Nora Fatehi and her team behind the scenes for the making of Pachtaoge Female Version. A unique experience as the crew ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ysZMH4tpIXA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ysZMH4tpIXA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ysZMH4tpIXA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-08-17T15:31:19Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "Q1a4l4DoxnQ",
      },
      snippet: {
        publishedAt: "2020-07-25T11:57:45Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Zee Cine Awards 2020 Vlog",
        description:
          "Nora Fatehi takes you along her performance for the 2020 Zee Cine Awards. Subscribe To Nora Fatehi Official Channel: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Q1a4l4DoxnQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Q1a4l4DoxnQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Q1a4l4DoxnQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-07-25T11:57:45Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "qPr3RO294tc",
      },
      snippet: {
        publishedAt: "2020-07-02T11:27:35Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Street Dancer 3D Diaries | The Royals",
        description:
          "Watch the journey of The Royals from Street Dancer 3d and the choreographers behind the acts! Get to know the brilliant diverse ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/qPr3RO294tc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/qPr3RO294tc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/qPr3RO294tc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-07-02T11:27:35Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "xheX7Vt1IRI",
      },
      snippet: {
        publishedAt: "2020-06-12T15:59:01Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Yan&amp;One Makeup Tutorial Challenge",
        description:
          "Thank you to Yan&One for the lovely products! I used the Moroccan Beauty eye pallet and the Moroccan Sand highlighter ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/xheX7Vt1IRI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/xheX7Vt1IRI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/xheX7Vt1IRI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-06-12T15:59:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "VgdSXmf92xo",
      },
      snippet: {
        publishedAt: "2020-04-19T11:37:01Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Street Dancer 3D | Dubai Vlog",
        description:
          "Have you seen Street Dancer 3D yet? Nora Fatehi takes you behind the scenes of film's Dubai schedule. Shot by: Anup Surve ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/VgdSXmf92xo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/VgdSXmf92xo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/VgdSXmf92xo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-04-19T11:37:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "PzytynTRXXc",
      },
      snippet: {
        publishedAt: "2020-03-21T11:34:07Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Lakme Fashion Week 2020",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi walks the ramp for designer duo Gauri & Nainika ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/PzytynTRXXc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/PzytynTRXXc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/PzytynTRXXc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-03-21T11:34:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "67ExUDHRR1A",
      },
      snippet: {
        publishedAt: "2020-02-12T11:12:46Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Performs At The 26th Star Screen Awards",
        description:
          "Nora Fatehi takes you along on her experience performing for the 2019 Star Screen Awards. Subscribe To Nora Fatehi Official ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/67ExUDHRR1A/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/67ExUDHRR1A/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/67ExUDHRR1A/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-02-12T11:12:46Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "3izbhGeAzO8",
      },
      snippet: {
        publishedAt: "2020-02-03T16:05:46Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Noise Wireless Earphones",
        description:
          "There is a noise within each and every one of us, the burning flame that's constantly pushing us to follow our dreams and the ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/3izbhGeAzO8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/3izbhGeAzO8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/3izbhGeAzO8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-02-03T16:05:46Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "JXETLJHZiXA",
      },
      snippet: {
        publishedAt: "2020-01-27T14:07:06Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Garmi Song Launch | Street Dancer 3D",
        description:
          "Nora Fatehi and Varun Dhawan raise the temperature for the Garmi Song Launch - a truly one of a kind and unique launch event ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/JXETLJHZiXA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/JXETLJHZiXA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/JXETLJHZiXA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-01-27T14:07:06Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "KSMpmtwrWsg",
      },
      snippet: {
        publishedAt: "2020-01-20T12:58:07Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi | Street Dancer 3 | Trailer Launch",
        description:
          "Nora Fatehi takes you to the Trailer Launch of Street Dancer 3 - where the cast & crew unveiled the trailer to the world for the very ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/KSMpmtwrWsg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/KSMpmtwrWsg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/KSMpmtwrWsg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-01-20T12:58:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "gXiJ3LeeaqA",
      },
      snippet: {
        publishedAt: "2020-01-19T07:09:38Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi Challenges Badshah To Do The Garmi Hookstep",
        description:
          "Will Nora Fatehi get Badshah to do the Garmi hookstep? Directed by Steven Roy Thomas Shot by Anup Surve Edited by Sushant ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/gXiJ3LeeaqA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/gXiJ3LeeaqA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/gXiJ3LeeaqA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-01-19T07:09:38Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "QG5zyX7y5MY",
      },
      snippet: {
        publishedAt: "2020-01-12T11:44:34Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi Spends 24 Hours in Morocco",
        description:
          "Nora Fatehi takes Steven Roy Thomas to Morocco for the first time! Follow her along as she takes you through her hectic trip from ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/QG5zyX7y5MY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/QG5zyX7y5MY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/QG5zyX7y5MY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-01-12T11:44:34Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "aH_UvA4KIgo",
      },
      snippet: {
        publishedAt: "2020-01-02T13:05:12Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi - Reaction To Garmi Song | Street Dancer 3D",
        description:
          "Nora Fatehi reacts to her new hit song, GARMI - from the film Street Dancer 3D, releasing worldwide on January 24th 2020!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/aH_UvA4KIgo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/aH_UvA4KIgo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/aH_UvA4KIgo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2020-01-02T13:05:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "i-KxAef3YXc",
      },
      snippet: {
        publishedAt: "2019-12-03T12:30:04Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "#Pepeta - Nora Fatehi Ft. Ray Vanny (Behind The Scenes) | 2019",
        description:
          "Listen on all platforms: https://NoraFatehi.lnk.to/PepetaFtRay... Subscribe To Nora Fatehi Official Channel: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/i-KxAef3YXc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/i-KxAef3YXc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/i-KxAef3YXc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2019-12-03T12:30:04Z",
      },
    },
    {
      kind: "youtube#searchResult",
      id: {
        kind: "youtube#video",
        videoId: "joADoHqRsdo",
      },
      snippet: {
        publishedAt: "2019-11-18T13:17:18Z",
        channelId: "UCOQmJtNxOWUMQ5f8U8NOAyA",
        title: "Nora Fatehi - Ek Toh Kum Zindagani Vlog (Behind the Scenes)",
        description:
          "Subscribe To Nora Fatehi Official Channel: http://bit.ly/NoraFatehiYT Nora Fatehi - Ek Toh Kum Zindagani Vlog (Behind the ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/joADoHqRsdo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/joADoHqRsdo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/joADoHqRsdo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Nora Fatehi",
        liveBroadcastContent: "none",
        publishTime: "2019-11-18T13:17:18Z",
      },
    },
  ];
  // console.log(details);
  // console.log(details?.brandingSettings?.image?.bannerExternalUrl);
  return (
    <div className="">
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
    </div>
  );
};

export default Channel;
