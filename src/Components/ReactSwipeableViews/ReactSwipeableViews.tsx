import { Box, Center, Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useMemo, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  bindKeyboard,
  autoPlay,
  virtualize,
} from "react-swipeable-views-utils";
import {
  slideContainerStyle,
  getSlideStyles,
  getRandomColor,
} from "./ReactSwipeableViews.utils";
import { useSwipeable, UP, DOWN, SwipeEventData } from 'react-swipeable';
import "../../style.css";

import { Link } from "react-router-dom";
import { any } from "prop-types";
import Discription from "../Discription";

const SwipeableViewsKeyBoard = bindKeyboard(SwipeableViews);
const SwipeableViewsAutoPlay = autoPlay(SwipeableViews);
const SwipeableViewsVirtualize = virtualize(SwipeableViews);

interface appProps {
  selectedMenu?: any;
  selectType?: any; // optional prop
  setType?:any;
  videoData:any;
  setSelectedMenu:any;
}
export const ReactSwipeableViews = ({selectedMenu, selectType, setType, videoData,setSelectedMenu}:appProps) => {
  const COLORS = useMemo(
    () =>
      Array(200)
        .fill(undefined)
        .map((item) => getRandomColor()),
    []
  );

  const [index, setIndex] = useState(0);
  const handlers = useSwipeable({
    // onSwiped: handleSwiped,
    // onTouchStartOrOnMouseDown: (({ event }) => event.preventDefault()),
    // touchEventOptions: { passive: false },
    // preventScrollOnSwipe: true,
    // trackMouse: true
    onSwipedLeft:()=>{
      if(selectedMenu<4){
        setSelectedMenu(selectedMenu+1)
      }
    },
    onSwipedRight:()=>{
      if(selectedMenu>1){
        setSelectedMenu(selectedMenu-1)
      }
    }
    
  });
  return (
    <Flex  alignItems="center" className="" {...handlers}>
      {/* <Flex>
        <IconButton
          aria-label="left"
          onClick={() => setIndex(index - 1)}
          colorScheme="whatsapp"
        >
          <ChevronLeftIcon />
        </IconButton>
      </Flex> */}
      {/* <Flex> */}
        <SwipeableViewsVirtualize
          containerStyle={slideContainerStyle}
          index={index}
          onChangeIndex={(index) => setIndex(index)}
          slideCount={2}
          slideRenderer={({ index, key }) => {
            return (
              <>
               { 
                selectedMenu==videoData[index]?.category?
                <div key={key} >
                  <div style={{display: "flex", flexDirection: "row", zIndex: 1, color: "#00a99d", position: "absolute", marginTop: "3.5rem", width: "100%",height:"90%", justifyContent: "space-around" }}>
                    <div style={{width:"10%"}}></div>
                    <h3 style={{width:"80%", textAlign:"center"}}>{videoData?.[index]?.name}</h3>
                    <Link className="cart-icon" to="/cart" style={{ width: "10%" }}>
                      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M16 3.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5Z" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 4h2.967a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v0M9 11h6M9 15h3" stroke="#fff" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </Link>
                    <Discription selectedMenu={selectedMenu} setType={setType}/>
                  </div>
                  

                    <div style={getSlideStyles(COLORS[index])}>
                      {/* Video No {index + 1} */}
                    
                        <video 
                          style={{
                            position: 'fixed',
                            width: '100%',
                            // left: '50%',
                            // top: '50%',
                            height: '100%',
                            objectFit: 'cover',overflow:"hidden"
                          
                            // transform: 'translate(-50%, -50%)',
                            // zIndex: '9'
                          }}
                          // src={videoData?.[index]?.videoPath}
                          loop
                          muted
                          autoPlay                         
                          playsInline
                        >
                                 <source src={videoData?.[index]?.videoPath} type="video/mp4" />

                          </video>
                         
                    </div>
                    
                  </div>:
                  null
                }
              </>
            );
          }}
          axis="y"
        />
      {/* </Flex> */}
      {/* <Flex>
        <IconButton
          aria-label="right"
          onClick={() => setIndex(index + 1)}
          colorScheme="whatsapp"
        >
          <ChevronRightIcon />
        </IconButton>
      </Flex> */}
    </Flex>
  );
};
