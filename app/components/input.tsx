"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFiletypeJson } from "react-icons/bs";

export default function Input() {
  const [fileContent, setFileContent] = useState("");

  const handleFileChange = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setFileContent(content);

        toast.success("File uploaded successfully!", {
          position: "bottom-center",
          autoClose: 3000, // Auto close after 3 seconds
        });
      };

      reader.readAsText(file);
    }
  };

  return (
    <div className="p-4 h-auto w-full mt-[10%]">
      <form action="" className="flex items-center justify-center">
        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer border-blue">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <BsFiletypeJson />
          </svg>
          <span className="mt-2 text-base leading-normal">
            Select a .json file
          </span>
          <input
            name="file"
            type="file"
            accept=".json"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </form>

      {fileContent && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold">Uploaded File Content:</h2>
          <pre className="mt-2 whitespace-pre-wrap">{fileContent}</pre>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
