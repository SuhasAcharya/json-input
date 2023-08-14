"use client";
import React from "react";

type DataType = {
  key: string;
  type: string;
};

export default function Request({ darkMode, theme }: any) {
  const data: DataType[] = [
    { key: "subject", type: "string" },
    { key: "messageType", type: "string" },
    { key: "messageText", type: "string" },
    { key: "isRequired", type: "boolean" },
  ];
  return (
    <div className={`p-4 h-auto min-h-[25vh] w-full`}>
      <form action="" className="flex items-center justify-center">
        <label
          className={`w-[80%] h-auto flex flex-col items-start pl-[100px] px-4 py-6 gap-y-8 ${theme} rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer border-blue`}
        >
          <span
            className={`mt-2 text-base leading-normal ${theme} w-full flex justify-center `}
          >
            REQUEST:
          </span>
          {data.map((item) => (
            <div key={item.key} className="mb-4">
              <label
                className={`block font-medium mb-1 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                {item.key}
              </label>
              {item.type === "string" ? (
                <input
                  type="text"
                  className="border rounded-md p-2 w-[100vh] focus:outline-none focus:border-blue-500"
                />
              ) : (
                item.type === "boolean" && (
                  <div className="form-control w-52">
                    <label className="cursor-pointer label">
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                      />
                    </label>
                  </div>
                )
              )}
            </div>
          ))}
        </label>
      </form>
    </div>
  );
}
