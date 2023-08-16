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

  useEffect(() => {
    const theme = darkMode ? "bg-gray-600 text-white" : "bg-white text-black";
    setTheme(theme);
  }, [darkMode]);

  const handleSendClick = () => {
    setShowRequest(true);
    setChatHistory([...chatHistory, { type: "user", message: userQuery }]);
    setUserQuery("");
  };

  const shouldRenderInput = userQuery.trim().toLowerCase() === "json";

  return (
    <div
      className={`flex flex-col ${theme} h-screen transition-all duration-400`}
    >
      <div className="w-full flex justify-end p-8 ">
        <h2
          className={`${
            darkMode ? "text-white" : "text-gray-700"
          } font-bold h-auto fixed left-6 top-8  text-2xl`}
        >
          Optus Homes
        </h2>
        <div
          className={`fixed top-8 border-[1px] rounded-md border-white w-10 flex items-center justify-center h-10 bg-slate-600 text-white transition-colors duration-300 ${
            darkMode ? "bg-gray-700" : "bg-slate-600"
          }`}
        >
          <button onClick={toggleTheme}>
            {darkMode ? (
              <BsSun className="text-yellow-300" />
            ) : (
              <BsMoon className="text-white" />
            )}
          </button>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto pb-[100px] mt-10 ">
        {showRequest && (
          <div
            className={`space-y-4 p-4 ${
              darkMode ? " bg-gray-500" : "bg-gray-700"
            } `}
          >
            {chatHistory.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.type === "user" ? "justify-start" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-center space-x-2 relative ${
                    item.type === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {item.type === "user" && (
                    // <LuScanFace
                    //   className={`${
                    //     darkMode ? "text-white" : "text-white"
                    //   } h-7 w-7 absolute left-4`}
                    // />
                    <div
                      className={`absolute left-4 h-4 w-4 rounded-full bg-white flex justify-center items-center p-4`}
                    >
                      <text className="text-black">PV</text>
                    </div>
                  )}
                  <div
                    className={`rounded-md p-2 pl-5 ${
                      item.type === "user" ? "order-2" : "order-1"
                    }`}
                  >
                    <text
                      className={`font-semibold ml-8 w-full ${
                        darkMode ? "text-white" : "text-white"
                      } `}
                    >
                      {item.message}
                    </text>
                  </div>
                  {/* {item.type !== "user" && <LuScanFace />} */}
                </div>
              </div>
            ))}
          </div>
        )}
        {shouldRenderInput && (
          <Input
            darkMode={darkMode}
            theme={theme}
            onSendClick={handleSendClick}
            userQuery={userQuery}
            setUserQuery={setUserQuery}
          />
        )}
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
