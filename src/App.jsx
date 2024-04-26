import React from "react";
import Titlebar from "./components/main/titlebar/Titlebar";
import Sidebar from "./components/main/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Player from "./components/main/player/Player";
import Search from "./pages/search/Search";
import Library from "./pages/library/Library";

const App = () => {
  return (
    <main className="bg-primary-100 h-screen flex flex-col text-white font-overused overflow-hidden">
      <Titlebar></Titlebar>
      <section className="flex flex-col gap-2 h-full overflow-hidden">
        <div className="flex w-full h-full gap-2 px-2 overflow-hidden">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/search" element={<Search></Search>}></Route>
            <Route path="/library" element={<Library></Library>}></Route>
          </Routes>
        </div>
        <div className="px-2 pb-2 shrink-0">
          <Player></Player>
        </div>
      </section>
    </main>
  );
};

export default App;
