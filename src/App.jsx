import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { appWindow } from "@tauri-apps/api/window";
import { motion } from "framer-motion";
import DownloadPage from "./component/download/DownloadPage";
import { icons } from "./utils/icons";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import HistoryPage from "./component/history/HistoryPage";

function NavbarButton({ children, ...others }) {
  const { pathname } = useLocation();

  return (
    <Link
      className={`px-4 py-2 box-border font-normal text-white bg-gradient-to-tl transition-all ${
        pathname === others.to
          ? "from-green-950 to-black"
          : "bg-transparent hover:bg-[rgb(10,10,10)]"
      }`}
      {...others}
    >
      {children}
    </Link>
  );
}

function TitlebarButton({ red, children, ...others }) {
  return (
    <button
      {...others}
      className={`h-full aspect-square box-border flex items-center justify-center ${
        red ? "hover:bg-red-700" : "hover:bg-[rgb(12,12,12)]"
      }`}
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <body className="flex flex-col h-screen font-overused  bg-black">
      <header
        data-tauri-drag-region
        className="sticky top-0 header w-full h-12 flex shrink-0 justify-between items-center overflow-hidden text-white select-none"
      >
        <div className="absolute left-0 size-16 bg-green-500 blur-3xl"></div>
        <h1 className="h-full flex gap-2 text-xl  items-center p-4 pointer-events-none">
          <span className="text-sm leading-3">{icons.bolt}</span>
          <span className="text-xl leading-3"></span>
        </h1>
        <div className="h-12 flex text-white">
          <TitlebarButton onClick={() => appWindow.minimize()}>
            -
          </TitlebarButton>
          <TitlebarButton onClick={() => appWindow.toggleMaximize()}>
            {icons.maximize}
          </TitlebarButton>
          <TitlebarButton red={true} onClick={() => appWindow.close()}>
            {icons.close}
          </TitlebarButton>
        </div>
      </header>
      <main className=" relative text-white font-overused font-thin h-full flex flex-col">
        <motion.div
          initial={{ opacity: 1, y: "0%" }}
          animate={{ opacity: 1, y: "100%" }}
          transition={{
            delay: 1,
            type: "tween",
            ease: "circIn",
            duration: 0.7,
          }}
          className="fixed h-full w-full flex flex-col items-center justify-center bg-black z-50 pointer-events-none"
        >
          <div
            id="logo"
            className="z-40 font-medium text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 to-green-700"
          >
            <span>:0</span>
          </div>
          <div className="absolute -bottom-1/4 rounded-full size-1/2 w-full opacity-10 bg-gradient-to-b from-green-700 to-green-500 blur-3xl"></div>
          <div className="absolute -bottom-10 rounded-full size-1/2 h-9 w-3/4  bg-gradient-to-b from-green-500 to-green-7000 blur-3xl"></div>
        </motion.div>
        <motion.section initial={{scale: 0.8}} animate={{scale: 1}} transition={{type: "spring", damping: 20, delay: 1.5}} className="flex flex-col h-full ">
          <Routes>
            <Route path="/" element={<DownloadPage></DownloadPage>}></Route>
            <Route
              path="/history"
              element={<HistoryPage></HistoryPage>}
            ></Route>
          </Routes>
          <div className=" flex w-full flex-shrink-0 z-40 justify-between text-white items-center">
            <div className="flex">
              <NavbarButton to="/">Dowload</NavbarButton>
              <NavbarButton to="/history">History</NavbarButton>
            </div>
            <div className="flex gap-4 px-4 text-[rgb(80,80,80)]">
              <div className="font-medium text-red-800">seeding</div>
              <div className="flex gap-2">
                <div>{icons.arrow}</div>
                <span className="text-[rgb(190,190,190)]">96 kb/s</span>
              </div>
              <div className="flex gap-2">
                <div className="rotate-180">{icons.arrow}</div>
                <span className="text-[rgb(190,190,190)]">2 kb/s</span>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </body>
  );
}

export default App;
