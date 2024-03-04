import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  currentCategory: string;
  initialYOffset: number;
  animate:boolean;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  currentCategory,
  initialYOffset,
  animate,
}) => {
  const [titleY, setTitleY] = useState(initialYOffset);
  const [animateText,setAnimateText] = useState(animate)

  useEffect(() => {
    // setTitleY(-100); // Reset animation on state change
    console.log("I am Changed!!")
    setAnimateText(true)
    setTimeout(()=>{
        setAnimateText(false)
    },300)
  }, [currentCategory]);

  const animationVariants= {
    from: { y: -100,opacity:0 },
    to: { y: 0,opacity:1 },
    // transition: { duration: 0.5, ease: 'easeInOut' }, // Customize as desired
  };

  return (
    <motion.div variants={animationVariants} animate={animateText?"from":"to"} initial="from">
       <h4
          style={{
            // width: "60%",
            textAlign: "center",
            color: "orange",
          }}
        >
          
          {currentCategory}
        </h4>
    </motion.div>
  );
};

export default AnimatedTitle;
