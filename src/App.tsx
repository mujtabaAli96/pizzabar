import { useEffect, useState } from "react";
import { Box, ChakraProvider, flatten, position } from "@chakra-ui/react";
import { ReactSwipeableViews } from "./Components/ReactSwipeableViews/ReactSwipeableViews";

import Menu from "./Components/Menu";
import ClipLoader from "react-spinners/ClipLoader";

import "./style.css";

import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";
import video4 from "./assets/video4.mp4";
import video5 from "./assets/video5.mp4";
import Discription from "./Components/Discription";
import BottomBar from "./Components/BottomBar";
import MySwiper from "./Components/ReactSwipeableViews/swiper";
import BottomBar2 from "./Components/BottomBar2";

export const Data = [
  {
    name: "Ensalada Mamona",
    videoPath: video1,
    price: 5,
    category: 1
  },
  {
    name: "Croquetas de",
    videoPath: video2,
    price: 6,
    category: 1,
  },
  {
    name: "mortadela Mamona",
    videoPath: video5,
    price: 9,
    category: 2,
  },
  {
    name: "mortadela Mamona 2",
    videoPath: video5,
    price: 20,
    category: 2,
  }
  ,
  {
    name: "Brioche de",
    videoPath: video3,
    price: 7,
    category: 3,
  },
  ,
  {
    name: "Brioche de 2",
    videoPath: video3,
    price: 10,
    category: 3,
  },
  {
    name: "Pimientos con",
    videoPath: video4,
    price: 8,
    category: 4,
  },
  {
    name: "Pimientos con 2",
    videoPath: video4,
    price: 16,
    category: 4,
  }
]

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [selectType, setType] = useState(1);
  const [videoData, SetVideoData] = useState(Data.filter((item) => selectedMenu == item?.category))
  function changeMenu(val: any) {

    SetVideoData(Data.filter((item: any) => val == item?.category))
    setSelectedMenu(val)
  }

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#00a99d");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1800)
  })

  useEffect(() => {
    function preventDefault(e: any) {
      e.preventDefault();
    }

    function preventZoom(e: any) {
      if (e.scale !== 1) {
        e.preventDefault();
      }
    }

    document.addEventListener('touchmove', preventDefault, { passive: false });
    document.addEventListener('gesturestart', preventZoom);

    return () => {
      // Cleanup
      document.removeEventListener('touchmove', preventDefault);
      document.removeEventListener('gesturestart', preventZoom);
    };
  }, []);
  return (
    <ChakraProvider>
      {
        loading ? <div style={{ display: "flex", height: "100vh", zIndex: '9999', background: "#041A17", justifyContent: "center", alignItems: "center", width: "100vw" }}>
          <ClipLoader
            color={color}
            loading={loading}
            // cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div> :
          <div
            // className="main-body "
          >
            <div style={{ top: "0" }}>

              {
                selectType == 1 ?
                  <div >
                    <MySwiper selectedMenu={selectedMenu} setType={setType} selectType={selectType} setSelectedMenu={changeMenu} videoData={videoData}/>
                    {/* <ReactSwipeableViews selectedMenu={selectedMenu} setSelectedMenu={changeMenu} selectType={selectType} setType={setType} videoData={videoData} /> */}
                  </div>
                  :
                  <Menu videoData={videoData} setType={setType} />
              }

            </div>
            <BottomBar2 changeMenu={changeMenu} selectedMenu={selectedMenu} />

           <BottomBar changeMenu={changeMenu} selectedMenu={selectedMenu} />

          </div>
      }
    </ChakraProvider>
  );
}
