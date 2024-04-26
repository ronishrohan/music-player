import React from "react";
import { icons } from "../../../utils/icons";

const SearchBar = () => {
  return (
    <div className="h-8 w-1/2 relative ">
        <div className="absolute h-full aspect-square flex items-center justify-center translate-y-[2px]  pointer-events-none text-text-100"  >{icons.search}</div>
      <input
        type="text"
        className="size-full flex justify-center items-center text-center rounded-lg p-4 bg-primary-400 text-md outline-none placeholder:text-text-100 placeholder:font-medium text-white border-2 border-transparent focus:border-accent-900 transition-colors"
        placeholder="Search"
        spellCheck="false"
      />
    </div>
  );
};

export default SearchBar;
