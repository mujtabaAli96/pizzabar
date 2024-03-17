import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import search from "../../assets/search.png";
import { delay, motion } from "framer-motion";

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
  const [cachedVideo, setCachedVideo] = useState(
    localStorage.getItem(videoKey) || null
  );

  useEffect(() => {
    const handleDownload = async () => {
      try {
        console.log("cachedVideo :",cachedVideo)
        if (!cachedVideo) {
          const response = await getSignedUrl(
            S3,
            new GetObjectCommand({ Bucket: "komandapp-videos", Key: videoKey }),
            { expiresIn: 3600 }
          );
          console.log(response);
          // const blob = await response.blob();
          const blob = await (await fetch(response)).blob();

          // Create an object URL from the blob
          const objectUrl = URL.createObjectURL(blob);
          const pathLink = objectUrl.replace("blob:","")
          // Save the object URL in the cache memory
          localStorage.setItem(videoKey, objectUrl);
          setCachedVideo(objectUrl);
          // You can now use the 'objectUrl' to display the video or further process it
          console.log("Video downloaded and cached:", objectUrl);
        }
      } catch (error) {
        console.error("Error downloading video:", error);
      }
    };
    handleDownload();
  }, []);
  return (
    <>
      {cachedVideo && (
        <video
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            overflow: "hidden",
          }}
          loop
          muted
          autoPlay
          playsInline
          // onError={(event) => {
          //   console.error("Error playing video:", event.target.error);
          // }}
        >
          {/* <source src={Data?.[0]?.videoPath} type="video/mp4" /> */}
          <source src={cachedVideo} type="video/webm" />
        </video>
      )}
    </>
  );
}
