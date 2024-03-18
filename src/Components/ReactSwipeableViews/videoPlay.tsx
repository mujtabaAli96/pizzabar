import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import ReactPlayer from 'react-player'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../style.css";
import {
  slideContainerStyle,
  getSlideStyles,
  getRandomColor,
} from "./ReactSwipeableViews.utils";

// import required modules
import { Pagination } from "swiper/modules";
import Discription from "../Discription";
import { Link } from "react-router-dom";
import { Data } from "../../App";
import OverlayBar from "./overlayBar";
import { DataContext } from "../../main";
import { string } from "prop-types";
import AnimatedTitle from "./anmatedTitle";

import {
  S3Client,
  ListBucketsCommand,
  ListObjectsV2Command,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
interface appProps {
  S3: any;
  // videoUrl:string;
  videoKey: string;
}

export default function VideoPlayer({
  S3,
  videoKey,
}: // videoUrl
appProps) {
  // const [cachedVideo, setCachedVideo] = useState("");
  const [videoStream,setVideoStream] = useState<any>(null)

  useEffect(() => {
    const handleDownload = async () => {
      try {
        // console.log("cachedVideo :",cachedVideo)
        // if (!cachedVideo) {
          const response = await getSignedUrl(
            S3,
            new GetObjectCommand({ Bucket: "komandapp-videos", Key: videoKey }),
            { expiresIn: 3600 }
          );
          console.log(response);
          // setCachedVideo(response);
          setVideoStream(response);

          // setVideoStream(<ReactPlayer url={response}
          //   width={"100%"}
          //   height={"100%"}
          //    style={{
          //   position: "fixed",
          //   width: "100%",
          //   height: "100%",
          //   objectFit: "cover",
          //   overflow: "hidden",
          // }} 
          // loop={true} muted={true} 
          //  />)

          // const blob = await (await fetch(response)).blob();
          // const objectUrl = URL.createObjectURL(blob);
          // localStorage.setItem(videoKey, objectUrl);
          // setCachedVideo(objectUrl);
          // console.log("Video downloaded and cached:", objectUrl);
        // }
      } catch (error) {
        console.error("Error downloading video:", error);
      }
    };
    handleDownload();
  }, []);
  return (
    <>
      { videoStream &&
      (
        <div>
        {/* {videoStream} */}
        <ReactPlayer
          url={videoStream}
          width={"100%"}
          height={"100%"}
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            overflow: "hidden",
          }}
          loop={true}
          muted={true}
        />
        </div>
        
      )
      
        // <video
        //   style={{
        //     position: "fixed",
        //     width: "100%",
        //     height: "100%",
        //     objectFit: "cover",
        //     overflow: "hidden",
        //   }}
        //   loop
        //   muted
        //   autoPlay
        //   playsInline
        //   // onError={(event) => {
        //   //   console.error("Error playing video:", event.target.error);
        //   // }}
        // >
        //   {/* <source src={Data?.[0]?.videoPath} type="video/mp4" /> */}
        //   <source src={cachedVideo} type="video/mp4" />
        // </video>
      }
    </>
  );
}
