"use client";
import React, { useEffect, useState } from "react";
import Input from "./components/input";
import Query from "./components/query";
import Request from "./components/request";
import Response from "./components/response";
import { BsMoon, BsSun } from "react-icons/bs";
import { LuScanFace } from "react-icons/lu";

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("");
  const [showRequest, setShowRequest] = useState<boolean>(false);
  const [userQuery, setUserQuery] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<
    { type: string; message: string }[]
  >([]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleSendClick = () => {
    setShowRequest(true);
    setChatHistory([...chatHistory, { type: "user", message: userQuery }]);
    setUserQuery("");
  };

  useEffect(() => {
    const theme = darkMode ? "bg-gray-800 text-white" : "bg-white text-black";
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
      <div className="flex-grow overflow-y-auto pb-[100px] mt-20 ">
        {showRequest && (
          <div className="space-y-4 p-4 bg-green-200">
            {chatHistory.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-center space-x-2 ${
                    item.type === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {item.type === "user" && (
                    <LuScanFace className="h-7 w-7 ml-4" />
                  )}
                  <div
                    className={`rounded-md p-2 max-w-[70%] ${
                      item.type === "user" ? "order-2" : "order-1"
                    }`}
                  >
                    <text className="font-semibold ">{item.message}</text>
                  </div>
                  {item.type !== "user" && <LuScanFace />}
                </div>
              </div>
            ))}
          </div>
        )}
        {/* <Input
          darkMode={darkMode}
          theme={theme}
          onSendClick={handleSendClick}
          userQuery={userQuery}
          setUserQuery={setUserQuery}
        /> */}
        {showRequest && <Request darkMode={darkMode} theme={theme} />}
        {/* <Response darkMode={darkMode} theme={theme} /> */}
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <Query
          darkMode={darkMode}
          theme={theme}
          onSendClick={handleSendClick}
          userQuery={userQuery}
          setUserQuery={setUserQuery}
        />
      </div>
    </div>
  );
};

export default Home;
