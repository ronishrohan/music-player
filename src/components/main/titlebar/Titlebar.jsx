import React from "react";
import {icons} from "../../../utils/icons"
import {appWindow} from "@tauri-apps/api/window"
import SearchBar from "./SearchBar";

const Button = ({ redOnHover,action,children }) => {
    function handleClick(){
        if(action=="maximize"){
            appWindow.toggleMaximize();
        }
        else if(action == "minimize"){
            appWindow.minimize();
        }
        else if(action == "close"){
            appWindow.close();
        }
    }
  return <button onClick={handleClick} className={`h-full aspect-square flex items-center text-text-200 justify-center hover:text-white ${redOnHover ? "hover:bg-accent-900" : "hover:bg-primary-300"}`}>{children}</button>;
};

const Titlebar = () => {
  return (
    <div
      data-tauri-drag-region
      className="relative header w-full h-[60px] flex items-center justify-start pl-2 lg:justify-center bg-primary-100 overflow-hidden"
    >
        {/* <div className="absolute size-48 pointer-events-none bg-accent-900 blur-3xl opacity-35 -left-10" ></div> */}
        <SearchBar></SearchBar>
      <div className="flex absolute right-0 h-full">
        <Button action={"minimize"}>{"-"}</Button>
        <Button action={"maximize"}>{icons.maximize}</Button>
        <Button action={"close"} redOnHover>{icons.close}</Button>
      </div>
    </div>
  );
};

export default Titlebar;
