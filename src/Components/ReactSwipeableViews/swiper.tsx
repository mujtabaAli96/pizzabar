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
} from "@aws-sdk/client-s3";
import VideoPlayer from "./videoPlay";
interface appProps {
  selectedMenu?: any;
  selectType?: any; // optional prop
  setType?: any;
  videoData: any;
  setSelectedMenu: any;
}

export default function MySwiper({
  selectedMenu,
  setType,
  videoData,
  setSelectedMenu,
}: appProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [animateText, setAnimateText] = useState(true);
  const { menu, setMenu, cart, setCart, restaurant } = useContext(DataContext);
  const [currentCategory, setCurrentCategory] = useState(menu?.[0]?.name);
  const [activeVideo,setActiveVideo]  = useState(0);
  // const [titleY, setTitleY] = useState(-5);

  // useEffect(() => {
  //   setTitleY(0); // Reset animation on state change
  // }, [currentCategory]);

  // const animationVariants = {
  //   from: { y: titleY },
  //   to: { y: 0 }, // Target position (top of the screen)
  //   transition: { duration: 0.5, ease: 'easeInOut' }, // Customize as desired
  // };
  useLayoutEffect(() => {
    setCurrentCategory(menu?.[0]?.name); // Reset category on initial render
  }, []);
  function changeCurrentCategory(id: number) {
    setCurrentCategory(menu?.[id]?.name);
  }
  // const swiperSlideCustop = useSwiper();
  const addToCartHandler = (id: number) => {
    console.log("cart: ", id);
    const isExistingItem = cart.some((item: any) => item.id === id);

    // If not existing, add the item to the cart
    if (!isExistingItem) {
      setCart((prevCart: any) => [...prevCart, { id }]);
    }
  };
  const slideTo = (index: any) => {
    if (swiper) {
      swiper?.slideTo(index);
    }
  };

  useEffect(() => {
    slideTo(selectedMenu - 1);
  }, [selectedMenu]);

  return (
    <>
      <div
        // className="webkitMarginClass"
        style={{
          display: "flex",
          flexDirection: "row",
          zIndex: 12,
          color: "#00a99d",
          position: "absolute",
          // marginTop: "20px",
          width: "100%",
          height: "90px",
          justifyContent: "space-between",
          alignItems: "center",
          top: "0",
        }}
      >
        <Link className="cart-icon" to="/cart" style={{ width: "20%" }}>
          <img
            style={{ width: "35px", height: "35px" }}
            src={"https://admin.komandapp.com/" + restaurant?.logo}
            alt="Logo"
          />
        </Link>
        <AnimatedTitle
          currentCategory={currentCategory}
          animateText={animateText}
          setAnimateText={setAnimateText}
        />

        <Link className="cart-icon" to="/cart" style={{ width: "20%" }}>
          <img style={{ width: "25px", height: "25px" }} src={search} />
        </Link>
      </div>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={0}        
        onSlideChange={(swiper: any) => {
          setAnimateText(true);
          setSelectedMenu(swiper.activeIndex + 1);
          changeCurrentCategory(swiper?.activeIndex);
        }}
        onSwiper={setSwiper}
        // onSwiper={(swiper:any )=>{ console.log("on swiper",swiper)}}
        style={{ background: "#121212" }}
      >
        {menu?.map((item: any,catIndex: number) => {
          return (
            <SwiperSlide >
              <Swiper
                className="mySwiper2 swiper-v"
                direction={"vertical"}
                spaceBetween={0}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                allowTouchMove={true}
                style={{ background: "#121212" }}
                onSlideChange={(swiper: any) => {
                  setActiveVideo(swiper.activeIndex );
                }}
              >
                {item?.items?.map((item2: any,index:number) => {
                  return (
                    <SwiperSlide  key={item2._id}>
                      <div>
                        <div>
                          {/* <OverlayBar
                            catName={item?.name}
                            heading={item2.name}
                            id={item2?.id}
                            price={item2?.price}
                            description={item2?.description}
                            allergens={item2?.allergens}
                            selectedMenu={selectedMenu}
                            setType={setType}
                            index={0}
                            videoData={videoData[0]}
                            addToCart={addToCartHandler}
                          /> */}
                          <Discription heading={item2.name} description={item2?.description} price={item2?.price} selectedMenu={selectedMenu} setType={setType} addToCart={addToCartHandler} id={item2?.id} allergens={item2?.allergens} />

                        </div>
                        {item2?.video != ""  ? (
                          <>
                            {" "}
                            <VideoPlayer 
                            active={
                              // index==activeVideo && 
                              catIndex+1 == selectedMenu}
                             videoKey={item2?.video_path} />
                          </>
                        ) : (
                          <img
                            src={"https://admin.komandapp.com" + item2?.logom}
                          ></img>
                        )}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>Horizontal Slide 1</SwiperSlide> */}
      </Swiper>
    </>
  );
}
