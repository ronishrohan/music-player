import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { icons } from "../../utils/icons";

const DownloadPage = () => {
  const [url, setUrl] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  function handleUpdateURL(e) {
    setUrl(e.target.value);
    if (e.target.value.length > 0) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }
  function handleSubmit(){
    
  }
  return (
    <>
      <div className="size-full relative p-4 h-full">
        <div className="text-3xl md:text-sm" ></div>
      </div>
    </>
  );
};

export default DownloadPage;
