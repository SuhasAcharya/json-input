import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { BsFiletypeJson } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";

export default function Input({ darkMode, theme }: any) {
  const [fileContent, setFileContent] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const files = fileInput && fileInput.files;

    if (files?.length) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const content = e.target.result;
          if (content) {
            setFileContent(content as string);
          }

          toast.success("File uploaded successfully!", {
            position: "top-right",
            autoClose: 3000, // Auto close after 3 seconds
          });
        }
      };

      reader.readAsText(files[0]);
    }
  };

  return (
    <div className={`p-4 h-auto w-full mt-[10%] ${theme}`}>
      <form action="" className="flex items-center justify-center">
        <label
          className={`w-64 flex flex-col items-center px-4 py-6 ${theme}  rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer border-blue`}
        >
          <svg
            className={`"w-8 h-8 ${darkMode ? "text-white" : "text-black"} `}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <BsFiletypeJson />
          </svg>
          <span className={`mt-2 text-base leading-normal ${theme}`}>
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
          <h2 className={`text-lg font-semibold ${theme}`}>
            Uploaded File Content:
          </h2>
          <pre className={`mt-2 whitespace-pre-wrap ${theme} `}>
            {fileContent}
          </pre>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
