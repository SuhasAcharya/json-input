"use client";
import React, { useEffect, useState } from "react";
import Input from "./components/input";
import Query from "./components/query";
import Request from "./components/request";
import Response from "./components/response";
import { BsMoon, BsSun } from "react-icons/bs";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const theme = darkMode ? "bg-black text-white" : "bg-white text-black";
    setTheme(theme);
  }, [darkMode]);

  return (
    <div className={`flex flex-col ${theme} h-screen`}>
      <div className="w-full flex justify-end p-8">
        <div className="fixed border-[1px] rounded-md border-gray-700 w-10 flex items-center justify-center h-10 bg-slate-600 text-white">
          <button onClick={toggleTheme}>
            {darkMode ? (
              <BsSun className="text-yellow-300" />
            ) : (
              <BsMoon className="text-white" />
            )}
          </button>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto pb-[100px]">
        <Input darkMode={darkMode} theme={theme} />
        <Request darkMode={darkMode} theme={theme} />
        <Response darkMode={darkMode} theme={theme} />
      </div>
      <div className="fixed bottom-0 left-0 w-full ">
        <Query darkMode={darkMode} theme={theme} />
      </div>
    </div>
  );
};

export default Home;
