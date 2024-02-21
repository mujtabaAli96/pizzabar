import React, { useEffect, useRef, useState } from 'react';
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
interface appProps {
  selectedMenu?: any;
  selectType?: any; // optional prop
  setType?: any;
  videoData: any;
  setSelectedMenu: any;
}

export default function MySwiper({ selectedMenu, setType, videoData, setSelectedMenu }: appProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);


  // const swiperSlideCustop = useSwiper();

  const slideTo = (index:any) => {
    console.log("selectedMenu : ",index)
    if(swiper){
      swiper?.slideTo(index)}
    
  }
    
  useEffect(() => {
    slideTo(selectedMenu-1)
  },[selectedMenu])
  return (
    <>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSlideChange={(swiper:any) => {setSelectedMenu(swiper.activeIndex + 1)}}
        onSwiper={setSwiper} 
        // onSwiper={(swiper:any )=>{ console.log("on swiper",swiper)}}
        style={{background:"#041A17"}}
      >
        {/* <SwiperSlide>Horizontal Slide 1</SwiperSlide> */}
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
            style={{background:"#041A17"}}
          >
            <SwiperSlide>
              <div >
                <div >
                  <OverlayBar electedMenu={selectedMenu} setType={setType} index={0} videoData={videoData[0]}/>
                  {/* <div style={{ display: "flex", flexDirection: "row", zIndex: 1, color: "#00a99d", position: "absolute", marginTop: "3.5rem", width: "100%", height: "90%", justifyContent: "space-around" }}>
                  <Link className="cart-icon" to="/cart" style={{ width: "20%" }}>
                      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </Link>
                    <h3 style={{ width: "60%", textAlign: "center",color:'orange' }}>{videoData?.[0]?.name}</h3>
                    <Link className="cart-icon" to="/cart" style={{ width: "20%" }}>
                      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </Link>
                    <Discription selectedMenu={selectedMenu} setType={setType} />
                  </div> */}
                </div>
                {/* <Discription selectedMenu={selectedMenu} setType={setType}/> */}

                <video
                  style={{
                    position: 'fixed',
                    width: '100%',
                    // left: '50%',
                    // top: '50%',
                    height: '100%',
                    objectFit: 'cover', overflow: "hidden"

                    // transform: 'translate(-50%, -50%)',
                    // zIndex: '9'
                  }}
                  // src={videoData?.[index]?.videoPath}
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src={Data?.[0]?.videoPath} type="video/mp4" />

                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>  <div >
              <div  >
              <OverlayBar electedMenu={selectedMenu} setType={setType} index={0} videoData={videoData[0]}/>

                {/* <div style={{ display: "flex", flexDirection: "row", zIndex: 1, color: "#00a99d", position: "absolute", marginTop: "3.5rem", width: "100%", height: "90%", justifyContent: "space-around" }}>
                  <div style={{ width: "10%" }}></div>
                  <h3 style={{ width: "80%", textAlign: "center" }}>{Data?.[0]?.name}</h3>
                  <Link className="cart-icon" to="/cart" style={{ width: "10%" }}>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </Link>
                  <Discription selectedMenu={selectedMenu} setType={setType} />
                </div> */}
              </div>
              {/* <Discription selectedMenu={selectedMenu} setType={setType}/> */}

              <video
                style={{
                  position: 'fixed',
                  width: '100%',
                  // left: '50%',
                  // top: '50%',
                  height: '100%',
                  objectFit: 'cover', overflow: "hidden"

                  // transform: 'translate(-50%, -50%)',
                  // zIndex: '9'
                }}
                // src={videoData?.[index]?.videoPath}
                loop
                muted
                autoPlay
                playsInline
              >
                <source src={Data?.[1]?.videoPath} type="video/mp4" />

              </video>
            </div></SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>  <div >
          <div  >
          <OverlayBar electedMenu={selectedMenu} setType={setType} index={1} videoData={videoData[0]}/>

            {/* <div style={{ display: "flex", flexDirection: "row", zIndex: 1, color: "#00a99d", position: "absolute", marginTop: "3.5rem", width: "100%", height: "90%", justifyContent: "space-around" }}>
              <div style={{ width: "10%" }}></div>
              <h3 style={{ width: "80%", textAlign: "center" }}>{Data?.[0]?.name}</h3>
              <Link className="cart-icon" to="/cart" style={{ width: "10%" }}>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </Link>
              <Discription selectedMenu={selectedMenu} setType={setType} />
            </div> */}
          </div>
          {/* <Discription selectedMenu={selectedMenu} setType={setType}/> */}

          <video
            style={{
              position: 'fixed',
              width: '100%',
              // left: '50%',
              // top: '50%',
              height: '100%',
              objectFit: 'cover', overflow: "hidden"

              // transform: 'translate(-50%, -50%)',
              // zIndex: '9'
            }}
            // src={videoData?.[index]?.videoPath}
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={Data?.[2]?.videoPath} type="video/mp4" />

          </video>
        </div></SwiperSlide>
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

          >
            <SwiperSlide>
              <div >
                <div  >
                <OverlayBar electedMenu={selectedMenu} setType={setType} index={2} videoData={videoData[0]}/>

                  {/* <div style={{ display: "flex", flexDirection: "row", zIndex: 1, color: "#00a99d", position: "absolute", marginTop: "3.5rem", width: "100%", height: "90%", justifyContent: "space-around" }}>
                    <div style={{ width: "10%" }}></div>
                    <h3 style={{ width: "80%", textAlign: "center" }}>{videoData?.[0]?.name}</h3>
                    <Link className="cart-icon" to="/cart" style={{ width: "10%" }}>
                      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </Link>
                    <Discription selectedMenu={selectedMenu} setType={setType} />
                  </div> */}
                </div>
                {/* <Discription selectedMenu={selectedMenu} setType={setType}/> */}

                <video
                  style={{
                    position: 'fixed',
                    width: '100%',
                    // left: '50%',
                    // top: '50%',
                    height: '100%',
                    objectFit: 'cover', overflow: "hidden"

                    // transform: 'translate(-50%, -50%)',
                    // zIndex: '9'
                  }}
                  // src={videoData?.[index]?.videoPath}
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src={Data?.[3]?.videoPath} type="video/mp4" />

                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>  <div >
              <div  >
              <OverlayBar electedMenu={selectedMenu} setType={setType} index={2} videoData={videoData[4]}/>

                {/* <div style={{ display: "flex", flexDirection: "row", zIndex: 1, color: "#00a99d", position: "absolute", marginTop: "3.5rem", width: "100%", height: "90%", justifyContent: "space-around" }}>
                  <div style={{ width: "10%" }}></div>
                  <h3 style={{ width: "80%", textAlign: "center" }}>{Data?.[4]?.name}</h3>
                  <Link className="cart-icon" to="/cart" style={{ width: "10%" }}>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </Link>
                  <Discription selectedMenu={selectedMenu} setType={setType} />
                </div> */}
              </div>
              {/* <Discription selectedMenu={selectedMenu} setType={setType}/> */}

              <video
                style={{
                  position: 'fixed',
                  width: '100%',
                  // left: '50%',
                  // top: '50%',
                  height: '100%',
                  objectFit: 'cover', overflow: "hidden"

                  // transform: 'translate(-50%, -50%)',
                  // zIndex: '9'
                }}
                // src={videoData?.[index]?.videoPath}
                loop
                muted
                autoPlay
                playsInline
              >
                <source src={Data?.[4]?.videoPath} type="video/mp4" />

              </video>
            </div></SwiperSlide>
          </Swiper>
        </SwiperSlide>
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

          >
            <SwiperSlide>
              <div >
                <div  >
                <OverlayBar electedMenu={selectedMenu} setType={setType} index={3} videoData={videoData[6]}/>

                  {/* <div style={{ display: "flex", flexDirection: "row", zIndex: 1, color: "#00a99d", position: "absolute", marginTop: "3.5rem", width: "100%", height: "90%", justifyContent: "space-around" }}>
                    <div style={{ width: "10%" }}></div>
                    <h3 style={{ width: "80%", textAlign: "center" }}>{videoData?.[6]?.name}</h3>
                    <Link className="cart-icon" to="/cart" style={{ width: "10%" }}>
                      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </Link>
                    <Discription selectedMenu={selectedMenu} setType={setType} />
                  </div> */}
                </div>
                {/* <Discription selectedMenu={selectedMenu} setType={setType}/> */}

                <video
                  style={{
                    position: 'fixed',
                    width: '100%',
                    // left: '50%',
                    // top: '50%',
                    height: '100%',
                    objectFit: 'cover', overflow: "hidden"

                    // transform: 'translate(-50%, -50%)',
                    // zIndex: '9'
                  }}
                  // src={videoData?.[index]?.videoPath}
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src={Data?.[6]?.videoPath} type="video/mp4" />

                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide>  <div >
              <div  >
              <OverlayBar electedMenu={selectedMenu} setType={setType} index={3} videoData={videoData[6]}/>

                {/* <div style={{ display: "flex", flexDirection: "row", zIndex: 1, color: "#00a99d", position: "absolute", marginTop: "3.5rem", width: "100%", height: "90%", justifyContent: "space-around" }}>
                  <div style={{ width: "10%" }}></div>
                  <h3 style={{ width: "80%", textAlign: "center" }}>{Data?.[6]?.name}</h3>
                  <Link className="cart-icon" to="/cart" style={{ width: "10%" }}>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </Link>
                  <Discription selectedMenu={selectedMenu} setType={setType} />
                </div> */}
              </div>
              {/* <Discription selectedMenu={selectedMenu} setType={setType}/> */}

              <video
                style={{
                  position: 'fixed',
                  width: '100%',
                  // left: '50%',
                  // top: '50%',
                  height: '100%',
                  objectFit: 'cover', overflow: "hidden"

                  // transform: 'translate(-50%, -50%)',
                  // zIndex: '9'
                }}
                // src={videoData?.[index]?.videoPath}
                loop
                muted
                autoPlay
                playsInline
              >
                <source src={Data?.[6]?.videoPath} type="video/mp4" />

              </video>
            </div></SwiperSlide>
          </Swiper>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
