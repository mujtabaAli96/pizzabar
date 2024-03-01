import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import search from "../../assets/search.png";

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

  const { menu,setMenu, cart,setCart } = useContext(DataContext);

  // const swiperSlideCustop = useSwiper();
const addToCartHandler=(id:number)=>{
  console.log("cart: ",id)
  const isExistingItem = cart.some((item:any) => item.id === id);

  // If not existing, add the item to the cart
  if (!isExistingItem) {
    setCart((prevCart:any) => [...prevCart, { id }]);
  }
  
}
  const slideTo = (index: any) => {
    if (swiper) {
      swiper?.slideTo(index);
    }
  };

  useEffect(() => {
    slideTo(selectedMenu - 1);
  }, [selectedMenu]);
  return (
    <><div style={{ display: "flex", flexDirection: "row", zIndex: 12, color: "#00a99d", position: "absolute", marginTop: "1.5rem", width: "100%", height: "auto", justifyContent: "space-around" }}>
    <Link className="cart-icon" to="/cart" style={{ width: "20%" }}>
      {/* <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
      <img style={{width:"25px",height:"25px"}} src={search} />
    </Link>
    <h3 style={{ width: "60%", textAlign: "center",color:'orange' }}>{"pizza"}</h3>
    <Link className="cart-icon" to="/cart" style={{ width: "20%" }}>
      {/* <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
      <img style={{width:"25px",height:"25px"}} src={search} />
    </Link>
    {/* <Discription heading={heading} description={description} price={price} selectedMenu={selectedMenu} setType={setType} addToCart={addToCart} id={id} /> */}
  </div>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSlideChange={(swiper: any) => {
          setSelectedMenu(swiper.activeIndex + 1);
        }}
        onSwiper={setSwiper}
        // onSwiper={(swiper:any )=>{ console.log("on swiper",swiper)}}
        style={{ background: "#041A17" }}
      >
        {menu?.map((item: any) => {
          return (
            <SwiperSlide>
              <Swiper
                className="mySwiper2 swiper-v"
                direction={"vertical"}
                spaceBetween={0}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                allowTouchMove={true}
                style={{ background: "#041A17" }}
              >
                
                {item?.aitems?.map((item2: any) => {
                  return (
                    <SwiperSlide>
                      <div>
                        <div>
                          <OverlayBar
                            catName={item?.name}
                            heading={item2.name}
                            id={item2?.id}
                            price={item2?.price}
                            description={item2.description}
                            selectedMenu={selectedMenu}
                            setType={setType}
                            index={0}
                            videoData={videoData[0]}
                            addToCart= {addToCartHandler}
                          />
                        </div>
                        {
                          item2?.video!=""?
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
                          >
                            {/* <source src={Data?.[0]?.videoPath} type="video/mp4" /> */}
                            <source
                              src={
                                "https://admin.komandapp.com" +
                                item2?.video_path
                              }
                              type="video/mp4"
                            />
                          </video>:
                          <img src={"https://admin.komandapp.com" +item2?.logom}></img>
                        }
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
