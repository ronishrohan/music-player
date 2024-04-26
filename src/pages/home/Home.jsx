import React from "react";
import Disk from "./components/Disk";
import { icons } from "../../utils/icons";
import Album from "../../components/main/library/Album";

const Home = () => {
  return (
    <div className="bg-primary-600 rounded-xl w-full flex flex-col  overflow-hidden">
      <div className="size-full flex flex-col gap-4 p-4 overflow-y-auto">
        <div className="flex h-[240px] gap-4 shrink-0">
          <Disk></Disk>
          <div className="relative w-full rounded-2xl overflow-hidden p-4 h-full">
            <div className="absolute size-40 w-72 opacity-40 z-10 blur-3xl bg-accent-900 -top-20 left-0"></div>
            <div className="relative flex flex-col z-20 h-full">
              <h1 className="text-3xl font-medium  leading-4 mb-4 text-white ">
                Now Playing
              </h1>
              <div className="text-2xl font-medium text-white">
                Where This Flower Blooms
              </div>
              <div className="text-xl font-medium text-text-300">
                Flower Boy
              </div>
              <div className="text-xl font-medium text-text-200">
                Tyler, The Creator
              </div>
              <button className="transition-colors absolute bottom-0 right-0 rounded-full text-xl text-text-300 hover:border-accent-900 hover:text-black hover:bg-accent-900 size-16">
                <div className="">{icons.heart}</div>
              </button>
            </div>
          </div>
          <div className="relative  rounded-2xl w-1/2 lg:w-[400px] shrink-0 p-4 h-full overflow-hidden">
            <div className="absolute size-72 w-72 opacity-20 z-10 blur-3xl bg-accent-900 -bottom-20 right-0"></div>
            <div className="relative flex flex-col z-20 h-full">
              <h1 className="text-3xl font-medium leading-4 mb-4 text-white">
                In Queue
              </h1>
            </div>
          </div>
        </div>
        <div className="h-full max-h-fit ">
          <h1 className="text-4xl font-medium mb-4" >For You</h1>
          <div className="h-fit grid w-full grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2" >
            <Album artist={"Tyler, The Creator"} title={"Flower Boy"} image={"https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png"} ></Album>
            <Album artist={"Tyler, The Creator"} title={"Flower Boy"} image={"https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png"} ></Album>
            <Album artist={"Tyler, The Creator"} title={"Flower Boy"} image={"https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png"} ></Album>
            <Album artist={"Tyler, The Creator"} title={"Flower Boy"} image={"https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png"} ></Album>
            <Album artist={"Tyler, The Creator"} title={"Flower Boy"} image={"https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png"} ></Album>
            <Album artist={"Tyler, The Creator"} title={"Flower Boy"} image={"https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png"} ></Album>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
