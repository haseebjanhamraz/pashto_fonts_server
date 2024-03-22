import React, { useState } from "react";
import "../index.css";
import { IoMdDownload } from "react-icons/io";

const FontBox = ({ text, font, headingFont }) => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 justify-between shadow-2xl rounded-sm w-60">
      <div className="bg-gray-200 p-2 rounded-lg text-start">
        <h1 className="text-sm text-gray-400">
          Font :{" "}
          <span className="uppercase text-[14px] font-bold text-gray-700">
            {headingFont}
          </span>
        </h1>
      </div>
      <div className="mt-3 mb-2 h-50 bg-slate-100 shadow-md h-40 rounded-sm overflow-hidden">
        <h1
          className={`rtl lg:text-3xl md:text-2xl sm:text-2xl text-gray-700 p-2 py-4 mb-5`}
          style={{ fontFamily: headingFont }}
        >
          <p className="text-2xl text-red-600">
            {text || "پښتو زما مورنۍ ژبه ده"}
          </p>
          <p className="text-xl text-green-600">
            {text || "لر او بر يو افغان"}
          </p>
          <p className="text-lg text-gray-600">{text || "پښتونخوا زما وطن"}</p>
        </h1>
      </div>

      <div className="flex gap-2 content-end mt-3 justify-center">
        <a href={`/fonts/${font}`}>
          <div className="items-center gap-2 flex rounded-full w-max justify-center cursor-pointer py-1 px-2 text-center bg-slate-600 hover:bg-slate-800">
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
