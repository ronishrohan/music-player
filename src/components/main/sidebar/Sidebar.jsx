import React from "react";
import NavLink from "./NavLink";
import { icons } from "../../../utils/icons";

import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="flex flex-col gap-2 relative shrink-0  w-16 lg:w-[250px]">
        <div className=" h-fit bg-primary-600 rounded-2xl flex flex-col p-2 gap-1">
          <NavLink to="/" icon={icons.home} current={pathname}>
            Home
          </NavLink>
          <NavLink to="/search" icon={icons.search} current={pathname}>
            Search
          </NavLink>
          <NavLink to="/library" icon={icons.library} current={pathname}>
            Library
          </NavLink>
        </div>
        <div className=" h-full bg-primary-600 rounded-2xl  transition-all flex flex-col p-2 gap-1">
          <NavLink to="/liked" icon={icons.heart} current={pathname}>
            Liked
          </NavLink>
          
        </div>
      </div>
    </>
  );
};

export default Sidebar;
