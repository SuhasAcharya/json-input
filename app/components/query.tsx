import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { BsFillSendFill } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";

interface QueryProps {
  darkMode: boolean;
  theme: string;
  onSendClick: () => void;
  userQuery: string;
  setUserQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Query: React.FC<QueryProps> = ({
  darkMode,
  theme,
  onSendClick,
  userQuery,
  setUserQuery,
}) => {
  const handleSendButtonClick = () => {
    if (!userQuery) {
      toast.error("Please enter a query.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    onSendClick();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserQuery(event.target.value);
  };

  return (
    <div className={`h-auto w-full`}>
      <form action="" className="flex items-center justify-center">
        <label
          className={`w-[100%] h-auto flex flex-col items-center px-4 py-4 gap-y-4 ${theme} rounded-lg shadow-lg tracking-wide uppercase cursor-pointer `}
        >
          <div className={`w-[75%] relative mb-4`}>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered input-success w-full text-black font-medium `}
              value={userQuery}
              onChange={handleInputChange}
              required
            />
            <button
              className="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-success absolute right-0 border-none"
              onClick={(e) => {
                e.preventDefault();
                handleSendButtonClick();
              }}
            >
              <BsFillSendFill />
            </button>
          </div>
        </label>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Query;
