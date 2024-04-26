import React, { useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../utils/icons";
import { AnimatePresence, motion } from "framer-motion";

const Album = ({ image, artist }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="transition-colors relative size-full aspect-square rounded-2xl cursor-default  overflow-hidden flex items-center justify-center blur-0 border-2 border-transparent hover:border-accent-900"
    >
      <AnimatePresence>
        {hovered && (
          <motion.button
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "tween", ease: "circInOut" }}
            className="absolute z-20 size-10 top-2 right-2 shadow-[0px_0px_20px_rgba(0,0,0,0.5)] rounded-full bg-accent-900 flex items-center justify-center text-black hover:bg-white hover:text-accent-900"
          >
            {icons.play}
          </motion.button>
        )}
      </AnimatePresence>
      <img className="size-full " src={image} alt="" />
      <div className="w-full h-14 bottom-0 absolute bg-[rgba(0,0,0,0.9)] backdrop-blur-md flex flex-col px-2 leading-3 ">
        <div className="text-xl leading-8">Flower Boy</div>
        <div className="text-text-300 font-medium">Tyler, The Creator</div>
      </div>
    </Link>
  );
};

export default Album;
