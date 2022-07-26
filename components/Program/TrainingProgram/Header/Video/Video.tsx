import React, { useEffect, useState } from "react";
import video from "./video.module.scss";
import Image from "next/image";
import ReactPlayer from "react-player";

const Video = () => {
  const [url, setUrl] = useState<string | undefined>();
  useEffect(() => {
    setUrl(
      "https://www.youtube.com/watch?v=DmWWqogr_r8&ab_channel=21SavageVEVO"
    );
  }, []);
  return (
    <div className={video.mainC}>
      <div className={video.videoHolder}>
        {url ? (
          <ReactPlayer width="100%" height="100%" url={url} controls />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Video;
