import React from "react";
import { icons } from "../../../utils/icons";

const Playing = () => {
  return (
    <div className="flex h-full p-2 w-fit lg:w-1/3 gap-2 overflow-hidden shrink-0">
      <img
        className="rounded-2xl"
        src="https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png"
        alt=""
      />
      <div className="lg:flex gap-2 w-full hidden ">
        <div className="relative flex flex-col leading-4 justify-center overflow-hidden min-w-0 shrink">
          <div className="h-full w-20 absolute pointer-events-none right-0 bg-gradient-to-l from-primary-600 to-transparent"></div>
          <div className="text-lg leading-5 whitespace-nowrap">
            Where This Flower Blooms
          </div>
          <div className="text-text-300 font-medium">Flower Boy</div>
          <div className="text-text-200 font-medium">Tyler, The Creator</div>
        </div>
      </div>
      <button className="h-full aspect-square flex items-center justify-center rounded-full bg-[rgba(0,0,0,0.6)] text-accent-900">
        {icons.heart}
      </button>
    </div>
  );
};

const Controls = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-2">
      <div className="flex gap-4">
        <button className="text-text-200 rotate-180 size-10 hover:text-white">
          {icons.next}
        </button>
        <button className="size-10 bg-accent-900 text-black rounded-full hover:bg-white hover:text-accent-900">
          {icons.pause}
        </button>
        <button className="text-text-200 size-10 hover:text-white">
          {icons.next}
        </button>
      </div>
      <div className="w-full flex items-center text-text-300 gap-2 leading-3">
        <span>1:45</span>
        <div className="h-1 w-full bg-primary-300 rounded-full overflow-hidden">
          <div className="w-[40%] h-full bg-accent-900 rounded-full"></div>
        </div>
        <span>5:45</span>      
      </div>
    </div>
  );
};

const Audio = () => {
  return<div className="h-full w-1/3 shrink-0 flex gap-2 items-center justify-end p-4">
    <button className="h-full aspect-square rounded-2xl hover:bg-primary-200 text-text-300 hover:text-white">{icons.queue}</button>
    <div className="h-full items-center text-text-300 flex gap-2" >
      <button className=" hover:text-white h-full text-text-300">{icons.volume_high}</button>
      <div className="h-10 hover:h-full transition-all w-[120px] rounded-xl cursor-grab bg-primary-500 overflow-hidden group" >
        <div className="h-full w-2/3 transition-colors group-hover:bg-accent-900 bg-primary-300" ></div>
      </div>
    </div>
  </div>
}

const Player = () => {
  return (
    <div className="relative h-[80px] rounded-2xl bg-primary-600 flex items-center ">
      <Playing></Playing>
      <Controls></Controls>
      <Audio></Audio>
    </div>
  );
};

export default Player;
