import icon1 from "../../assets/bowl.png";
import icon2 from "../../assets/corn.png";
import icon3 from "../../assets/cup.png";
import icon4 from "../../assets/pizza.png";
import icon5 from "../../assets/burger.png";
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css/pagination';
import { useContext, useState } from "react";
import { Navigation } from "swiper/modules";
import { DataContext } from "../../main";


interface appProps {
    changeMenu?: any;
    selectedMenu:any;
}

export default function BottomBar2({changeMenu,selectedMenu}:appProps){
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const { menu } = useContext(DataContext)

    return(
        <Swiper
            className="mySwiper swiper-h menuBar2 onlyMobile"
            spaceBetween={0}
            slidesPerView={5}
            modules={[Navigation]}
            navigation={true}
            style={{ background: "transparent", width: "100%", position: "fixed", bottom: "55px", height: "8vh", color: "white", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "5px 5px 0 0", padding: "0 5%", zIndex:"2" }}
        >
      {menu?.map((item:any,index:number) => {
              return (
                <SwiperSlide style={{backgroundColor:"transparent"}}><div className={selectedMenu == index+1 ? "activeMenu2" : "menu"} onClick={() => changeMenu(index+1)}><img className="menuicon" src={icon1} /></div></SwiperSlide>
              )})}
        {/* <div style={{ background: "transparent", width: "100%", position: "fixed", bottom: "80px", height: "8vh", color: "white", display: "flex", alignItems: "center", justifyContent: "space-evenly", borderRadius: "5px 5px 0 0", padding: "0 5%", zIndex:"2" }}> */}
        {/* <SwiperSlide style={{backgroundColor:"transparent"}}><div className={selectedMenu == 1 ? "activeMenu2" : "menu"} onClick={() => changeMenu(1)}><img className="menuicon" src={icon1} /></div></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"transparent"}}><div className={selectedMenu == 2 ? "activeMenu2" : "menu"} onClick={() => changeMenu(2)}><img className="menuicon" src={icon2} /></div></SwiperSlide> */}
        {/* <SwiperSlide style={{backgroundColor:"transparent"}}> <div className={selectedMenu == 3 ? "activeMenu2" : "menu"} onClick={() => changeMenu(3)}> <img className="menuicon"  src={icon5} /></div></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"transparent"}}> <div className={selectedMenu == 4 ? "activeMenu2" : "menu"} onClick={() => changeMenu(4)}><img className="menuicon"  src={icon4} /></div></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"transparent"}}>  <div className={selectedMenu == 5 ? "activeMenu2" : "menu"} onClick={() => changeMenu(4)}><img className="menuicon"  src={icon3} /></div></SwiperSlide> */}

        {/* </div> */}
        </Swiper>
    )
}