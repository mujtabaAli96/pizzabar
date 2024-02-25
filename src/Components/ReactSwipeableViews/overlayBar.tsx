import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import search from "../../assets/search.png";
// import icon1 from "../../assets/Burguer.png";
import icon2 from "../../assets/Cocktail.png";
import icon3 from "../../assets/Nigiri.png";
import icon4 from "../../assets/Wine.png";
import icon1 from "../../assets/burgerIcn.png";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../style.css';


// import required modules
import Discription from '../Discription';
import { Link } from 'react-router-dom';
import { Data } from '../../App';
interface appProps {
  selectedMenu?: any;
  selectType?: any; // optional prop
  setType?: any;
  videoData: any;
  index:any;
  heading:any;
  description:any;
  catName:string;
}

export default function OverlayBar({ catName,heading,description,selectedMenu, setType, videoData,index }: appProps) {
  const iconMappings = {
    0: icon1,
    1: icon1,
    2: icon1,
    3:icon1,
  }; // Or use a conditional statement to select the icon based on index

  const dynamicIcon = iconMappings[index]; 
  return (
  
    <div style={{ display: "flex", flexDirection: "row", zIndex: 1, color: "#00a99d", position: "absolute", marginTop: "3.5rem", width: "100%", height: "90%", justifyContent: "space-around" }}>
      <Link className="cart-icon" to="/cart" style={{ width: "20%" }}>
        {/* <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
        <img style={{width:"30px",height:"30px"}} src={dynamicIcon} />
      </Link>
      <h3 style={{ width: "60%", textAlign: "center",color:'orange' }}>{catName}</h3>
      <Link className="cart-icon" to="/cart" style={{ width: "20%" }}>
        {/* <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
        <img style={{width:"35px",height:"30px"}} src={search} />
      </Link>
      <Discription heading={heading} description={description} selectedMenu={selectedMenu} setType={setType} />
    </div>
                
  );
}
