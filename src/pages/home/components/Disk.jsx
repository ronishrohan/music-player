import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Disk = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRotation((prev) => prev + 10);
    }, 200);
    return () => clearTimeout(timeout);
  }, [rotation]);

  return (
    <motion.div
      initial={{ rotateZ: 0 }}
      animate={{ rotateZ: rotation }}
      transition={{ type: "tween", ease: "linear" }}
      className="h-full aspect-square shrink-0 hidden lg:flex items-center justify-center "
    >
      <img
        className="rounded-full"
        src="https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png"
        alt="kanye"
      />
      <div className="absolute size-20 z-40 bg-gradient-to-tr from-primary-200 to-black rounded-full"></div>
      <div className="absolute size-16 z-40 bg-primary-200 rounded-full"></div>
      
    </motion.div>
  );
};

export default Disk;
