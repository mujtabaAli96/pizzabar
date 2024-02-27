import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import search from "../../assets/search.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../style.css';
import {
  slideContainerStyle,
  getSlideStyles,
  getRandomColor,
} from "./ReactSwipeableViews.utils";

// import required modules
import { Pagination } from 'swiper/modules';
import Discription from '../Discription';
import { Link } from 'react-router-dom';
import { Data } from '../../App';
import OverlayBar from './overlayBar';
import { DataContext } from '../../main';
interface appProps {
  selectedMenu?: any;
  selectType?: any; // optional prop
  setType?: any;
  videoData: any;
  setSelectedMenu: any;
}

export default function MySwiper({ selectedMenu, setType, videoData, setSelectedMenu }: appProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const { menu } = useContext(DataContext)

  // const swiperSlideCustop = useSwiper();

  const slideTo = (index: any) => {
    if (swiper) {
      swiper?.slideTo(index)
    }

  }

  useEffect(() => {
    slideTo(selectedMenu - 1)
  }, [selectedMenu])
  return (
    <>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSlideChange={(swiper: any) => { setSelectedMenu(swiper.activeIndex + 1) }}
        onSwiper={setSwiper}
        // onSwiper={(swiper:any )=>{ console.log("on swiper",swiper)}}
        style={{ background: "#041A17" }}
      >
         {menu?.map((item:any) => {
              return (
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            allowTouchMove={true}
            style={{ background: "#041A17" }}
          >
            {item?.aitems?.map((item2:any) => {
              return (

                <SwiperSlide>
                  <div >
                    <div >
                      <OverlayBar catName={item?.name} heading={item2.name} description={item2.description} selectedMenu={selectedMenu} setType={setType} index={0} videoData={videoData[0]} />
                    </div>

                    <video
                      style={{
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', overflow: "hidden"
                      }}
                      loop
                      muted
                      autoPlay
                      playsInline
                    >
                      <source src={Data?.[0]?.videoPath} type="video/mp4" />
                    </video>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </SwiperSlide>
        )})}
        {/* <SwiperSlide>Horizontal Slide 1</SwiperSlide> */}


      </Swiper>
    </>
  );
}
