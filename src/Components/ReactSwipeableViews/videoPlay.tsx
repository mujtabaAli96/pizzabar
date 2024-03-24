import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import ReactPlayer from "react-player";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../style.css";

interface appProps {
  // S3: any;
  // videoUrl:string;
  videoKey: string;
  active: boolean;
}

export default function VideoPlayer({
  // S3,
  videoKey,
  active,
}: // videoUrl
appProps) {
  // const [cachedVideo, setCachedVideo] = useState("");
  const videoRef = useRef(null);
  const [videoStream, setVideoStream] = useState<any>({
    video_path: "",
    image_path: "",
  });

  useEffect(() => {
    const handleDownload = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            AccessKey: "bb2e0a16-c4c6-4ff4-9289cd032c52-7bf3-4260",
          },
        };
        const libraryId = 220676;
        //
        fetch(
          `https://video.bunnycdn.com/library/${libraryId}/videos/${videoKey}/play`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setVideoStream((pre: any) => ({
              ...pre,
              video_path: response.fallbackUrl + "480p.mp4",
              image_path: response?.thumbnailUrl,
            }));
          })
          .catch((err) => console.error(err));
        // console.log("cachedVideo :",cachedVideo)
        // if (!cachedVideo) {
        // const response = await getSignedUrl(
        //   S3,
        //   new GetObjectCommand({ Bucket: "komandapp-videos", Key: videoKey }),
        //   { expiresIn: 3600 }
        // );
        // console.log(response);
        // setCachedVideo(response);
        // setVideoStream(response);

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
    const videoElement:any = videoRef.current;
    setTimeout(()=>{
      if(videoElement && !videoElement.playing) 
      {videoElement.play();}
    },1000)
    

  }, []);
  return (
    <>
      {videoStream.video_path && (
        <div>
          {/* {videoStream} */}
          {/* <ReactPlayer
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
          controls
          loop={true}
          muted={true}
          playing={true}
        />  */}
          {active ? (
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
              ref={videoRef} 
            >
              <source src={videoStream?.video_path} type="video/mp4" />
            </video>
          ) : (
            <img
              style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
              src={videoStream?.image_path}
            />
          )}
        </div>
      )}
    </>
  );
}
