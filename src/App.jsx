import React from "react";
import Titlebar from "./components/main/titlebar/Titlebar";
import Sidebar from "./components/main/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Player from "./components/main/player/Player";

const App = () => {
  return (
    <main className="bg-primary-100 h-screen flex flex-col gap-1">
      <Titlebar></Titlebar>
      <div className="flex w-full h-full gap-1 px-1">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </div>
      <div className="px-1 pb-1"><Player></Player></div>
    </main>
  );
};

export default App;
