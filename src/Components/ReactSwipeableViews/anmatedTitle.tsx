import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { transition } from '@chakra-ui/react';

interface AnimatedTitleProps {
  currentCategory: string;
  animateText:boolean;
  setAnimateText:any;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  currentCategory,
  animateText,
  setAnimateText,
}) => {
  // const [titleY, setTitleY] = useState(initialYOffset);
  // const [animateText,setAnimateText] = useState(false)

  useEffect(() => {
    // setTitleY(-100); // Reset animation on state change
    // setAnimateText(true)
    setTimeout(()=>{
        setAnimateText(false)
    },100)
  }, [currentCategory]);

  const animationVariants= {
    from: { y: -100,opacity:0 },
    to: { y: 0,opacity:1,transition:{duration:0.5} },
    // transition: { duration: 0.5, ease: 'easeInOut' }, // Customize as desired
  };

  return (
    <motion.div variants={animationVariants} animate={animateText?"from":"to"} initial="from">
       <h4
          style={{
            // width: "60%",
            margin:"0",
            textAlign: "center",
            color: "orange",
          }}
        >
          
          {animateText!=true&&currentCategory}
        </h4>
    </motion.div>
  );
};

export default AnimatedTitle;
