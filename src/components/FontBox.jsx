import React from "react";
import "../index.css";
import { FaDollarSign } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const FontBox = ({ font, headingFont }) => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 justify-between shadow-2xl rounded-sm w-60">
      <div className="bg-gray-200 p-2 rounded-lg text-start">
        <h1 className="text-sm text-gray-400">
          Font :{" "}
          <span className="uppercase text-[14px] font-bold text-red-400">
            {headingFont}
          </span>
        </h1>
      </div>
      <div className="mt-3 mb-2 h-50 bg-slate-100 shadow-md h-40 rounded-sm overflow-hidden">
        <h1
          className={`rtl lg:text-3xl md:text-2xl sm:text-2xl text-gray-700 p-2 py-4 mb-5`}
          style={{ fontFamily: headingFont }}
        >
          <p>پښتو زما مورنۍ ژبه ده </p>
          <p>لر او بر، يو افغان </p>
        </h1>
      </div>

      <div className="flex gap-2 content-end mt-3 justify-center">
        <a href={`/fonts/${font}`}>
          <div className="flex rounded-full w-max justify-center cursor-pointer py-1 px-2 text-center bg-green-800">
            <IoMdDownload className="text-white text-base" />
            <p className="hidden lg:block md:block text-white text-sm uppercase ">
              {" "}
              Download
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FontBox;
